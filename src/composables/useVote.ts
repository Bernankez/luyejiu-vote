import { storeToRefs } from "pinia";
import type { User } from "blive-message-listener";
import { v4 as uuid } from "uuid";

export type VoteType = "up" | "down";

export interface Ticket {
  id: string;
  voteType: VoteType;
  user: User;
}

export interface Vote {
  id: string;
  tickets: Ticket[];
  appendUp: number;
  appendDown: number;
  totalUp: number;
  totalDown: number;
}

export function useVote() {
  const { connectionStatus, msgHandler } = useDanmu();
  const { success, fail } = useLog();
  const { voteHistory } = storeToRefs(useVoteStore());
  const voting = ref(false);

  const appendUp = ref(0);
  const appendDown = ref(0);
  const tickets = ref<Ticket[]>([]);
  const ticketsUp = ref(0);
  const ticketsDown = ref(0);
  const totalUp = computed(() => appendUp.value + ticketsUp.value);
  const totalDown = computed(() => appendDown.value + ticketsDown.value);

  const message = useMessage();

  watchEffect(() => {
    if (voting.value && connectionStatus.value !== "connected") {
      stop();
      message.warning("直播间连接状态变化，投票中止");
    }
  });

  function voteUp() {
    voting.value && appendUp.value++;
  }

  function voteDown() {
    voting.value && appendDown.value++;
  }

  function start() {
    if (connectionStatus.value === "connected") {
      voting.value = true;
      return true;
    } else {
      return false;
    }
  }

  function stop() {
    voting.value = false;
    voteHistory.value.push({
      id: uuid(),
      tickets: tickets.value,
      appendUp: appendUp.value,
      appendDown: appendDown.value,
      totalUp: totalUp.value,
      totalDown: totalDown.value,
    });
  }

  msgHandler.value = (msg) => {
    if (!voting.value) { return; }
    const ticket = tickets.value.find(t => t.user.uid === msg.body.user.uid);
    if (ticket) {
      // has voted
      fail(msg.body.user, msg.body.content, "voted", ticket.voteType);
    } else {
      const voteType = getVoteType(msg.body.content);
      if (!voteType) {
        // invalid vote
        fail(msg.body.user, msg.body.content, "invalid");
        return;
      }
      tickets.value.push({
        id: msg.id,
        voteType,
        user: msg.body.user,
      });
      if (voteType === "up") {
        ticketsUp.value++;
      } else if (voteType === "down") {
        ticketsDown.value++;
      }
      success(msg.body.user, msg.body.content, voteType);
    }
  };

  function clear() {
    tickets.value = [];
    appendUp.value = 0;
    appendDown.value = 0;
    ticketsUp.value = 0;
    ticketsDown.value = 0;
  }

  return {
    voting,
    tickets,
    totalUp,
    totalDown,

    voteUp,
    voteDown,
    start,
    stop,
    clear,
  };
}
