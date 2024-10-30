<script setup lang="ts"></script>

<template>
  <div>
    <slot>正在加载模块所需资源</slot> <span>.</span><span>.</span><span>.</span>
  </div>
</template>

<style lang="less" scoped>
@keyframes loadingDotsAnimation {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
span {
  display: inline-block;
  animation: loadingDotsAnimation 1.6s linear infinite;
  &:nth-of-type(2) {
    animation-delay: 0.2s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.4s;
  }
}
</style>
