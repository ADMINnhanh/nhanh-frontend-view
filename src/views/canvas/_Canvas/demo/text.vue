<script setup lang="ts">
import { _Utility_GenerateUUID, _Canvas } from "nhanh-pure-function";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import UpdateData from "../updateData.vue";

const id = _Utility_GenerateUUID();

let myCanvas = shallowRef<_Canvas>();
const text_value = new _Canvas.Text({
  value: [0, -0.5],
  text: "你好 世界",
  style: { color: "#18a058", size: 20 },
  isDraggable: true,
});
const text_position = new _Canvas.Text({
  position: [0, 25],
  text: "Hello World",
  style: { color: "#18a058", size: 20 },
  isDraggable: true,
});
const text_arr = [text_value, text_position];

onMounted(() => {
  myCanvas.value = new _Canvas({ id, theme: Settings.value.theme });
  myCanvas.value.addOverlay(text_arr);
});
defineExpose({ myCanvas });
</script>

<template>
  <UpdateData :canvas="myCanvas" :overlays="text_arr" />
  <canvas :id="id" class="my-canvas"></canvas>
</template>
