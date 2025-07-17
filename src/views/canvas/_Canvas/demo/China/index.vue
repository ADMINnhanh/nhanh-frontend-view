<script setup lang="ts">
import { _Utility_GenerateUUID } from "nhanh-pure-function";
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
  heatMapOverlay,
} from ".";
import { NSpace, NSwitch, NTabPane, NTabs } from "naive-ui";

const id = _Utility_GenerateUUID();
const tabActive = ref("省级行政区");
let oldTabActive = "省级行政区";
function UpdateTabActive(tab: string) {
  if (oldTabActive == "省级行政区") {
    provincialAdministrativeRegions.forEach(
      (overlay) => (overlay.isVisible = false)
    );
  } else if (tab == "省级行政区") {
    provincialAdministrativeRegions.forEach(
      (overlay) => (overlay.isVisible = true)
    );
  }
  attractionLayer.isVisible = tab == "景区";
  oldTabActive = tab;
}

const heatMapIsVisible = ref(true);
function UpdateHeatMap(value: boolean) {
  heatMapOverlay.isVisible = value;
}
const heatMapPointIsVisible = ref(true);
function UpdateHeatMapPoint(value: boolean) {
  attractionLayer.groups.forEach((group) => {
    if (group.name != "景点热力图") group.isVisible = value;
  });
}

onMounted(() => {
  const dom = document.getElementById(id);
  const rect = dom!.getBoundingClientRect();

  const scale1 = Math.min((rect.width - 200) / 350, (rect.height - 200) / 350);
  const scale = 1 + Math.floor(((scale1 - 1) * 0.2) / 0.02) * 0.02;

  const left = rect.width / 2 - 600;
  const bottom = rect.height / 2 - 175;

  myCanvas.value = new _Canvas({
    id,
    axisConfig: { y: -1, count: 2000000 },
    defaultCenter: { left, bottom },
    defaultScale: scale,
    theme: Settings.value.theme,
  });

  myCanvas.value.addLayer([layer, attractionLayer]);

  myCanvas.value.setNotifyReload(() => {
    [provinceInfo, attractionInfo].forEach((info) => {
      if (info.value) {
        const point = info.value.point;

        if (point.shouldRender()) {
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
      <NSpace v-if="tabActive == '景区'">
        <NSwitch
          v-model:value="heatMapPointIsVisible"
          @update:value="UpdateHeatMapPoint"
        >
          <template #checked>点位</template>
          <template #unchecked>点位</template>
        </NSwitch>
        <NSwitch v-model:value="heatMapIsVisible" @update:value="UpdateHeatMap">
          <template #checked>热力图</template>
          <template #unchecked>热力图</template>
        </NSwitch>
      </NSpace>
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
    .n-space {
      position: absolute;
      top: 5px;
      left: 5px;
    }
  }
}
</style>
