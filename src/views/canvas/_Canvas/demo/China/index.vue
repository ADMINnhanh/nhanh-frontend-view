<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../../_Canvas";
import { onMounted, ref } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import ProvinceInfo from "./InfoWindow/Province.vue";
import AttractionInfo from "./InfoWindow/Attraction.vue";
import {
  layer,
  myCanvas,
  provinceInfo,
  provincialAdministrativeRegions,
  attractionLayer,
  attractionInfo,
} from ".";
import { NTabPane, NTabs } from "naive-ui";

const id = _GenerateUUID();
const tabActive = ref("省级行政区");
let oldTabActive = "省级行政区";
function UpdateTabActive(tab: string) {
  if (oldTabActive == "省级行政区") {
    provincialAdministrativeRegions.forEach(
      (overlay) => (overlay.show.isVisible = false)
    );
  } else if (tab == "省级行政区") {
    provincialAdministrativeRegions.forEach(
      (overlay) => (overlay.show.isVisible = true)
    );
  }
  attractionLayer.show.isVisible = tab == "景区";
  oldTabActive = tab;
}

onMounted(() => {
  myCanvas.value = new _Canvas({
    id,
    axisConfig: { y: -1, count: 2000000 },
    defaultCenter: { bottom: 100 },
  });
  myCanvas.value.setDefaultCenter({
    left: -(580 - myCanvas.value.rect!.value.width / 2),
    bottom: Number((myCanvas.value.rect!.value.height / 4.4).toFixed(0)),
  });

  myCanvas.value.setScale("center", myCanvas.value.delta * 8);
  myCanvas.value.setTheme(Settings.value.theme);
  myCanvas.value.addLayer([layer, attractionLayer]);

  myCanvas.value.setNotifyReload(() => {
    [provinceInfo, attractionInfo].forEach((info) => {
      if (info.value) {
        const scale = myCanvas.value!.scale;
        const point = info.value.point;

        if (point.show.shouldRender(scale)) {
          info.value.x = point.dynamicPosition?.[0];
          info.value.y = point.dynamicPosition?.[1];
        } else {
          info.value = undefined;
        }
      }
    });
  });
});

defineExpose({ myCanvas });
</script>

<template>
  <div class="my-canvas">
    <NTabs
      v-model:value="tabActive"
      @update:value="UpdateTabActive"
      type="line"
      animated
    >
      <NTabPane name="省级行政区"></NTabPane>
      <NTabPane name="景区"></NTabPane>
    </NTabs>
    <div class="canvas-container">
      <canvas :id="id"></canvas>
      <ProvinceInfo v-if="provinceInfo" :info="provinceInfo" />
      <AttractionInfo v-if="attractionInfo" :info="attractionInfo" />
    </div>
  </div>
</template>

<style scoped lang="less">
.my-canvas {
  --height: calc(var(--router-view-height) - 2px - 28px - 68px - 20px);
  display: flex;
  flex-direction: column;
  .canvas-container {
    width: 100%;
    height: 100px;
    flex-grow: 1;
    position: relative;
    overflow: hidden;
    canvas {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
