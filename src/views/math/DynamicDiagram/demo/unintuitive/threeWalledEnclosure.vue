<script setup lang="ts">
import {
  _Animate_CreateOscillator,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, ref, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";

import Card from "@/views/math/DynamicDiagram/components/Card.vue";
import Oscillator from "@/views/math/DynamicDiagram/components/Oscillator.vue";
import Media from "@/stores/media";

const id = _Utility_GenerateUUID();

let myCanvas = shallowRef<_Canvas>();

const isMobileStyle = Media.value.isMobileStyle;
const totalLen = 120;
const x = ref(60);
const marks = {
  0: "0m",
  60: "60m",
  100: "100m",
};

const text_config = (x: number, y: number, color?: string) => {
  const size = isMobileStyle ? 14 : 25;
  x /= isMobileStyle ? 1.7 : 1;
  y /= isMobileStyle ? 1.7 : 1;
  const config: any = {
    style: { size },
    offset: { x, y },
  };
  if (color) config.style.color = color;
  return config;
};

const curve = new _Canvas.Line({
  value: Array.from({ length: 101 }, (_, i) => [
    i,
    Number(((i * (totalLen - i)) / 2 / 50).toFixed(1)) + 60,
  ]),
  isInteractive: false,
});
const curve_point = new _Canvas.Point({
  value: [0, 0],
});
const m_text = new _Canvas.Text({
  text: "面积 : 0㎡",
  ...text_config(120, -40, "#d03050"),
});

const rect = new _Canvas.Polygon({
  value: [
    [0, 0],
    [0, 0],
  ],
  isRect: true,
});
const line = new _Canvas.Line({
  value: [
    [0, 0],
    [100, 0],
  ],
});
const q_text = new _Canvas.Text({
  text: "用 120m 围栏，靠 100m 长的墙围一个长方形",
  value: [50, 0],
  ...text_config(0, 20),
});
const x_text = new _Canvas.Text({
  text: "x : 0m",
  ...text_config(0, -20, "#18a058"),
});
const y_text = new _Canvas.Text({
  text: "y : 0m",
  ...text_config(70, 0, "#18a058"),
});

function UpdateX(x: number) {
  const y = (totalLen - x) / 2;
  const m = Number((x * y).toFixed(1));
  const my = m / 50 + 60;
  curve_point.value = [x, my];
  m_text.value = [x, my];
  m_text.text = `面积: ${m.toFixed(1)}㎡`;

  rect.value = [
    [0, 0],
    [x, y],
  ];
  x_text.value = [x / 2, y];
  x_text.text = `x: ${x.toFixed(1)}m`;
  y_text.value = [x, y / 2];
  y_text.text = `y: ${y.toFixed(1)}m`;
}
UpdateX(x.value);

onMounted(() => {
  const { width, height } = document
    .getElementById(id)!
    .getBoundingClientRect();
  myCanvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisConfig: { y: -1, count: 20 },
    defaultCenter: { left: width / 2 - 250, bottom: height / 2 - 250 },
    axisShow: false,
    defaultScale: isMobileStyle ? 0.8 : 1,
  });

  myCanvas.value.addOverlay([
    curve,
    curve_point,
    rect,
    line,
    q_text,
    x_text,
    y_text,
    m_text,
  ]);
});
</script>

<template>
  <Card
    :canvas="myCanvas"
    alert="这或许就是留白的艺术吧..."
    has-no-alert-content
  >
    <Oscillator
      :canvas="myCanvas"
      v-model:value="x"
      @change="UpdateX(x)"
      :marks="marks"
    />
    <canvas :id="id"></canvas>
  </Card>
</template>

<style scoped lang="less">
.tools {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: 10px;
  > :not(:last-child) {
    margin-bottom: 10px;
  }
  .n-slider {
    width: 20px;
    height: 100px;
    flex-grow: 1;
  }
}
</style>
