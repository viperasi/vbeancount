// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    title: 'vbeancount',
    currency: 'CNY',
    nameAssets: 'Assets',
    nameLiabilities: 'Liabilities',
    nameEquity: 'Equity',
    nameIncome: 'Income',
    nameExpenses: 'Expenses',
    filepath: ''
  }),
  persist: true
})
