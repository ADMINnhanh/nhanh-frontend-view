<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";

const id = _GenerateUUID();
let myCanvas: _Canvas;
watch(
  () => Settings.value.theme,
  (theme) => myCanvas?.setTheme(theme)
);
onMounted(() => {
  myCanvas = new _Canvas(id);
  myCanvas.setTheme(Settings.value.theme);
});
</script>

<template>
  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less">
.my-canvas {
  width: 100%;
  height: 250px;
}
</style>
