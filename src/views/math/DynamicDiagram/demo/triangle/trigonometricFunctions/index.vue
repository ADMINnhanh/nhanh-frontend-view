<script setup lang="ts">
import { onMounted, ref, shallowRef, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";
import { _Canvas, _Utility_GenerateUUID } from "nhanh-pure-function";
import draw, { FUNCTIONS, type FunctionName } from ".";
import { NSpace, NText, NCheckboxGroup, NCheckbox } from "naive-ui";
import UnitCircle from "./unitCircle.vue";
import Media from "@/stores/media";

const id = _Utility_GenerateUUID();
let canvas = shallowRef<_Canvas>();

const functions = ref<FunctionName[]>([...FUNCTIONS]);
const custom = new _Canvas.Custom({
  value: [],
  draw: (ctx) => draw(canvas.value!, ctx, functions.value),
});
watch(functions, () => custom.notifyReload?.());
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
    <n-checkbox-group v-model:value="functions">
      <n-space item-style="display: flex;">
        <n-checkbox v-for="tag in FUNCTIONS" :value="tag" :label="tag" />
      </n-space>
    </n-checkbox-group>
    <canvas :id="id"></canvas>
    <UnitCircle v-if="!Media.isMobileStyle" />
  </Card>
</template>

<style scoped lang="less"></style>
