const n=`<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, ref, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NSpace, NSwitch, NText } from "naive-ui";

const id = _GenerateUUID();

let myCanvas: _Canvas;
const myCanvasConfig = ref<_Canvas>({} as _Canvas);
const point_value = new _Canvas.Point({ value: [0, 0] });
point_value.show.setScales([0.8, 1.2]);

const show = ref(true);
watch(show, (show) => point_value.show.setShow(show), { immediate: true });

watch(
  () => Settings.value.theme,
  (theme) => myCanvas?.setTheme(theme)
);
onMounted(() => {
  myCanvas = new _Canvas(id);
  myCanvas.notifyReload = () => {
    (["scale"] as const).forEach((key) => {
      myCanvasConfig.value[key] = myCanvas[key];
    });
  };
  myCanvas.setTheme(Settings.value.theme);
  myCanvas.addOverlay(point_value);
});
<\/script>

<template>
  <div class="canvas-container">
    <NSpace>
      <NText type="info">show:</NText>
      <NSwitch v-model:value="show" />
      <NText type="info">scales:</NText>
      <NText type="success">0.8 ~ 1.2</NText>
    </NSpace>
    <canvas :id="id" class="my-canvas"></canvas>
    <NText type="success">scale: {{ myCanvasConfig?.scale }}</NText>
  </div>
</template>

<style scoped lang="less">
.canvas-container {
  position: relative;
  .my-canvas {
    width: 100%;
    height: 270px;
  }
  > .n-text {
    position: absolute;
    bottom: 0;
    right: 5px;
  }
}
</style>
`;export{n as default};
