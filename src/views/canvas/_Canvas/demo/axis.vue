<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, ref, shallowRef, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import {
  ArrowBack,
  ArrowDown,
  ArrowForward,
  ArrowUp,
  HelpCircleOutline,
} from "@vicons/ionicons5";
import {
  NCheckbox,
  NCheckboxGroup,
  NRadioButton,
  NRadioGroup,
  NSpace,
  NIcon,
  NInputNumber,
  NText,
  NH4,
  NP,
  NTooltip,
  NButton,
  NFlex,
} from "naive-ui";

const id = _GenerateUUID();
const show = ref<string[]>([
  "all",
  "grid.main",
  "grid.secondary",
  "axis",
  "axisText",
]);
const config = ref<_Canvas["axisConfig"]>({
  x: 1 as 1 | -1,
  y: 1 as 1 | -1,
  count: 2,
  min: 100,
  size: 100,
});

let myCanvas = shallowRef<_Canvas>();

watch(
  () => [show.value, config.value] as const,
  ([show, config]) => {
    const _config = { ...config };
    if (_config.min % 5 == 0) {
      _config.size = _config.min;
    } else {
      Object.assign(_config, {
        min: undefined,
        size: undefined,
      });
    }

    myCanvas.value!.setAxis(_config);
    myCanvas.value!.toggleAxis({
      all: show.includes("all"),
      grid: {
        main: show.includes("grid.main"),
        secondary: show.includes("grid.secondary"),
      },
      axis: show.includes("axis"),
      axisText: show.includes("axisText"),
    });
  },
  { deep: true }
);
onMounted(() => {
  myCanvas.value = new _Canvas({ id });
  myCanvas.value!.setTheme(Settings.value.theme);
});
defineExpose({ myCanvas });
</script>

<template>
  <NSpace vertical style="margin-bottom: 10px">
    <NCheckboxGroup v-model:value="show">
      <NSpace>
        <NCheckbox value="all" label="全部" />
        <NCheckbox value="grid.main" label="网格 - 主要的 " />
        <NCheckbox value="grid.secondary" label="网格 - 次要的" />
        <NCheckbox value="axis" label="x 、y 轴显示" />
        <NCheckbox value="axisText" label="x 、y 轴文字显示" />
      </NSpace>
    </NCheckboxGroup>

    <NSpace>
      <NInputNumber v-model:value="config.min" min="5">
        <template #prefix>
          <NFlex style="width: 125px">
            网格 min size
            <NTooltip trigger="hover">
              <template #trigger>
                <NButton text>
                  <template #icon>
                    <NIcon :component="HelpCircleOutline" />
                  </template>
                </NButton>
              </template>
              <NH4>网格大小设定规则：</NH4>
              <NP>
                1. 基于 count 计算的网格，其内部会被均匀划分为 5 个子网格。
              </NP>
              <NP>
                2.
                为确保网格在绘制时网格线正常显示，且在缩放操作时能实现平滑过渡
              </NP>
              <NP style="padding-left: 20px">
                <NText> min 必须是 5 的整数倍，即 min % 5 === 0。 </NText>
              </NP>
            </NTooltip>
          </NFlex>
        </template>
        <template #suffix>px</template>
      </NInputNumber>
      <NInputNumber v-model:value="config.count" :min="0.1">
        <template #prefix>
          <NFlex style="width: 125px">
            网格 value
            <NTooltip trigger="hover">
              <template #trigger>
                <NButton text>
                  <template #icon>
                    <NIcon :component="HelpCircleOutline" />
                  </template>
                </NButton>
              </template>
              <NP>滚轮滚动周期为 0 时单网格代表的数字</NP>
            </NTooltip>
          </NFlex>
        </template>
      </NInputNumber>
    </NSpace>

    <NSpace>
      <NRadioGroup v-model:value="config.x">
        <NRadioButton :value="-1">
          <NIcon :component="ArrowBack" />
        </NRadioButton>
        <NRadioButton :value="1">
          <NIcon :component="ArrowForward" />
        </NRadioButton>
      </NRadioGroup>
      <NRadioGroup v-model:value="config.y">
        <NRadioButton :value="1">
          <NIcon :component="ArrowDown" />
        </NRadioButton>
        <NRadioButton :value="-1">
          <NIcon :component="ArrowUp" />
        </NRadioButton>
      </NRadioGroup>
    </NSpace>
  </NSpace>

  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less">
.n-input-number {
  :deep(.n-input__input) {
    width: 80px;
  }
}
.n-popover {
  .n-h,
  .n-p,
  .n-text {
    --n-text-color: inherit !important;
  }
}
</style>
