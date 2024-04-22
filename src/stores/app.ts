// Utilities
import { defineStore } from 'pinia'

interface LogItem {
  message: string;
  time: string;
}

export const useAppStore = defineStore('app', {
  state: () => ({
    currencyPair: 'BTCUSDT',
    log: [],
  }),
  actions: {
    addLog (logItem: LogItem) {
      this.log.push(logItem);
    },
  }
})
