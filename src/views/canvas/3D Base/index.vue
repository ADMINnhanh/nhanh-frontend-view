<script setup lang="ts">
import { canvas, drawFullList } from ".";

requestAnimationFrame(drawFullList);
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>

<style lang="less" scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
