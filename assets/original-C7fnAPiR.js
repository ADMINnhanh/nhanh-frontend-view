const n=`<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NA } from "naive-ui";

const id = _GenerateUUID();
let myCanvas: _Canvas;
watch(
  () => Settings.value.theme,
  (theme) => myCanvas?.setTheme(theme)
);
onMounted(() => {
  myCanvas = new _Canvas(id);
  myCanvas.setTheme(Settings.value.theme);
});
<\/script>

<template>
  <NA
    href="https://github.com/ADMINnhanh/nhanh-frontend-view/tree/main/src/views/canvas/_Canvas/_Canvas"
    target="_blank"
  >
    查看 _Canvas 工具源文件
  </NA>
  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less">
.my-canvas {
  width: 100%;
  height: 270px;
}
</style>
`;export{n as default};
