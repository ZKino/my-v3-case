<script setup lang="ts">
import { ref } from "vue";

interface RowVO {
  id: number;
  name: string;
  role: string;
  sex: string;
  age: number;
  address: string;
}

const tableData = ref<RowVO[]>([
  {
    id: 10001,
    name: "Test1",
    role: "Develop",
    sex: "Man",
    age: 28,
    address: "test abc",
  },
  {
    id: 10002,
    name: "Test2",
    role: "Test",
    sex: "Women",
    age: 22,
    address: "Guangzhou",
  },
]);

const sexOptions = ref([
  { value: "Women", label: "女" },
  { value: "Man", label: "男" },
]);
</script>

<template>
  <vxe-table :border="true" :data="tableData">
    <vxe-column type="seq" width="60"></vxe-column>
    <vxe-column type="radio" width="60"></vxe-column>
    <vxe-column type="checkbox" width="60"></vxe-column>
    <vxe-column field="name" title="Name"></vxe-column>
    <vxe-column field="age" title="Age" sortable></vxe-column>
    <vxe-column field="sex" title="Sex" :filters="sexOptions"></vxe-column>
    <vxe-column
      field="sex2"
      title="Sex2"
      sortable
      :filters="sexOptions"
      :filter-multiple="false"
    ></vxe-column>
    <vxe-column field="address" title="Address" show-overflow></vxe-column>
  </vxe-table>
</template>
