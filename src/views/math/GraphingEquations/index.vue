<script setup lang="ts">
import { onUnmounted } from "vue";
import { baseData, Init, UpdateCanvas } from ".";
import { MouseInCanvas, MouseOutCanvas } from "./Event";

requestAnimationFrame(Init);
window.addEventListener("resize", UpdateCanvas);
onUnmounted(() => window.removeEventListener("resize", UpdateCanvas));
</script>

<template>
  <div class="graphing-equations">
    <nav></nav>
    <canvas
      :id="baseData.id"
      @mouseover="MouseInCanvas"
      @mouseleave="MouseOutCanvas"
    ></canvas>
  </div>
</template>

<style scoped lang="less">
.graphing-equations {
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 5px;
  nav {
    width: 100px;
    box-shadow: 0 0 3px 1px var(--box-shadow);
    border-radius: 5px;
    z-index: 2;
  }
  canvas {
    flex-grow: 1;
    width: 100px;
  }
}
</style>
