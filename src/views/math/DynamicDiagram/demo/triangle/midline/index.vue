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
  myCanvas.value.style.dark.line.stroke.width = 2;
  myCanvas.value.style.light.line.stroke.width = 2;
  myCanvas.value.addOverlay(overlays);
  Update();
});
</script>

<template>
  <Card
    :canvas="myCanvas"
    vertical
    alert="三角形中位线平行于第三边，且等于第三边的一半"
    alert-content="AD = DB , AE = EC ;"
  >
    <canvas :id="id"></canvas>
  </Card>
</template>

<style scoped lang="less"></style>
