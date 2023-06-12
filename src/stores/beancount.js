import { defineStore } from "pinia";

/**
 *     account: {
 *       accname: null,
 *       acccurrency: null,
 *       type: null,
 *       balance: null,
 *       newest: null,
 *       count: null,
 *     },
 *     journal: {
 *       time: null,
 *       status: null,
 *       payee: null,
 *       narration: null,
 *       children: [],
 *     },
 *     journalChild: {
 *       account: null,
 *       amount: null,
 *       currency: null,
 *       index: 0
 *     }
 * @type {StoreDefinition<"beancount", {}, {}, {}>}
 */

const accounts = [
  {
    accname: "Assets:Card:5799",
    acccurrency: "CNY",
    type: "Assets",
    balance: 145.00,
    newest: "2023-06-12",
    count: 20
  },{
    accname: "Assets:Weixin",
    acccurrency: "CNY",
    type: "Assets",
    balance: 145.00,
    newest: "2023-06-12",
    count: 20
  },{
    accname: "Expenses:Life",
    acccurrency: "CNY",
    type: "Expenses",
    balance: 0,
    newest: "2023-06-12",
    count: 20
  },{
    accname: "Expenses:Smoke",
    acccurrency: "CNY",
    type: "Expenses",
    balance: 0,
    newest: "2023-06-12",
    count: 20
  },{
    accname: "Expenses:Coffee",
    acccurrency: "CNY",
    type: "Expenses",
    balance: 0,
    newest: "2023-06-12",
    count: 20
  },{
    accname: "Expenses:Family",
    acccurrency: "CNY",
    type: "Expenses",
    balance: 0,
    newest: "2023-06-12",
    count: 20
  },
]

export const useBeanStore = defineStore("beancount", {
  state: () => ({
    accounts: accounts,
    journals: [],
  }),
  persist: true,
  actions: {
    initAccounts(items) {
      this.accounts = items
    },
    initJournals(items){
      this.journals = items
    },
    getJournalByAccount(accname){
      let data = []
      for(let i=0;i<this.journals.length;i++){
        let journal = this.journals[i]
        for(let j=0;j<journal.children.length;j++){
          let child = journal.children[j]
          if(child.account === accname){
            data.push(journal)
            break
          }
        }
      }
      return data
    }
  }
});
