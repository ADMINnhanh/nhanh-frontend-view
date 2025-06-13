<script setup lang="ts">
import { _GenerateUUID } from "nhanh-pure-function";
import { NButton, NSpace, NSwitch } from "naive-ui";
import type Overlay from "./_Canvas/OverlayGroup/public/overlay";

type Value = [number, number] | [number, number][];

interface Props {
  overlays: Overlay<any, Value>[];
}
const props = defineProps<Props>();

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
  <NSpace style="margin-bottom: 10px">
    <NSwitch @update-value="UpdateDraggable" :default-value="true">
      <template #checked> 拖拽 </template>
      <template #unchecked> 拖拽 </template>
    </NSwitch>
    <NSwitch
      v-if="isHandlePointsVisible"
      @update-value="UpdateIsShowHandlePoint"
      :default-value="true"
    >
      <template #checked> 显示控制点 </template>
      <template #unchecked> 显示控制点 </template>
    </NSwitch>
    <NButton type="info" ghost @click="UpdateValue(1)"> value + 1 </NButton>
    <NButton type="info" ghost @click="UpdateValue(-1)"> value - 1 </NButton>
    <NButton ghost @click="UpdatePosition(100)"> position + 100 </NButton>
    <NButton ghost @click="UpdatePosition(-100)"> position - 100 </NButton>
  </NSpace>
</template>

<style scoped lang="less"></style>
