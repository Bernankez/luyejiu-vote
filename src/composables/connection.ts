import type { MessageListener } from "blive-message-listener";
import { startListen } from "blive-message-listener/browser";
import type { MaybeRefOrGetter } from "vue";

export type ConnectionStatus = "loading" | "connected" | "disconnected" | "error";

export type Connection = ReturnType<typeof useConnection>;

export function useConnection(roomId?: MaybeRefOrGetter<string>) {
  const _globalRoomId = roomId;
  const currentId = ref(toValue(roomId));
  const status = ref<ConnectionStatus>("disconnected");
  const connection = ref<MessageListener>();

  function connect(roomId?: MaybeRefOrGetter<string>) {
    const id = toValue(roomId) || toValue(_globalRoomId);
    const _id = Number(id);
    if (!Number.isNaN(_id)) {
      disconnect();
      status.value = "loading";
      connection.value = startListen(_id, {
        onOpen: () => {
          log.success("connection opened");
        },
        onStartListen: () => {
          status.value = "connected";
          log.success("connected");
        },
        onClose: () => {
          status.value = "disconnected";
          log.info("disconnected");
        },
        onError: () => {
          status.value = "error";
          log.error("error");
        },
      });
      currentId.value = id;
      return connection.value;
    }
  }

  function disconnect() {
    connection.value?.close();
  }

  tryOnScopeDispose(disconnect);

  return {
    status,
    currentId,

    connect,
    disconnect,
  };
}
