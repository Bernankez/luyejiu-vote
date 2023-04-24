import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
  state: () => {
    return {
      showLog: false,
    };
  },
  persist: true,
});
