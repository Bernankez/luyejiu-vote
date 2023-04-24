import { defineStore } from "pinia";
import { ref } from "vue";
import type { Vote } from "@/composables/useVote";

export const useVoteStore = defineStore("vote", () => {
  const voteHistory = ref<Vote[]>([]);

  return {
    voteHistory,
    $reset: () => {
      voteHistory.value = [];
    },
  };
}, {
  persist: true,
});
