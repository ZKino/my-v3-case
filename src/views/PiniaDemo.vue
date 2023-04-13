<script setup lang="ts">
import { storeToRefs } from 'pinia'
// 1、引入user仓库
import useUserStore from '@/stores/user'

// 2、调用方法返回user store实例
const userStore = useUserStore()

// 3.1、直接使用
// console.log(userStore.username, userStore.token)

// 3.2、解构使用
const { uname, gender, age } = storeToRefs(userStore)
// console.log(username, token)

// 4、修改user仓库单个值
const changeAge = () => {
  userStore.age++
}

// 5、批量修改user仓库的值
const changeAll = () => {
  userStore.$patch(state => {
    state.uname += '😁'
    state.age++
  })
}

// 6、重置整个user仓库
const resetUser = () =>  {
  userStore.$reset()
}

// action
const changeActionsAge = () => {
  userStore.delayAddAge()
}
</script>

<template>
  <h1>Pinia Demo</h1>
  <div>
    直接使用user仓库的值:
    {{ userStore.uname }}--{{ userStore.gender }}--{{ userStore.age }}
  </div>
  <div>
    使用storeToRefs解构使用user仓库的值: {{ uname }}--{{ gender }}--{{ age }}
  </div>
  <div>
    直接修改user仓库单个值: {{ userStore.age }}--
    <el-button type="primary" @click="changeAge">change age</el-button>
  </div>
  <div>
    批量修改user仓库的值:
    {{ userStore.uname }}--{{ userStore.gender }}--{{ userStore.age }}
    <el-button type="primary" @click="changeAll">change all</el-button>
  </div>
  <div>
    重置user仓库的值:
    {{ userStore.uname }}--{{ userStore.gender }}--{{ userStore.age }}
    <el-button type="primary" @click="resetUser">reset user</el-button>
  </div>
  <div>
    user仓库中getters的使用:
    {{ userStore.doubeAge }}
  </div>
  <div>
    user仓库中getters传参的使用:
    {{ userStore.addAge(10) }}
  </div>
  <div>
    user仓库中actions异步请求数据的使用:
    <el-button type="primary" @click="changeActionsAge">actions change age</el-button>
  </div>
</template>

<style scoped lang="scss">
div {
  padding: 10px 0;
}
</style>
