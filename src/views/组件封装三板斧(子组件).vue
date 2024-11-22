<script setup lang="ts">
import { useAttrs, useSlots } from "vue";
const attrs = useAttrs();
const slots = useSlots();

console.log(attrs, "attrs");
console.log(slots, "slots");
</script>

<template>
  <div class="my-input">
    <el-input v-bind="attrs">
      <template #[slotName]="slotProps" v-for="(slot, slotName) in $slots">
        <slot :name="slotName" v-bind="slotProps"></slot>
      </template>
    </el-input>
  </div>
</template>
