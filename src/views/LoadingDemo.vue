<script setup lang="ts"></script>

<template>
  <div class="loading1-box">
    <div class="loading1">
      <div class="loading1-item loading1-one"></div>
      <div class="loading1-item loading1-two"></div>
      <div class="loading1-item loading1-three"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading1-box {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  .loading1 {
    overflow: hidden;
    .loading1-item {
      width: 20px;
      height: 20px;
      background-color: #000;
      float: left;
      margin-right: 10px;
      border-radius: 50%;

      &:last-child {
        margin-right: 0;
      }
    }

    .loading1-one {
      animation: circle_one 1.5s linear 0s infinite normal;
    }

    .loading1-two {
      animation: circle_two 1.5s linear 0.25s infinite normal;
    }

    .loading1-three {
      animation: circle_three 1.5s linear 0.5s infinite normal;
    }

    @keyframes circle_one {
      50% {
        transform: scale(0);
      }
    }

    @keyframes circle_two {
      50% {
        transform: scale(0);
      }
    }

    @keyframes circle_three {
      50% {
        transform: scale(0);
      }
    }
  }
}
</style>
