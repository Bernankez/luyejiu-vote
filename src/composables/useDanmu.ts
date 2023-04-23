import { storeToRefs } from "pinia";

export type Connection = "loading" | "connected" | "disconnected" | "error";

export const ConnectionStatus: Record<Connection, string> = {
  loading: "连接中",
  connected: "连接成功",
  disconnected: "连接断开",
  error: "连接失败",
};

export function useDanmu() {
  const { roomId } = storeToRefs(useAppStore());
}
