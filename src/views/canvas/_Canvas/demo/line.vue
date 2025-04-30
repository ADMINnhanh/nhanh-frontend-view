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
function UpdateDraggable(draggable: boolean) {
  line_arr.forEach((line) => (line.draggable = draggable));
}
function UpdateIsShowHandlePoint(isShowHandlePoint: boolean) {
  line_arr.forEach((line) => (line.isShowHandlePoint = isShowHandlePoint));
  line_arr[0].notifyReload!();
}

watch(
  () => Settings.value.theme,
  (theme) => myCanvas.value?.setTheme(theme)
);
onMounted(() => {
  myCanvas.value = new _Canvas(id);
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
