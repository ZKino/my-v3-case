<script setup lang="ts">
import { onMounted } from 'vue'
import { getList } from '@/request/api'

onMounted(() => {
  getList({ canteen_id: 37, user_id: 162 }).then(res => {
    console.log(res, 'getList 请求成功')
  })
})
</script>

<template>
  Hello World
</template>
