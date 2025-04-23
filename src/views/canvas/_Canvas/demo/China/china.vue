<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../../_Canvas";
import { onMounted, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NA } from "naive-ui";
import ChinaData from ".";
import type OverlayGroup from "../../_Canvas/OverlayGroup";

const id = _GenerateUUID();

let myCanvas: _Canvas;
const layer = new _Canvas.Layer("中国地图");
const overlayGroups: OverlayGroup[] = [];

ChinaData().then((chinaData) => {
  chinaData.forEach((item) => {
    const overlayGroup = new _Canvas.OverlayGroup(item.properties.name);

    const hoverEvent = (state: boolean) => {
      overlayGroup.overlays.forEach((overlay) => {
        if (state != overlay.isHover) overlay.notifyHover(state, 0, 0);
      });
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
      const capitalCity_text = new _Canvas.Text({
        text: item.properties.name,
        value: center,
        extraOffset: { x: 0, y: 20 },
      });
      capitalCity_text.show.setScales([1.1, 1000]);

      overlayGroup.addOverlays([capitalCity_point, capitalCity_text]);
    }

    overlayGroup.overlays.forEach((overlay) => {
      overlay.addEventListener("hover", hoverEvent);
    });

    overlayGroups.push(overlayGroup);
  });
  layer.addGroup(overlayGroups);
});

watch(
  () => Settings.value.theme,
  (theme) => myCanvas?.setTheme(theme)
);
onMounted(() => {
  myCanvas = new _Canvas(id, {
    axisConfig: { y: -1, count: 2000000 },
    defaultCenter: { bottom: 0 },
  });
  myCanvas.setDefaultCenter({ left: -(580 - myCanvas.rect!.value.width / 2) });
  myCanvas.setTheme(Settings.value.theme);
  myCanvas.addLayer(layer);

  // console.log(myCanvas);
});
</script>

<template>
  <NA
    href="https://github.com/ADMINnhanh/nhanh-frontend-view/tree/main/src/views/canvas/_Canvas/demo"
    target="_blank"
  >
    所有 demo 的源码
  </NA>
  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less">
.my-canvas {
  --height: 370px;
}
</style>
