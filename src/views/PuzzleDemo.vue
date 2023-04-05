<script setup lang="ts">
import type { transform } from 'lodash'
import { ref, onMounted, nextTick } from 'vue'

const puzzleRef = ref<HTMLDivElement>()
const puzzleTranslateX = ref<number>(0)
const originX = ref<number>(0)

onMounted(() => {
  nextTick(() => {
    const puzzleMove = (event: MouseEvent) => {
      console.log(event.x)
      puzzleTranslateX.value = event.x - originX.value
    }

    const puzzleDown = (event: MouseEvent) => {
      originX.value = event.x
      console.log(event.x)
      document.addEventListener('mousemove', puzzleMove)
    }

    const puzzleUp = (event: MouseEvent) => {
      document.removeEventListener('mousemove', puzzleMove)
    }

    puzzleRef.value!.addEventListener('mousedown', puzzleDown)
    document.addEventListener('mouseup', puzzleUp)
  })
})
</script>

<template>
  <div class="puzzle">
    <div
      class="puzzle-child"
      ref="puzzleRef"
      :style="{ transform: `translate(${puzzleTranslateX}px, -50%)` }"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.puzzle {
  width: 480px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(https://img1.baidu.com/it/u=2506678359,1304966313&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800);
  position: relative;
}

.puzzle::before {
  content: '';
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #eee;
  position: absolute;
  top: 50%;
  left: 280px;
  transform: translateY(-50%);
}

.puzzle-child {
  content: '';
  width: 50px;
  height: 50px;
  border: 1px solid #eee;
  background-image: inherit;
  background-repeat: inherit;
  background-size: 480px 300px;
  background-position: -280px -100px;
  cursor: move;
  position: absolute;
  top: 50%;
  left: 10px;
}

@keyframes move {
  to {
    transform: translateX(0);
  }
}
</style>
