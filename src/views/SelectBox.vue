<script setup lang="ts">
import { ref } from 'vue'

const checkAll = ref(false)
const indeterminate = ref(false)
const checkedCities = ref<string[] | never[]>([])
const cities = ['北京', '上海', '广州', '深圳', '重庆', '成都']

const handleCheckedCitiesChange = (val: string[]) => {
  console.log(val, '==')
  const checkedCount = val.length
  checkAll.value = checkedCount === cities.length
  indeterminate.value = checkedCount > 0 && checkedCount < cities.length
}

// 全选
const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : []
  indeterminate.value = false
}

// 反选
const handleCheckReverseChange = (val: boolean) => {
  const newArr = [...cities, ...checkedCities.value]
  checkedCities.value = newArr.filter((v, _i, arr) => {
    return arr.indexOf(v) === arr.lastIndexOf(v)
  })
  
  const checkedCount = checkedCities.value.length
  
  if (checkedCount === 0) {
    checkAll.value = false
  }
  if (checkedCount === cities.length) {
    checkAll.value = true
  }
  if(checkedCount > 0 && checkedCount < cities.length) {
    checkAll.value = false
    indeterminate.value = true
  }
}
</script>

<template>
  <div>
    <el-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <el-checkbox v-for="city in cities" :key="city" :label="city">
        {{ city }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
  <div>
    <el-checkbox
      v-model="checkAll"
      @change="handleCheckAllChange"
      :indeterminate="indeterminate"
    >
      全选
    </el-checkbox>
    <el-button type="primary" @click="handleCheckReverseChange">
      反选
    </el-button>
  </div>
</template>
