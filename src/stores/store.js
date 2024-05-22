import { defineStore } from "pinia";

export const useAdditionStore = defineStore("calculation", {
  state: () => ({
    additionResults: [],
  }),
  actions: {
    addAdditionResult(result) {
      this.additionResults.push(result);
    },
  },
});
