<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../../_Canvas";
import { onMounted, shallowRef, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import ChinaData from ".";
import type OverlayGroup from "../../_Canvas/OverlayGroup";

const id = _GenerateUUID();

let myCanvas = shallowRef<_Canvas>();
const layer = new _Canvas.Layer("中国地图");
const overlayGroups: OverlayGroup[] = [];

ChinaData().then((chinaData) => {
  chinaData.forEach((item) => {
    const overlayGroup = new _Canvas.OverlayGroup(item.properties.name);

    const commonClickEvent = () => {
      window.$message.success(`这里是 ${item.properties.name}`);
    };
    const commonDblClickEvent = () => {
      myCanvas.value?.setFitView(overlayGroup);
      // myCanvas.value?.setFitView();
    };

    item.geometry.forEach((polygonData) => {
      const polygon = new _Canvas.Polygon({
        isShowHandlePoint: false,
        value: polygonData,
      });
      overlayGroup.addOverlays(polygon);
    });

    const center = item.properties.center;
    if (center) {
      /** 省会城市 */
      const capitalCity_point = new _Canvas.Point({ value: center });
      capitalCity_point.show.setScales([0.9, 1000]);
      const capitalCity_text = new _Canvas.Text({
        text: item.properties.name,
        value: center,
        extraOffset: { x: 0, y: 20 },
      });
      capitalCity_text.show.setScales([1.1, 1000]);

      overlayGroup.addOverlays([capitalCity_point, capitalCity_text]);
    }

    const overlays = Array.from(overlayGroup.overlays.values());
    overlayGroup.overlays.forEach((overlay) => {
      overlay.sharedHoverOverlays = overlays;
      overlay.addEventListener("click", commonClickEvent);
      overlay.addEventListener("dblclick", commonDblClickEvent);
    });

    overlayGroups.push(overlayGroup);
  });
  layer.addGroup(overlayGroups);
});

watch(
  () => Settings.value.theme,
  (theme) => myCanvas.value?.setTheme(theme)
);
onMounted(() => {
  myCanvas.value = new _Canvas(id, {
    axisConfig: { y: -1, count: 2000000 },
    defaultCenter: { bottom: 0 },
  });
  myCanvas.value.setDefaultCenter({
    left: -(580 - myCanvas.value.rect!.value.width / 2),
  });
  myCanvas.value.setTheme(Settings.value.theme);
  myCanvas.value.addLayer(layer);
});

defineExpose({ myCanvas });
</script>

<template>
  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less">
.my-canvas {
  --height: 370px;
}
</style>
