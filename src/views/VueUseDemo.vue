<script setup lang="ts">
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()
</script>

<template>
  <div style="border: 1px solid #f5f5f5; border-radius: 4px; padding: 10px;">
    <h3>useMouse尝试</h3>
    <p style="margin-top: 6px;">鼠标坐标：x: {{ x }}, y: {{ y }}</p>
  </div>
</template>
