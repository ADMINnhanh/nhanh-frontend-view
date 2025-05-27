<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../../_Canvas";
import { onMounted } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import InfoWindow from "./InfoWindow.vue";
import { layer, myCanvas, provinceInfo } from ".";

const id = _GenerateUUID();

onMounted(() => {
  myCanvas.value = new _Canvas({
    id,
    axisConfig: { y: -1, count: 2000000 },
    defaultCenter: { bottom: 0 },
  });
  // myCanvas.value.style.dark.background = "";
  // myCanvas.value.style.light.background = "";
  // myCanvas.value.toggleAxis(false);
  myCanvas.value.setDefaultCenter({
    left: -(580 - myCanvas.value.rect!.value.width / 2),
  });
  myCanvas.value.setTheme(Settings.value.theme);
  myCanvas.value.addLayer(layer);
  myCanvas.value.addEventListener("dragg", () => {
    console.log("dragg");
  });
});

defineExpose({ myCanvas });
</script>

<template>
  <div class="my-canvas">
    <canvas :id="id"></canvas>
    <InfoWindow v-if="provinceInfo" :info="provinceInfo" />
  </div>
</template>

<style scoped lang="less">
.my-canvas {
  --height: 370px;
  position: relative;
  overflow: hidden;
  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
