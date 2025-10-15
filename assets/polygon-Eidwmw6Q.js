const n=`<script setup lang="ts">
import { _Utility_GenerateUUID, _Canvas } from "nhanh-pure-function";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import UpdateData from "../updateData.vue";

const id = _Utility_GenerateUUID();

let myCanvas = shallowRef<_Canvas>();
const polygon_value = new _Canvas.Polygon({
  value: [
    [0, 2],
    [2, 2],
    [2, 0],
  ],
  isDraggable: true,
});
const polygon_position = new _Canvas.Polygon({
  position: [
    [-100, 0],
    [-100, -100],
    [0, -100],
  ],
  isDraggable: true,
});
const polygon_rect = new _Canvas.Polygon({
  value: [
    [1, -1],
    [-1, 1],
  ],
  isRect: true,
  isDraggable: true,
  borderRadius: 15,
});

const polygon_arr = [polygon_value, polygon_position, polygon_rect];

onMounted(() => {
  myCanvas.value = new _Canvas({ id, theme: Settings.value.theme });
  myCanvas.value.addOverlay(polygon_arr);
});
defineExpose({ myCanvas });
<\/script>

<template>
  <UpdateData :canvas="myCanvas" :overlays="polygon_arr" />
  <canvas :id="id" class="my-canvas"></canvas>
</template>
`;export{n as default};
