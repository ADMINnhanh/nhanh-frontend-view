<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, ref, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { overlays, id } from ".";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";

let myCanvas = shallowRef<_Canvas>();

const math = ref();

onMounted(() => {
  window.katex.render(
    `\\begin{aligned}
   &\\frac{AP}{AC} = \\frac{PC}{AP} \\approx 0.61803;
  \\end{aligned}`,
    math.value
  );

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
      <div ref="math" class="math"></div>
    </template>
    <canvas :id="id"></canvas>
  </Card>
</template>

<style scoped lang="less"></style>
