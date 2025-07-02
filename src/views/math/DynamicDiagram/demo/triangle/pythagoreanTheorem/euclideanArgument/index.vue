<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { overlays, id } from ".";
import Card from "@/views/math/DynamicDiagram/card.vue";

let myCanvas = shallowRef<_Canvas>();

onMounted(() => {
  myCanvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisShow: false,
  });
  myCanvas.value.addOverlay(overlays);
});
</script>

<template>
  <Card
    :canvas="myCanvas"
    vertical
    alert="巧妙的辅助线，对吗？对的！"
    has-no-alert-content
  >
    <canvas :id="id"></canvas>
  </Card>
</template>

<style scoped lang="less"></style>
