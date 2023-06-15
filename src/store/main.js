import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
    state: () => ({
        title: null, // 账本标题
        currency: null, // 货币, "CNY", "USD"
        crlf: "LF", //换行标识, LF=\n, CRLF=\r\n, CR=\r
        theme: "basic", // 皮肤
        dark: 1, // 暗黑模式, 0为否 1为是
        name_assets: "Assets",
        name_liabilities: "Liabilities",
        name_equity: "Equity",
        name_income: "Income",
        name_expenses: "Expenses",
        filepath: null, // 主bean文件路径
    }),
    persist: true,
});
