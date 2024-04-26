<script setup lang="ts">
import { ref } from "vue";

const input = ref("");

const handleInput = (value: string) => {
  input.value = onlyNumOnePoint(value);
};

const onlyNumOnePoint = (value: string) => {
  if (value.indexOf(".") === 0) {
    value = "0" + value;
  } // 第一位就是 .
  value = value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
  value = value.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符
  value = value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
  value = value.replace(".", "$#$")
  value = value.replace(/\./g, "")
  value = value.replace("$#$", ".");
  value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3"); //只能输入两个小数
  if (value.indexOf(".") < 0 && value !== "") {
    value = parseFloat(value) + "";
  }

  return value;
};
</script>

<template>
  <el-input
    type="text"
    v-model="input"
    placeholder="只能输入金额"
    @input="handleInput"
  />
</template>
