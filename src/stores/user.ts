import { defineStore } from 'pinia'

type User = {
  uname: string
  age: number
}

const Login = (): Promise<User> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        uname: 'Monic',
        age: 22,
      })
    }, 2000)
  })
}

const useUserStore = defineStore('user', {
  state: () => {
    return {
      uname: 'Tracy',
      age: 100,
      gender: 'female',
      token: 'This is Token',
    }
  },
  getters: {
    doubeAge(state) {
      return state.age * 2
    },
    addAge(state) {
      return (num: number): number => state.age + num
    },
  },
  actions: {
    async delayAddAge() {
      const result = await Login()
      console.log(result)
      this.uname = result.uname
      this.age = result.age
    },
  },
})

export default useUserStore
