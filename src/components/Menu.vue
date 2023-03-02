<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <ul class="nav-list">
    <li class="nav-item"><RouterLink to="/">Hello World</RouterLink></li>
    <li class="nav-item"><RouterLink to="/pinia">Pinia使用</RouterLink></li>
    <li class="nav-item"><RouterLink to="/select">全选与反选</RouterLink></li>
  </ul>
</template>

<style scoped lang="scss">
.nav-list {
  .nav-item {
    cursor: pointer;

    a {
      display: inline-block;
      line-height: 28px;
      font-size: 14px;
      color: #333;

      &:hover {
        color: #fe6a00;
      }
    }
    .router-link-active {
      color: #fe6a00;
    }
  }
}
</style>
