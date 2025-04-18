<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NButton, NSpace } from "naive-ui";

const id = _GenerateUUID();

let myCanvas: _Canvas;
const line_value = new _Canvas.Line({
  value: [
    [1, 1],
    [2, 2],
    [3, 1],
  ],
  draggable: true,
});
const line_position = new _Canvas.Line({
  position: [
    [-100, 50],
    [-100, -100],
    [50, -100],
  ],
  draggable: true,
});
const line_Infinite = new _Canvas.Line({
  value: [
    [1, -1],
    [-1, 1],
  ],
  infinite: true,
  draggable: true,
});
const line_arr = [line_value, line_position, line_Infinite];

function UpdateValue(delta: number) {
  line_arr.forEach((line) => {
    const newValue: [number, number][] = line.value!.map(([x, y]) => [
      x + delta,
      y + delta,
    ]);
    line.setValue(newValue);
  });
}
function UpdatePosition(delta: number) {
  line_arr.forEach((line) => {
    const newPosition: [number, number][] = line.position!.map(([x, y]) => [
      x + delta,
      y + delta,
    ]);
    line.setPosition(newPosition);
  });
}

watch(
  () => Settings.value.theme,
  (theme) => myCanvas?.setTheme(theme)
);
onMounted(() => {
  myCanvas = new _Canvas(id);
  myCanvas.setTheme(Settings.value.theme);
  myCanvas.addOverlay(line_arr);
});
</script>

<template>
  <NSpace style="margin-bottom: 10px">
    <NButton type="info" ghost @click="UpdateValue(1)"> value + 1 </NButton>
    <NButton type="info" ghost @click="UpdateValue(-1)"> value - 1 </NButton>
    <NButton ghost @click="UpdatePosition(100)"> position + 100 </NButton>
    <NButton ghost @click="UpdatePosition(-100)"> position - 100 </NButton>
  </NSpace>

  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less">
.my-canvas {
  width: 100%;
  height: 270px;
}
</style>
