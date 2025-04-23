<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NButton, NSpace, NSwitch } from "naive-ui";

const id = _GenerateUUID();

let myCanvas: _Canvas;
const polygon_value = new _Canvas.Polygon({
  value: [
    [1, 1],
    [2, 2],
    [3, 1],
  ],
  draggable: true,
});
const polygon_position = new _Canvas.Polygon({
  position: [
    [-100, 50],
    [-100, -100],
    [50, -100],
  ],
  draggable: true,
});
const polygon_rect = new _Canvas.Polygon({
  value: [
    [1, -2],
    [3, 0],
  ],
  isRect: true,
  draggable: true,
});
const polygon_arr = [polygon_value, polygon_position, polygon_rect];

function UpdateValue(delta: number) {
  polygon_arr.forEach((polygon) => {
    const newValue: [number, number][] = polygon.value!.map(([x, y]) => [
      x + delta,
      y + delta,
    ]);
    polygon.setValue(newValue);
  });
}
function UpdatePosition(delta: number) {
  polygon_arr.forEach((polygon) => {
    const newPosition: [number, number][] = polygon.position!.map(([x, y]) => [
      x + delta,
      y + delta,
    ]);
    polygon.setPosition(newPosition);
  });
}
function UpdateDraggable(draggable: boolean) {
  polygon_arr.forEach((polygon) => (polygon.draggable = draggable));
}
function UpdateIsShowHandlePoint(isShowHandlePoint: boolean) {
  polygon_arr.forEach(
    (polygon) => (polygon.isShowHandlePoint = isShowHandlePoint)
  );
  polygon_arr[0].notifyReload!();
}

watch(
  () => Settings.value.theme,
  (theme) => myCanvas?.setTheme(theme)
);
onMounted(() => {
  myCanvas = new _Canvas(id);
  myCanvas.setTheme(Settings.value.theme);
  myCanvas.addOverlay(polygon_arr);
});
</script>

<template>
  <NSpace style="margin-bottom: 10px">
    <NSwitch @update-value="UpdateDraggable" :default-value="true">
      <template #checked> 拖拽 </template>
      <template #unchecked> 拖拽 </template>
    </NSwitch>
    <NSwitch @update-value="UpdateIsShowHandlePoint" :default-value="true">
      <template #checked> 显示控制点 </template>
      <template #unchecked> 显示控制点 </template>
    </NSwitch>
    <NButton type="info" ghost @click="UpdateValue(1)"> value + 1 </NButton>
    <NButton type="info" ghost @click="UpdateValue(-1)"> value - 1 </NButton>
    <NButton ghost @click="UpdatePosition(100)"> position + 100 </NButton>
    <NButton ghost @click="UpdatePosition(-100)"> position - 100 </NButton>
  </NSpace>

  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less"></style>
