const n=`<script setup lang="ts">
import { _Utility_GenerateUUID, _Canvas } from "nhanh-pure-function";
import { onMounted, ref, shallowRef, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NSpace, NSwitch, NText } from "naive-ui";

const id = _Utility_GenerateUUID();

let myCanvas = shallowRef<_Canvas>();
const scale = ref();
const point_value = new _Canvas.Point({
  value: [0, 0],
  scaleRange: [0.8, 1.2],
});

const show = ref(true);
watch(show, (show) => (point_value.isVisible = show), { immediate: true });

onMounted(() => {
  myCanvas.value = new _Canvas({ id, theme: Settings.value.theme });
  myCanvas.value.setNotifyReload(() => {
    scale.value = myCanvas.value!.scale;
  });
  myCanvas.value.addOverlay(point_value);
});
defineExpose({ myCanvas });
<\/script>

<template>
  <div class="canvas-container">
    <NSpace>
      <NText type="info">show:</NText>
      <NSwitch v-model:value="show" />
      <NText type="info">scaleRange:</NText>
      <NText type="success">0.8 ~ 1.2</NText>
    </NSpace>
    <canvas :id="id" class="my-canvas"></canvas>
    <NText type="success">scale: {{ scale }}</NText>
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
