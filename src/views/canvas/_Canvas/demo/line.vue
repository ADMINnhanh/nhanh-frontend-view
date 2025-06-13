<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import UpdateData from "../updateData.vue";

const id = _GenerateUUID();

let myCanvas = shallowRef<_Canvas>();
const line_value = new _Canvas.Line({
  value: [
    [0, 2],
    [2, 2],
    [2, 0],
  ],
  isDraggable: true,
});
const line_position = new _Canvas.Line({
  position: [
    [-100, 0],
    [-100, -100],
    [0, -100],
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

onMounted(() => {
  myCanvas.value = new _Canvas({ id });
  myCanvas.value.setTheme(Settings.value.theme);
  myCanvas.value.addOverlay(line_arr);
});
defineExpose({ myCanvas });
</script>

<template>
  <UpdateData :overlays="line_arr" />
  <canvas :id="id" class="my-canvas"></canvas>
</template>
