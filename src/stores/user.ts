import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    token: '',
  }),
  getters: {},
  actions: {},
})

export default useUserStore
