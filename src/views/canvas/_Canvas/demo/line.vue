<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, shallowRef, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NButton, NSpace, NSwitch } from "naive-ui";

const id = _GenerateUUID();

let myCanvas = shallowRef<_Canvas>();
const line_value = new _Canvas.Line({
  value: [
    [1, 1],
    [2, 2],
    [3, 1],
  ],
  isDraggable: true,
});
const line_position = new _Canvas.Line({
  position: [
    [-100, 50],
    [-100, -100],
    [50, -100],
  ],
  isDraggable: true,
});
const line_infinite = new _Canvas.Line({
  value: [
    [1, -1],
    [-1, 1],
  ],
  isInfinite: true,
  isDraggable: true,
});

const line_arr = [line_value, line_position, line_infinite];

function UpdateValue(delta: number) {
  line_arr.forEach((line) => {
    line.value = line.value!.map(([x, y]) => [x + delta, y + delta]);
  });
}
function UpdatePosition(delta: number) {
  line_arr.forEach((line) => {
    line.position = line.position!.map(([x, y]) => [x + delta, y + delta]);
  });
}
function UpdateDraggable(draggable: boolean) {
  myCanvas.value!.isDraggable = draggable;
}
function UpdateIsShowHandlePoint(isShowHandlePoint: boolean) {
  line_arr.forEach((line) => (line.isHandlePointsVisible = isShowHandlePoint));
}

onMounted(() => {
  myCanvas.value = new _Canvas({ id });
  myCanvas.value.setTheme(Settings.value.theme);
  myCanvas.value.addOverlay(line_arr);
});
defineExpose({ myCanvas });
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
