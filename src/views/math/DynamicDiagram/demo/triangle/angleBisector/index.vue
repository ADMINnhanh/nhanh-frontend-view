<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { overlays, id, Update } from ".";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";

let myCanvas = shallowRef<_Canvas>();

onMounted(() => {
  myCanvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisShow: false,
  });
  myCanvas.value.addOverlay(overlays);
  myCanvas.value.addEventListener("dragg", Update);
  Update();
});
</script>

<template>
  <Card
    :canvas="myCanvas"
    vertical
    alert="尝试改变角度"
    alert-content="1. 点击角的组成线 ； 2. 拖拽顶点"
  >
    <canvas :id="id"></canvas>
  </Card>
</template>

<style scoped lang="less"></style>
