<script setup lang="ts">
import { getUsers } from "@/services/api";

const onGetUsers = async () => {
  const res = await getUsers();
  console.log(res, "====");
};
</script>

<template>
  <h3>CSS 标签超出显示数量</h3>
  <div class="wrap">
    <div class="con">
      <a class="tag">HTML</a>
      <a class="tag">CSS</a>
      <a class="tag">JavaScript</a>
      <a class="tag">Flutter</a>
      <a class="tag">Vue</a>
      <a class="tag">React</a>
      <a class="tag">Svelte</a>
    </div>
  </div>
  <input
    type="range"
    min="200"
    value="300"
    max="800"
    oninput="this.previousElementSibling.style.width = this.value + 'px'"
  />
</template>

<style scoped lang="scss">
.wrap {
  width: 300px;
  display: flex;
  align-items: center;
  padding: 15px;
  outline: 2px solid #9747ff;
  gap: 5px;
  overflow: hidden;
}
.con {
  position: relative;
  display: flex;
  gap: 5px;
  padding: 5px;
  overflow: hidden;
  counter-reset: num;
  animation: check;
  animation-timeline: scroll(x self);
  margin-right: -46px;
}
@keyframes check {
  from,
  to {
    margin-right: 0;
    -webkit-mask: linear-gradient(
      to right,
      #fff calc(100% - 30px),
      transparent
    );
  }
}
.wrap::after {
  content: "+" counter(num);
  padding: 0.2em 0.5em;
  background-color: #ffe8a3;
  color: #191919;
  border-radius: 4px;
}
.tag {
  padding: 0.2em 0.5em;
  background-color: #9747ff;
  color: #fff;
  border-radius: 4px;
  counter-increment: num 1;
  animation: appear;
  animation-timeline: view(inline);
  animation-range: contain;
}
@keyframes appear {
  from,
  to {
    counter-increment: num 0;
  }
}
</style>
