const n=`<script setup lang="ts">
import { _Utility_GenerateUUID, _Canvas } from "nhanh-pure-function";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import UpdateData from "../updateData.vue";

const id = _Utility_GenerateUUID();

let myCanvas = shallowRef<_Canvas>();
const arc_value = new _Canvas.Arc({
  value: [-5, 0],
  radiusValue: 2,
  startAngle: 0.5,
  endAngle: Math.PI - 0.5,
  isDraggable: true,
});
const arc_value_counterclockwise = new _Canvas.Arc({
  value: [0, 0],
  radiusValue: 2,
  startAngle: 0.5,
  endAngle: Math.PI - 0.5,
  isDraggable: true,
  counterclockwise: true,
});
const arc_position = new _Canvas.Arc({
  position: [250, 0],
  radiusPosition: 100,
  startAngle: -0.5,
  endAngle: Math.PI + 0.5,
  isDraggable: true,
  isFill: true,
  isClosed: true,
  isClosedThroughCenter: true,
});
const arc_arr = [arc_value, arc_value_counterclockwise, arc_position];

onMounted(() => {
  myCanvas.value = new _Canvas({ id, theme: Settings.value.theme });
  myCanvas.value.addOverlay(arc_arr);
});
defineExpose({ myCanvas });
<\/script>

<template>
  <UpdateData :canvas="myCanvas" :overlays="arc_arr" />
  <canvas :id="id" class="my-canvas"></canvas>
</template>
`;export{n as default};
