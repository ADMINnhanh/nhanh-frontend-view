const n=`<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, shallowRef, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NButton, NSpace, NSwitch } from "naive-ui";

const id = _GenerateUUID();

let myCanvas = shallowRef<_Canvas>();
const point_value = new _Canvas.Point({ value: [1, 1], isDraggable: true });
const point_position = new _Canvas.Point({
  position: [-100, -100],
  isDraggable: true,
});
const point_arr = [point_value, point_position];

function UpdateValue(delta: number) {
  point_arr.forEach((point) => {
    const [x, y] = point.value!;
    point.setValue([x + delta, y + delta]);
  });
}
function UpdatePosition(delta: number) {
  point_arr.forEach((point) => {
    const [x, y] = point.position!;
    point.setPosition([x + delta, y + delta]);
  });
}
function UpdateDraggable(draggable: boolean) {
  myCanvas.value!.isDraggable = draggable;
}

onMounted(() => {
  myCanvas.value = new _Canvas({ id });
  myCanvas.value.setTheme(Settings.value.theme);
  myCanvas.value.addOverlay(point_arr);
});
defineExpose({ myCanvas });
<\/script>

<template>
  <NSpace style="margin-bottom: 10px">
    <NSwitch @update-value="UpdateDraggable" :default-value="true">
      <template #checked> 拖拽 </template>
      <template #unchecked> 拖拽 </template>
    </NSwitch>
    <NButton type="info" ghost @click="UpdateValue(1)"> value + 1 </NButton>
    <NButton type="info" ghost @click="UpdateValue(-1)"> value - 1 </NButton>
    <NButton ghost @click="UpdatePosition(100)"> position + 100 </NButton>
    <NButton ghost @click="UpdatePosition(-100)"> position - 100 </NButton>
  </NSpace>

  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less"></style>
`;export{n as default};
