import type { User } from "blive-message-listener";

interface Log {
  result: "success" | "failure";
  user: User;
  vote: "up" | "down";
  failReason?: string;
}

export function _useLog() {
  const MAX = 100;
  const logs = ref<Log[]>([]);

  function push({ result, user, vote, failReason }: Log) {
    logs.value.push({ result, user, vote, failReason });
    if (logs.value.length > MAX) {
      logs.value.shift();
    }
  }

  function success(user: User, vote: "up" | "down") {
    push({ result: "success", user, vote });
  }

  function fail(user: User, vote: "up" | "down", failReason: string) {
    push({ result: "failure", user, vote, failReason });
  }

  return {
    logs,
    push,
    success,
    fail,
  };
}
export const useLog = createSharedComposable(_useLog);
