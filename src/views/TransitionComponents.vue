<script setup lang="ts">
import { ref } from "vue";

const show = ref(true);

const list = ref([
  { id: new Date().getTime(), name: new Date().getTime().toString() },
]);

const insert = () => {
  list.value.push({ id: new Date().getTime(), name: new Date().getTime().toString() });
};

const remove = (item: any) => {
  list.value = list.value.filter((i) => i.id !== item.id);
};
</script>

<template>
  <p>
    <img
      src="https://cn.vuejs.org/assets/transition-classes.DYG5-69l.png"
      alt=""
      style="height: 300px"
    />
  </p>
  <h3>Transition组件</h3>
  <el-button type="primary" @click="show = !show">Toggle</el-button>
  <Transition name="fade1" appear>
    <p v-if="show" class="demo1">Hello World...</p>
  </Transition>
  <hr />
  <h3>TransitionGroup组件</h3>
  <el-button type="primary" @click="insert">插入</el-button>
  <!-- <el-button type="primary" @click="reset">移除</el-button> -->
  <TransitionGroup name="list" tag="ul">
    <li v-for="item in list" :key="item.id">
      {{ item.name }}
      <el-button @click="remove(item)">x</el-button>
    </li>
  </TransitionGroup>
</template>

<style scoped>
.demo1 {
  width: 150px;
  height: 30px;
  background-color: red;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 进入之前 */
.fade1-enter-from {
  transform: translateX(200px);
  opacity: 0;
}

/* 进入之后 */
.fade1-entry-to {
  transform: translateX(0);
  opacity: 1;
}

/* 进入这段时间 */
.fade1-enter-active {
  transition: all 5s ease-out;
}

/* 离开之前 */
.fade1-leave-from {
  transform: translateX(0);
  opacity: 1;
}

/* 离开之后 */
.fade1-leave-to {
  transform: translateX(200px);
  opacity: 0;
}

/* 离开这段时间 */
.fade1-leave-active {
  transition: all 5s ease-out;
}

/* ----------------------- */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
