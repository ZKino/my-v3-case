import { get } from 'lodash'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    hello: 'Hello Wolrd',
    count: 10,
    phoneNum: '15139333888',
    token: '123456789',
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
  },
  actions: {
    increment() {
      this.count++
    },
    incrementWait() {
      setTimeout(() => {
        this.count++
      }, 2000)
    },
    incrementX(num: number) {
      this.count += num
    },
  },
})
