<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import UpdateData from "../updateData.vue";

const id = _GenerateUUID();

let myCanvas = shallowRef<_Canvas>();
const polygon_value = new _Canvas.Polygon({
  value: [
    [1, 1],
    [2, 2],
    [3, 1],
  ],
  isDraggable: true,
});
const polygon_position = new _Canvas.Polygon({
  position: [
    [-100, 50],
    [-100, -100],
    [50, -100],
  ],
  isDraggable: true,
});
const polygon_rect = new _Canvas.Polygon({
  value: [
    [1, -2],
    [3, 0],
  ],
  isRect: true,
  isDraggable: true,
});
const polygon_arr = [polygon_value, polygon_position, polygon_rect];

onMounted(() => {
  myCanvas.value = new _Canvas({ id });
  myCanvas.value.setTheme(Settings.value.theme);
  myCanvas.value.addOverlay(polygon_arr);
});
defineExpose({ myCanvas });
</script>

<template>
  <UpdateData :overlays="polygon_arr" />
  <canvas :id="id" class="my-canvas"></canvas>
</template>
