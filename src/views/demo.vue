<script setup lang="ts">
import { getUsers } from '@/services/api'

const onGetUsers = async () => {
  const res = await getUsers()
  console.log(res, '====')
}
</script>

<template>
  <el-button type="primary" @click="onGetUsers">request</el-button>
</template>
