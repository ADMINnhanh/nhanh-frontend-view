<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import UpdateData from "../updateData.vue";

const id = _GenerateUUID();

let myCanvas = shallowRef<_Canvas>();
const text_value = new _Canvas.Text({
  value: [0, 0],
  text: "你好 世界",
  style: { color: "#18a058", size: 20 },
  isDraggable: true,
});
const text_position = new _Canvas.Text({
  position: [100, -100],
  text: "Hello World",
  style: { color: "#18a058", size: 20 },
  isDraggable: true,
});
const text_arr = [text_value, text_position];

onMounted(() => {
  myCanvas.value = new _Canvas({ id });
  myCanvas.value.setTheme(Settings.value.theme);
  myCanvas.value.addOverlay(text_arr);
});
defineExpose({ myCanvas });
</script>

<template>
  <UpdateData :overlays="text_arr" />
  <canvas :id="id" class="my-canvas"></canvas>
</template>
