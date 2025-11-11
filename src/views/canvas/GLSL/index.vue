<script setup lang="ts">
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import main from ".";

const id = _Utility_GenerateUUID("webgl-");

requestAnimationFrame(() => {
  main(id);
});
</script>

<template>
  <canvas :id="id">
    你的浏览器似乎不支持或者禁用了 HTML5 <code>&lt;canvas&gt;</code> 元素。
  </canvas>
</template>

<style lang="less" scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
