import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      roomId: null as null | number,
      positive: "天堂",
      negative: "地狱",
      positiveWord: "1",
      negativeWord: "2",
      positiveColor: "rgb(14,165,233)",
      negativeColor: "rgb(168,85,247)",
    };
  },
  persist: true,
});
