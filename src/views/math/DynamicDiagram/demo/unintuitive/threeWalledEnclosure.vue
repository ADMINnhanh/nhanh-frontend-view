<script setup lang="ts">
import {
  _Animate_CreateOscillator,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onBeforeUnmount, onMounted, ref, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NButton, NIcon, NSlider } from "naive-ui";
import {
  PauseCircleOutline,
  PlayCircleOutline,
  RefreshCircleOutline,
} from "@vicons/ionicons5";
import Card from "@/views/math/DynamicDiagram/card.vue";

const id = _Utility_GenerateUUID();

let myCanvas = shallowRef<_Canvas>();

const totalLen = 120;
const x = ref(60);
const marks = {
  0: "0m",
  60: "60m",
  100: "100m",
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
  value: [0, 0],
  style: { color: "#d03050", size: 25 },
  offset: { x: 120, y: -40 },
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
  style: { size: 25 },
  offset: { x: 0, y: 20 },
});
const x_text = new _Canvas.Text({
  text: "x : 0m",
  value: [0, 0],
  style: { color: "#18a058", size: 25 },
  offset: { x: 0, y: -20 },
});
const y_text = new _Canvas.Text({
  text: "y : 0m",
  value: [0, 0],
  style: { color: "#18a058", size: 25 },
  offset: { x: 70, y: 0 },
});

const isPlay = ref(false);

const oscillator = _Animate_CreateOscillator(0, 100, 300, (v) => {
  x.value = v;
  UpdateX(v);
});
function UpdatePlay() {
  isPlay.value = !isPlay.value;

  if (isPlay.value) oscillator.play(x.value);
  else oscillator.pause();
}

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
onBeforeUnmount(() => {
  oscillator.pause();
});
</script>

<template>
  <Card
    :canvas="myCanvas"
    alert="这或许就是留白的艺术吧..."
    has-no-alert-content
  >
    <div class="tools">
      <NButton
        quaternary
        circle
        style="font-size: 24px"
        @click="myCanvas?.returnToOrigin()"
      >
        <NIcon :component="RefreshCircleOutline" />
      </NButton>
      <NButton
        quaternary
        circle
        :type="isPlay ? 'primary' : 'default'"
        style="font-size: 24px"
        @click="UpdatePlay()"
      >
        <NIcon :component="isPlay ? PauseCircleOutline : PlayCircleOutline" />
      </NButton>
      <NSlider
        v-model:value="x"
        @update:value="UpdateX"
        :marks="marks"
        vertical
      />
    </div>
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
