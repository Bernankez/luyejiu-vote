import type { DanmuMsg, Message, MessageListener, MsgHandler } from "blive-message-listener";
import { startListen } from "blive-message-listener/browser";
import { onScopeDispose, ref, watchEffect } from "vue";
import { createSharedComposable, isDefined, toValue } from "@vueuse/core";
import { storeToRefs } from "pinia";
import type { Connection } from "@/types";
import { useAppStore } from "@/store/app";

export function _useDanmaku(options?: { autoConnect?: boolean; clearOnDisconnect?: boolean }) {
  const { roomId } = storeToRefs(useAppStore());
  const { autoConnect = true, clearOnDisconnect = true } = options || {};

  const connectionStatus = ref<Connection>("disconnected");
  const instance = ref<MessageListener>();
  const messages = ref<Message<DanmuMsg>[]>([]);

  const handler: MsgHandler = {
    onOpen: () => {
      connectionStatus.value = "connected";
    },
    onClose: () => {
      connectionStatus.value = "disconnected";
    },
    onError: () => {
      connectionStatus.value = "error";
    },
    onStartListen: () => {
      console.log("onStartListen");
    },
    onIncomeDanmu: (msg) => {
      if (connectionStatus.value === "connected") {
        messages.value.push(msg);
      }
    },
  };

  function connect() {
    close();
    connectionStatus.value = "loading";
    const id = toValue(roomId);
    if (isDefined(id)) {
      instance.value = startListen(id, handler);
    }
  }

  function close() {
    connectionStatus.value = "disconnected";
    if (instance.value) {
      clearOnDisconnect && clear();
      instance.value?.close();
    }
  }

  function clear() {
    messages.value = [];
  }

  watchEffect(() => {
    if (autoConnect) {
      connect();
    }
  });

  onScopeDispose(() => {
    close();
  });

  return {
    connect,
    close,
    clear,

    connectionStatus,
    instance,
    messages,
  };
}
export const useDanmaku = createSharedComposable(_useDanmaku);
