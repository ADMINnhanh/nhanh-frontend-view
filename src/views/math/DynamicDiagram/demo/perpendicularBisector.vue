<script setup lang="ts">
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NCard } from "naive-ui";

const id = _Utility_GenerateUUID();

let myCanvas = shallowRef<_Canvas>();

const m = new _Canvas.Polygon({
  value: [
    [0, -2],
    [-2, 2],
    [2, 2],
  ],
  isDraggable: true,
  canCreateOrDeleteHandlePoint: false,
});
m.addEventListener("dragg", (event) => {
  // console.log(m.value);
});

onMounted(() => {
  myCanvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisShow: false,
  });
  myCanvas.value.addOverlay([m]);
});
defineExpose({ myCanvas });
</script>

<template>
  <NCard>
    <canvas :id="id"></canvas>
  </NCard>
</template>

<style scoped lang="less">
.n-card {
  :deep(.n-card__content) {
    height: 100%;
  }
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
