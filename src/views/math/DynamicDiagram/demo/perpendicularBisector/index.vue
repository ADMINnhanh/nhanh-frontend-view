<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NCard } from "naive-ui";
import { overlays, id, Update } from ".";

let myCanvas = shallowRef<_Canvas>();

onMounted(() => {
  myCanvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisShow: false,
  });
  myCanvas.value.addOverlay(overlays);
  Update();
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
