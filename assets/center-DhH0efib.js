const t=`<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import _Canvas from "../_Canvas";
import { onMounted, ref, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import {
  NButton,
  NInputNumber,
  NRadioButton,
  NRadioGroup,
  NSpace,
  NText,
} from "naive-ui";

const id = _GenerateUUID();
const top = ref<_Canvas["defaultCenter"]["top"]>();
const bottom = ref<_Canvas["defaultCenter"]["bottom"]>();
const bottomUnit = ref<"" | "%">("");
const left = ref<_Canvas["defaultCenter"]["left"]>();
const right = ref<_Canvas["defaultCenter"]["right"]>();
const rightUnit = ref<"" | "%">("");

let myCanvas: _Canvas;
watch(
  () => Settings.value.theme,
  (theme) => myCanvas?.setTheme(theme)
);
watch(
  () =>
    [
      top.value,
      left.value,
      bottom.value,
      right.value,
      bottomUnit.value,
      rightUnit.value,
    ] as const,
  ([top, left, bottom, right, bottomUnit, rightUnit]) =>
    myCanvas.setDefaultCenter({
      top,
      left,
      bottom: (bottom + bottomUnit) as any,
      right: (right + rightUnit) as any,
    })
);
onMounted(() => {
  myCanvas = new _Canvas(id);
  myCanvas.setTheme(Settings.value.theme);
});
<\/script>

<template>
  <NSpace vertical style="margin-bottom: 10px">
    <NSpace>
      <NRadioGroup v-model:value="top">
        <NRadioButton value="top" label="top"></NRadioButton>
        <NRadioButton value="middle" label="middle"></NRadioButton>
        <NRadioButton value="bottom" label="bottom"></NRadioButton>
        <NRadioButton value="" label="空"></NRadioButton>
      </NRadioGroup>
      <NInputNumber v-model:value="(bottom as number)">
        <template #prefix><NText style="width: 50px">bottom</NText></template>
        <template #suffix>
          <NButton @click="bottomUnit = bottomUnit ? '' : '%'" text>
            {{ bottomUnit ? "%" : "px" }}
          </NButton>
        </template>
      </NInputNumber>
    </NSpace>
    <NSpace>
      <NRadioGroup v-model:value="left">
        <NRadioButton value="left" label="left"></NRadioButton>
        <NRadioButton value="center" label="center"></NRadioButton>
        <NRadioButton value="right" label="right"></NRadioButton>
        <NRadioButton value="" label="空"></NRadioButton>
      </NRadioGroup>
      <NInputNumber v-model:value="(right as number)">
        <template #prefix><NText style="width: 50px">right</NText></template>
        <template #suffix>
          <NButton @click="rightUnit = rightUnit ? '' : '%'" text>
            {{ rightUnit ? "%" : "px" }}
          </NButton>
        </template>
      </NInputNumber>
    </NSpace>
  </NSpace>

  <canvas :id="id" class="my-canvas"></canvas>
</template>

<style scoped lang="less">
.my-canvas {
  width: 100%;
  height: 270px;
}
</style>
`;export{t as default};
