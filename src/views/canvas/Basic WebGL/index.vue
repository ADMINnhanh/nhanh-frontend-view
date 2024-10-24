<script setup lang="ts">
import { canvas, DrawFullList } from ".";

requestAnimationFrame(DrawFullList);
</script>

<template>
  <canvas ref="canvas">
    你的浏览器似乎不支持或者禁用了 HTML5 <code>&lt;canvas&gt;</code> 元素。
  </canvas>
</template>

<style lang="less" scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
