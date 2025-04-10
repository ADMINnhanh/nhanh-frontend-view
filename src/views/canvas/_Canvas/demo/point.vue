<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NButton, NSpace } from "naive-ui";

const id = _GenerateUUID();

let myCanvas: _Canvas;
const point_value = new _Canvas.Point({ value: [1, 1] });
const point_position = new _Canvas.Point({ position: [-100, -100] });

function UpdateValue(delta: number) {
  const [x, y] = point_value.getValue()!;
  point_value.setValue([x + delta, y + delta]);

  const [x1, y1] = point_position.getValue()!;
  point_position.setValue([x1 + delta, y1 + delta]);
}
function UpdatePosition(delta: number) {
  const [x, y] = point_value.getPosition()!;
  point_value.setPosition([x + delta, y + delta]);

  const [x1, y1] = point_position.getPosition()!;
  point_position.setPosition([x1 + delta, y1 + delta]);
}

watch(
  () => Settings.value.theme,
  (theme) => myCanvas?.setTheme(theme)
);
onMounted(() => {
  myCanvas = new _Canvas(id);
  myCanvas.setTheme(Settings.value.theme);
  myCanvas.addOverlay([point_value, point_position]);
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
