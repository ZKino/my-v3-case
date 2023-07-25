<script setup lang="ts">
import { ref, watch } from 'vue'

const date = ref<Date>(new Date())
const monthNames = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
const daysOfMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}
const firstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}
const days = ref<number>(daysOfMonth(date.value.getFullYear(), date.value.getMonth()))
const firstDay = ref<number>(firstDayOfMonth(date.value.getFullYear(), date.value.getMonth()))

const handlePrevMonth = () => {
  date.value = new Date(date.value.getFullYear(), date.value.getMonth() - 1, 1)
  days.value = daysOfMonth(date.value.getFullYear(), date.value.getMonth())
  firstDay.value = firstDayOfMonth(date.value.getFullYear(), date.value.getMonth())
}

const handleNextMonth = () => {
  date.value = new Date(date.value.getFullYear(), date.value.getMonth() + 1, 1)
  days.value = daysOfMonth(date.value.getFullYear(), date.value.getMonth())
  firstDay.value = firstDayOfMonth(date.value.getFullYear(), date.value.getMonth())
}
</script>

<template>
  <div class="calendar">
    <div class="header">
      <button @click="handlePrevMonth">&lt;</button>
      <div>{{ date.getFullYear() }}年{{ monthNames[date.getMonth()] }}月</div>
      <button @click="handleNextMonth">&gt;</button>
    </div>
    <div class="days">
      <div class="day">日</div>
      <div class="day">一</div>
      <div class="day">二</div>
      <div class="day">三</div>
      <div class="day">四</div>
      <div class="day">五</div>
      <div class="day">六</div>
      <div class="empty" v-for="item in firstDay" :key="item"></div>
      <div class="day" v-for="item in days" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<style scoped>
.calendar {
  border: 1px solid #aaa;
  padding: 10px;
  width: 300px;
  height: 250px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}

.days {
  display: flex;
  flex-wrap: wrap;
}

.empty,
.day {
  width: calc(100% / 7);
  text-align: center;
  line-height: 30px;
}

.day:hover {
  background-color: #ccc;
  cursor: pointer;
}
</style>
