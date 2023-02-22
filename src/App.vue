<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
</script>

<template>
  <main class="main">
    <nav class="nav">
      <Menu />
    </nav>
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
  }

  .content {
    flex: 1;
    box-sizing: border-box;
    padding: 8px 10px;
    background-color: #ffffff;
  }
}
</style>
