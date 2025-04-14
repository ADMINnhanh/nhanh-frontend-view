<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NP, NText } from "naive-ui";

const id = _GenerateUUID();

let myCanvas: _Canvas;
const point_value1 = new _Canvas.Point({
  value: [0, -0.2],
  style: { stroke: "#2080f0", fill: "#2080f0", width: 20 },
  zIndex: 0,
});
const point_value2 = new _Canvas.Point({
  value: [0, 0.2],
  style: { stroke: "#18a058", fill: "#18a058", width: 20 },
  zIndex: 1,
});
const line_value1 = new _Canvas.Line({
  value: [
    [-2, 0],
    [2, 0],
  ],
  style: { color: "#8a2be2", width: 10 },
  zIndex: 2,
});
const line_value2 = new _Canvas.Line({
  value: [
    [1, 1],
    [1, -1],
  ],
  style: { color: "#ff69b4", width: 10 },
  zIndex: 3,
});
const polygon_rect1 = new _Canvas.Polygon({
  value: [[-1, -1]],
  size: [100, 100],
  zIndex: 4,
  style: { fill: "#f0a020", stroke: "#f0a020" },
});
const polygon_rect2 = new _Canvas.Polygon({
  value: [[0, -1.5]],
  size: [100, 100],
  zIndex: 5,
  style: { fill: "#d03050", stroke: "#d03050" },
});
const overlay_arr = [
  polygon_rect2,
  polygon_rect1,
  line_value2,
  line_value1,
  point_value2,
  point_value1,
];

watch(
  () => Settings.value.theme,
  (theme) => myCanvas?.setTheme(theme)
);
onMounted(() => {
  myCanvas = new _Canvas(id);
  myCanvas.setTheme(Settings.value.theme);
  myCanvas.addOverlay(overlay_arr);
});
</script>

<template>
  <NP>
    <NText type="info"> _Canvas </NText> 工具默认配置了
    <NText type="success"> 3 </NText>
    个图层（点、线、面）
  </NP>
  <NP>
    使用 <NText type="info"> addOverlay </NText> 方法添加覆盖物会加入对应的图层
  </NP>
  <NP>
    <NText type="info"> zIndex </NText> 属性仅作用于单个图层，表现效果如图
  </NP>
  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less">
.my-canvas {
  width: 100%;
  height: 270px;
}
</style>
