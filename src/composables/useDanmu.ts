import { toValue } from "@vueuse/core";
import type { DanmuMsg, Message, MessageListener, MsgHandler } from "blive-message-listener";
import { startListen } from "blive-message-listener/browser";

export type Connection = "loading" | "connected" | "disconnected" | "error";

export const ConnectionStatus: Record<Connection, string> = {
  loading: "连接中",
  connected: "连接成功",
  disconnected: "连接断开",
  error: "连接失败",
};

function _useDanmu() {
  const roomId = ref("");
  const lastRoomId = ref("");

  const connectionStatus = ref<Connection>("disconnected");
  const instance = ref<MessageListener>();
  const msgHandler = ref<(msg: Message<DanmuMsg>) => void>();

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
      msgHandler.value?.(msg);
    },
  };

  function connect() {
    const id = toValue(roomId);
    const _id = Number(id);
    if (!Number.isNaN(_id)) {
      close();
      connectionStatus.value = "loading";
      instance.value = startListen(_id, handler);
      lastRoomId.value = id;
    }
  }

  function close() {
    connectionStatus.value = "disconnected";
    instance.value?.close();
  }

  tryOnScopeDispose(close);

  return {
    roomId,
    instance,
    connectionStatus,
    connect,
    close,
    msgHandler,
  };
}
export const useDanmu = createSharedComposable(_useDanmu);
