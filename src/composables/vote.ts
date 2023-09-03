import dayjs from "dayjs";
import type { Connection } from "./connection";

export interface Ticket {
  id: string;
  title: string;
  content: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface VoteHistory {
  startTime: string;
  endTime: string;
  positive: Ticket[];
  negative: Ticket[];
}

export function useVote(connection: Connection) {
  const current = ref(createVote());
  const history = ref<VoteHistory[]>([]);

  const { status, currentId } = connection;

  watch([status, currentId], ([status, _]) => {
    if (status !== "connected" && current.value.isVoting) {
      pause();
      pushHistory();
      reset();
    }
  });

  function start() {
    current.value.isVoting = true;
    current.value.startTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
  }

  function pause() {
    current.value.isVoting = false;
    current.value.endTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
  }

  function reset() {
    current.value = createVote();
  }

  function pushHistory() {
    history.value.push(current.value);
  }

  return {
    current,
    history,

    start,
    pause,
    reset,
    pushHistory,
  };
}

function createVote() {
  return {
    positive: [] as Ticket[],
    negative: [] as Ticket[],
    startTime: "",
    endTime: "", // 最后一次暂停时间
    isVoting: false,
  };
}
