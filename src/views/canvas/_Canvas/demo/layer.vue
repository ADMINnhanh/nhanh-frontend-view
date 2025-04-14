<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NP, NText } from "naive-ui";

const id = _GenerateUUID();

let myCanvas: _Canvas;
const custom_1 = new _Canvas.Custom({ value: [0.1, -1], zIndex: 0 }, (ctx) => {
  const [x, y] = custom_1.dynamicPosition!;

  ctx.fillStyle = "#b2d705";

  ctx.beginPath();

  ctx.rect(x, y, 20, 80);

  ctx.fill();
});
const custom_2 = new _Canvas.Custom(
  { value: [0.3, -0.5], zIndex: 1 },
  (ctx) => {
    const [x, y] = custom_2.dynamicPosition!;

    ctx.fillStyle = "#de82cb";

    ctx.beginPath();

    ctx.rect(x, y, 20, 80);

    ctx.fill();
  }
);
const point_value1 = new _Canvas.Point({
  value: [0, -0.2],
  style: { stroke: "#2080f0", fill: "#2080f0", width: 20 },
  zIndex: 2,
});
const point_value2 = new _Canvas.Point({
  value: [0, 0.2],
  style: { stroke: "#18a058", fill: "#18a058", width: 20 },
  zIndex: 3,
});
const line_value1 = new _Canvas.Line({
  value: [
    [-2, 0],
    [2, 0],
  ],
  style: { color: "#8a2be2", width: 10 },
  zIndex: 4,
});
const line_value2 = new _Canvas.Line({
  value: [
    [1, 1],
    [1, -1],
  ],
  style: { color: "#ff69b4", width: 10 },
  zIndex: 5,
});
const polygon_rect1 = new _Canvas.Polygon({
  value: [[-1, -1]],
  size: [100, 100],
  style: { fill: "#f0a020", stroke: "#f0a020" },
  zIndex: 6,
});
const polygon_rect2 = new _Canvas.Polygon({
  value: [[0, -1.5]],
  size: [100, 100],
  style: { fill: "#d03050", stroke: "#d03050" },
  zIndex: 7,
});

const overlay_arr = [
  polygon_rect2,
  polygon_rect1,
  line_value2,
  line_value1,
  point_value2,
  point_value1,
  custom_2,
  custom_1,
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
    <NText type="success"> 4 </NText>
    个图层（自定义、点 、线 、面）
  </NP>
  <NP>
    图层默认的<NText type="info"> zIndex </NText>： （自定义
    <NText type="success"> 4 </NText>） 、（点
    <NText type="success"> 3 </NText>） 、（线
    <NText type="success"> 2 </NText>） 、（面
    <NText type="success"> 1 </NText>）
  </NP>
  <NP>
    使用 <NText type="info"> addOverlay </NText> 方法添加覆盖物会加入对应的图层
  </NP>
  <NP>
    覆盖物的
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
