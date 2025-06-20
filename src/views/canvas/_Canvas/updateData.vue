<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import {
  NButton,
  NSpace,
  NSwitch,
  NButtonGroup,
  NCollapseTransition,
} from "naive-ui";
import type Overlay from "./_Canvas/OverlayGroup/public/overlay";
import type _Canvas from "./_Canvas";
import { ref } from "vue";

type Value = [number, number] | [number, number][];

interface Props {
  canvas?: _Canvas;
  overlays: Overlay<any, Value>[];
}
const props = defineProps<Props>();

const more = ref(false);

function UpdateValue(delta: number) {
  props.overlays.forEach((overlay) => {
    overlay.value = overlay.value!.map((value) => {
      if (Array.isArray(value)) return [value[0] + delta, value[1] + delta];
      return value + delta;
    }) as Value;
  });
}
function UpdatePosition(delta: number) {
  props.overlays.forEach((overlay) => {
    overlay.position = overlay.position!.map((position) => {
      if (Array.isArray(position))
        return [position[0] + delta, position[1] + delta];
      return position + delta;
    }) as Value;
  });
}
function UpdateDraggable(draggable: boolean) {
  props.overlays.forEach((overlay) => {
    overlay.isDraggable = draggable;
  });
}
function UpdateAxis() {
  props.canvas?.setAxis({
    x: -props.canvas.axisConfig.x as 1 | -1,
    y: -props.canvas.axisConfig.y as 1 | -1,
  });
}
const isHandlePointsVisible = props.overlays.some(
  (overlay) => "isHandlePointsVisible" in overlay
);
function UpdateIsShowHandlePoint(isShowHandlePoint: boolean) {
  props.overlays.forEach((overlay) => {
    if ("isHandlePointsVisible" in overlay)
      overlay.isHandlePointsVisible = isShowHandlePoint;
  });
}
</script>

<template>
  <NSpace v-if="canvas" vertical style="margin-bottom: 10px">
    <NSpace>
      <NSwitch :round="false" @update:value="UpdateAxis">
        <template #checked> 颠倒坐标轴 </template>
        <template #unchecked> 颠倒坐标轴 </template>
      </NSwitch>
      <NSwitch
        :round="false"
        @update-value="UpdateDraggable"
        :default-value="true"
      >
        <template #checked> 拖拽 </template>
        <template #unchecked> 拖拽 </template>
      </NSwitch>
      <NSwitch
        :round="false"
        v-if="isHandlePointsVisible"
        @update-value="UpdateIsShowHandlePoint"
        :default-value="true"
      >
        <template #checked> 控制点 </template>
        <template #unchecked> 控制点 </template>
      </NSwitch>
      <NButton @click="canvas.setFitView()" size="small" type="primary">
        调整视图
      </NButton>
      <NSwitch :round="false" v-model:value="more">
        <template #checked> 更多控制项 </template>
        <template #unchecked> 更多控制项 </template>
      </NSwitch>
    </NSpace>
    <NCollapseTransition :show="more">
      <NSpace>
        <NButtonGroup>
          <NButton ghost @click="UpdateValue(1)"> value + 1 </NButton>
          <NButton ghost @click="UpdateValue(-1)"> value - 1 </NButton>
        </NButtonGroup>
        <NButtonGroup>
          <NButton ghost @click="UpdatePosition(100)"> position + 100 </NButton>
          <NButton ghost @click="UpdatePosition(-100)">
            position - 100
          </NButton>
        </NButtonGroup>
      </NSpace>
    </NCollapseTransition>
  </NSpace>
</template>

<style lang="less" scoped>
.n-button--small-type {
  --n-height: 22px !important;
  vertical-align: middle;
}
</style>
