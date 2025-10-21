<script setup lang="ts">
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { overlays, id, GOLDEN_RATIO } from ".";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";
import { _Canvas } from "nhanh-pure-function";
import { NEquation } from "naive-ui";

let myCanvas = shallowRef<_Canvas>();

const equation = `\\begin{aligned}
   &\\frac{AP}{AB} = \\frac{PB}{AP} \\approx ${GOLDEN_RATIO};
  \\end{aligned}`;

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
  <Card :canvas="myCanvas" vertical alert="黄金分割">
    <template #alert-content>
      <NEquation :value="equation" />
    </template>
    <canvas :id="id"></canvas>
  </Card>
</template>

<style scoped lang="less"></style>
