<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)

const increment = () => {
  counterStore.increment()
}
const incrementWait = () => {
  counterStore.incrementWait()
}
const incrementX = (num: number) => {
  counterStore.incrementX(num)
}
const reset = () => {
  counterStore.$reset()
}
</script>

<template>
  <h1 class="pinia">Pinia Demo</h1>
  <div>
    <div>count: {{ count }}</div>
    <div>doubleCount: {{ doubleCount }}</div>
    <div>
      <el-button type="primary" @click="increment">+1</el-button>
      <el-button type="primary" @click="incrementWait">延迟2S+1</el-button>
      <el-button type="primary" @click="() => incrementX(10)">+参数</el-button>
      <el-button type="danger" @click="reset">重置</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pinia {
  font-size: 20px;
  font-weight: bold;
  padding: 8px 0;
}
</style>
