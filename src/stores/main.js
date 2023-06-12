import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    title: null,
    currency: null,
    crlf: "LF",
    name_assets: "Assets",
    name_liabilities: "Liabilities",
    name_equity: "Equity",
    name_income: "Income",
    name_expenses: "Expenses",
    filepath: null,
  }),
  persist: true,
});
