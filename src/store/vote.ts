import { defineStore } from "pinia";
import { ref } from "vue";
import type { Vote } from "@/types";

export const useVoteStore = defineStore("vote", () => {
  const votes = ref<Vote[]>([]);

  return {
    votes,
    $reset: () => {
      votes.value = [];
    },
  };
}, {
  persist: true,
});
