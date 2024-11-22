<script setup lang="ts">
import { ref } from "vue";
import MyInput from "./组件封装三板斧(子组件).vue";

const name = ref("Tracy");

const handleInput = () => {
  console.log("在 Input 值改变时触发", name.value);
};

const handleBlur = () => {
  console.log("当选择器的输入框失去焦点时触发", name.value);
};
</script>

<template>
  <MyInput
    v-model="name"
    :clearable="true"
    size="large"
    placeholder="自定义组件"
    @input="handleInput"
    @blur="handleBlur"
  >
    <template #prepend>Http://</template>
    <template #append>.com//</template>
  </MyInput>
</template>
