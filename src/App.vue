<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import useDrag from '@/hooks/useDrag'

const navRef = ref()
const splRef = ref()
onMounted(() => {
  useDrag(splRef.value, navRef.value, 800)
})
</script>

<template>
  <main class="main">
    <nav class="nav" ref="navRef">
      <ul class="nav-list">
        <li class="nav-item"><RouterLink to="/">Hello World</RouterLink></li>
        <li class="nav-item"><RouterLink to="/pinia">Pinia使用</RouterLink></li>
      </ul>
    </nav>
    <div class="splitter" ref="splRef"></div>
    <section class="content">
      <RouterView />
    </section>
  </main>
</template>

<style scoped lang="scss">
.main {
  height: 100%;
  display: flex;

  .nav {
    flex: 0 0 260px;
    width: 260px;
    height: 100%;
    padding: 8px 10px;
    box-sizing: border-box;
    overflow-y: auto;
    background-color: #f5f5f5;

    .nav-list {
      .nav-item {
        cursor: pointer;

        a {
          display: inline-block;
          line-height: 28px;
          font-size: 14px;
          color: #333;

          &:hover {
            color: #409eff;
          }
        }
        .router-link-active {
          color: #409eff;
        }
      }
    }
  }

  .splitter {
    flex: 0 0 14px;
    width: 14px;
    cursor: col-resize;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before,
    &::after {
      content: '';
      width: 2px;
      height: 20px;
      display: inline-block;
      background-color: #e9e9e9;
      margin: 0 1px;
    }
  }

  .content {
    flex: 1;
    box-sizing: border-box;
    padding: 8px 10px;
    background-color: #ffffff;
  }
}
</style>
