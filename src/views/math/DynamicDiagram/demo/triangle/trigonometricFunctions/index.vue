<script setup lang="ts">
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";
import { _Canvas, _Utility_GenerateUUID } from "nhanh-pure-function";
import draw from ".";
import { NH6, NSpace, NText } from "naive-ui";

const id = _Utility_GenerateUUID();
let canvas = shallowRef<_Canvas>();

const custom = new _Canvas.Custom({
  value: [],
  draw: (ctx) => draw(canvas.value!, ctx),
});

onMounted(() => {
  canvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisConfig: { count: 4 },
  });
  canvas.value.addOverlay(custom);
});
</script>

<template>
  <Card :canvas="canvas" vertical alert="三角函数坐标轴说明">
    <template #alert-content>
      <NSpace vertical>
        <NText>sin / cos / tan：X 轴为弧度制，Y 轴为边的比值</NText>
        <NText>tan 函数在 π / 2 + kπ 处为渐近线，图像会自动截断</NText>
        <NText> arcsin / arccos / arctan：X 轴为边的比值，Y 轴为弧度制 </NText>
      </NSpace>
    </template>
    <canvas :id="id"></canvas>
  </Card>
</template>

<style scoped lang="less"></style>
