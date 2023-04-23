import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      roomId: 2064239,
      up: "天堂",
      down: "地狱",
      upTriggerWord: "1",
      downTriggerWord: "2",
      upColor: "rgb(14,165,233)",
      downColor: "rgb(168,85,247)",
    };
  },
  persist: true,
});
