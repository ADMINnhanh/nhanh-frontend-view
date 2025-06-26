<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, ref, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NButton, NCard, NIcon, NSlider } from "naive-ui";
import {
  PauseCircleOutline,
  PlayCircleOutline,
  RefreshCircleOutline,
} from "@vicons/ionicons5";

const id = _GenerateUUID();

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
function _CreateOscillator(
  initialMin: number,
  initialMax: number,
  initialSteps: number,
  callback: (value: number) => void,
  precision = 2
) {
  // 状态变量
  let current = initialMin;
  let isPlaying = false;
  let direction: 1 | -1 = 1;

  // 可修改参数
  let min = initialMin;
  let max = initialMax;
  let steps = initialSteps;

  // 计算步长
  const calculateStepSize = () => {
    const rawStep = (max - min) / steps;
    return Number(rawStep.toFixed(precision)) || 0.01;
  };

  let stepSize = calculateStepSize();

  // 数值处理工具
  const clamp = (value: number) => Math.min(Math.max(value, min), max);
  const toPrecision = (value: number) => Number(value.toFixed(precision));

  // 参数验证函数
  const validateParams = (newMin: number, newMax: number, newSteps: number) => {
    const errors: string[] = [];

    if (newMin >= newMax) {
      errors.push("最小值必须小于最大值");
    }

    if (newSteps <= 0) {
      errors.push("分段数必须为正数");
    }

    return errors;
  };

  // 更新参数的核心方法
  const updateParams = (newMin: number, newMax: number, newSteps: number) => {
    const errors = validateParams(newMin, newMax, newSteps);

    if (errors.length > 0) {
      console.error(`参数更新失败: ${errors.join("; ")}`);
      return false;
    }

    min = newMin;
    max = newMax;
    steps = newSteps;
    stepSize = calculateStepSize();

    // 校正当前值
    current = clamp(current);

    return true;
  };

  // 动画循环
  const animate = () => {
    if (!isPlaying) return;

    // 更新方向和值
    direction = current >= max ? -1 : current <= min ? 1 : direction;
    current = clamp(current + stepSize * direction);

    callback(toPrecision(current));
    requestAnimationFrame(animate);
  };

  return {
    /** 启动/继续动画 */
    play(target = current) {
      current = clamp(target);

      if (validateParams(initialMin, initialMax, initialSteps).length) {
        return console.warn("配置参数错误", this.getParams());
      }

      // 3. 启动动画（如果未运行）
      if (!isPlaying) {
        isPlaying = true;
        animate();
      }
    },

    /** 暂停动画 */
    pause() {
      isPlaying = false;
    },

    /** 获取当前值 */
    getCurrent: () => toPrecision(current),

    /** 是否正在运行 */
    isPlaying: () => isPlaying,

    /** 更新参数（不中断动画） */
    updateParams,

    /** 获取当前参数 */
    getParams: () => ({ min, max, steps, precision, stepSize }),
  };
}
const playTool = _CreateOscillator(0, 100, 300, (v) => {
  x.value = v;
  UpdateX(v);
});
function UpdatePlay() {
  isPlay.value = !isPlay.value;

  if (isPlay.value) playTool.play(x.value);
  else playTool.pause();
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
  const dom = document.getElementById(id)!;
  const left = dom.getBoundingClientRect().width / 2 - 250;
  myCanvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisConfig: { y: -1, count: 20 },
    defaultCenter: { left: left, bottom: 50 },
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
defineExpose({ myCanvas });
</script>

<template>
  <NCard>
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
