<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";

const id = _GenerateUUID();

let myCanvas = shallowRef<_Canvas>();
const arc_value = new _Canvas.Arc({
  value: [0, 0],
  radius: 50,
  startAngle: 0,
  endAngle: Math.PI,
  isDraggable: true,
  isFill: true,
});
const arc_arr = [arc_value];

console.log(arc_value);

onMounted(() => {
  myCanvas.value = new _Canvas({ id });
  myCanvas.value.setTheme(Settings.value.theme);
  myCanvas.value.addOverlay(arc_arr);
});
defineExpose({ myCanvas });
</script>

<template>
  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less"></style>
