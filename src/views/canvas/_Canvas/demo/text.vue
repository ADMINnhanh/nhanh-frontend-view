<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NButton, NSpace } from "naive-ui";

const id = _GenerateUUID();

let myCanvas: _Canvas;
const text_value = new _Canvas.Text({
  value: [0, 0],
  text: "你好 世界",
  style: { color: "#18a058", size: 20 },
});
const text_position = new _Canvas.Text({
  position: [100, -100],
  text: "Hello World",
  style: { color: "#18a058", size: 20 },
});
const text_arr = [text_value, text_position];

function UpdateValue(delta: number) {
  text_arr.forEach((text) => {
    const [x, y] = text.value!;
    text.setValue([x + delta, y + delta]);
  });
}
function UpdatePosition(delta: number) {
  text_arr.forEach((text) => {
    const [x, y] = text.position!;
    text.setPosition([x + delta, y + delta]);
  });
}

watch(
  () => Settings.value.theme,
  (theme) => myCanvas?.setTheme(theme)
);
onMounted(() => {
  myCanvas = new _Canvas(id);
  myCanvas.setTheme(Settings.value.theme);
  myCanvas.addOverlay(text_arr);
});
</script>

<template>
  <NSpace style="margin-bottom: 10px">
    <NButton type="info" ghost @click="UpdateValue(1)"> value + 1 </NButton>
    <NButton type="info" ghost @click="UpdateValue(-1)"> value - 1 </NButton>
    <NButton ghost @click="UpdatePosition(100)"> position + 100 </NButton>
    <NButton ghost @click="UpdatePosition(-100)"> position - 100 </NButton>
  </NSpace>

  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less">
.my-canvas {
  width: 100%;
  height: 270px;
}
</style>
