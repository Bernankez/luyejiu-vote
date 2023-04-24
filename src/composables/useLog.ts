import type { User } from "blive-message-listener";
import dayjs from "dayjs";
import type { VoteType } from "./useVote";

type FailType = "voted" | "invalid";

interface Log {
  result: "success" | "failure";
  user: User;
  content: string;
  timestamp: number;
  voteType?: VoteType;
  failType?: FailType;
  lastVote?: VoteType;
}

function _useLog() {
  const MAX = 100;
  const logs = ref<Log[]>([]);

  function push({ result, user, voteType, failType, content, lastVote }: Omit<Log, "timestamp">) {
    const timestamp = dayjs().valueOf();
    logs.value.push({ result, user, voteType, timestamp, failType, content, lastVote });
    if (logs.value.length > MAX) {
      logs.value.shift();
    }
  }

  function success(user: User, content: string, voteType: "up" | "down") {
    push({ result: "success", user, voteType, content });
  }

  function fail(user: User, content: string, failType: FailType, lastVote?: VoteType) {
    push({ result: "failure", user, failType, content, lastVote });
  }

  return {
    logs,
    push,
    success,
    fail,
  };
}
export const useLog = createSharedComposable(_useLog);
