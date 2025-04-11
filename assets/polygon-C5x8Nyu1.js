const n=`<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NButton, NSpace } from "naive-ui";

const id = _GenerateUUID();

let myCanvas: _Canvas;
const polygon_value = new _Canvas.Polygon({
  value: [
    [1, 1],
    [2, 2],
    [3, 1],
  ],
});
const polygon_position = new _Canvas.Polygon({
  position: [
    [-100, 50],
    [-100, -100],
    [50, -100],
  ],
});
const polygon_rect = new _Canvas.Polygon({
  value: [[1, -2]],
  size: [100, 100],
});

function UpdateValue(delta: number) {
  [polygon_value, polygon_position, polygon_rect].forEach((polygon) => {
    const newValue: [number, number][] = polygon.value!.map(([x, y]) => [
      x + delta,
      y + delta,
    ]);
    polygon.setValue(newValue);
  });
}
function UpdatePosition(delta: number) {
  [polygon_value, polygon_position, polygon_rect].forEach((polygon) => {
    const newPosition: [number, number][] = polygon.position!.map(([x, y]) => [
      x + delta,
      y + delta,
    ]);
    polygon.setPosition(newPosition);
  });
}

watch(
  () => Settings.value.theme,
  (theme) => myCanvas?.setTheme(theme)
);
onMounted(() => {
  myCanvas = new _Canvas(id);
  myCanvas.setTheme(Settings.value.theme);
  myCanvas.addOverlay([polygon_value, polygon_position, polygon_rect]);
});
<\/script>

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
`;export{n as default};
