<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, ref, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NButton, NCard, NIcon, NSlider, NSpace } from "naive-ui";
import { PauseCircleOutline, PlayCircleOutline } from "@vicons/ionicons5";

const id = _GenerateUUID();

let myCanvas = shallowRef<_Canvas>();

const totalLen = 120;
const x = ref(50);
const marks = {
  0: "0m",
  24: "24m",
  50: "50m",
  96: "96m",
  100: "100m",
};

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
  text: "用 120m 围栏靠 100m 长的墙围一个长方形",
  value: [50, -10],
  style: { color: "#18a058", size: 25 },
});
const x_text = new _Canvas.Text({
  text: "x : 0m",
  value: [0, 0],
  style: { color: "#18a058", size: 25 },
});
const y_text = new _Canvas.Text({
  text: "y : 0m",
  value: [0, 0],
  style: { color: "#18a058", size: 25 },
});
const m_text = new _Canvas.Text({
  text: "面积 : 0㎡",
  value: [0, 0],
  style: { color: "#18a058", size: 25 },
});

const isPlay = ref(false);
let dir: 1 | -1 = 1;
function UpdatePlay() {
  isPlay.value = !isPlay.value;
  dir = x.value < 100 ? dir : -1;

  const loop = () => {
    if (isPlay.value) {
    }
  };
  loop();
}

function UpdateX(x: number) {
  const y = (totalLen - x) / 2;
  rect.value = [
    [0, 0],
    [x, y],
  ];
  x_text.value = [x / 2, y + 5];
  x_text.text = `x: ${x.toFixed(1)}m`;
  y_text.value = [x + 15, y / 2];
  y_text.text = `y: ${y.toFixed(1)}m`;

  m_text.value = [x + 20, y + 10];
  m_text.text = `面积: ${(x * y).toFixed(1)}㎡`;
}
UpdateX(x.value);

onMounted(() => {
  myCanvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisConfig: { y: -1, count: 20 },
    defaultCenter: {
      left: "20%",
      bottom: "20%",
    },
    isInteractive: false,
  });
  myCanvas.value.addOverlay([rect, line, q_text, x_text, y_text, m_text]);
});
defineExpose({ myCanvas });
</script>

<template>
  <NCard>
    <div class="tools">
      <NButton
        quaternary
        circle
        :type="isPlay ? 'primary' : 'default'"
        style="font-size: 24px"
        @click="UpdatePlay()"
      >
        <NIcon :component="isPlay ? PauseCircleOutline : PlayCircleOutline" />
      </NButton>
      <NSlider v-model:value="x" @update:value="UpdateX" :marks="marks" />
    </div>
    <canvas :id="id"></canvas>
  </NCard>
</template>

<style scoped lang="less">
.n-card {
  :deep(.n-card__content) {
    display: flex;
    flex-direction: column;
  }
}
.tools {
  display: flex;
  .n-slider {
    margin-left: 10px;
    width: 100px;
    flex-grow: 1;
  }
}
canvas {
  width: 100%;
  height: 100px;
  flex-grow: 1;
}
</style>
