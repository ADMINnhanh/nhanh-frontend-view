<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, ref, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { layer, id, Update, J_ABC } from ".";
import Oscillator from "@/views/math/DynamicDiagram/components/Oscillator.vue";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";
import Media from "@/stores/media";

let myCanvas = shallowRef<_Canvas>();

const math = ref();

onMounted(() => {
  window.katex.render(
    `\\begin{aligned}
S_{\\text{月牙}} &= S_{\\text{整}} - S_{\\text{半圆}BC} \\\\ 
&= S_{\\text{半圆}BA} + S_{\\text{半圆}CA} + S_{\\triangle BCA} - S_{\\text{半圆}BC} \\\\
&= \\frac{\\pi}{8}BA^2 + \\frac{\\pi}{8}CA^2 + S_{\\triangle BCA} - \\frac{\\pi}{8}BC^2 \\\\
&= \\frac{\\pi}{8}\\left(BA^2 + CA^2 - BC^2\\right) + S_{\\triangle BCA} \\\\
&= S_{\\triangle BCA}
\\end{aligned}`,
    math.value
  );

  requestAnimationFrame(() => {
    myCanvas.value = new _Canvas({
      id,
      theme: Settings.value.theme,
      axisShow: false,
      defaultCenter: { bottom: "30%" },
      defaultScale: Media.value.isMobileStyle ? 0.9 : 1.1,
    });

    myCanvas.value.addLayer(layer);
  });

  Update();
});
</script>

<template>
  <Card :canvas="myCanvas" alert="希波克拉底月牙定理">
    <template #alert-content>
      <div ref="math" class="math"></div>
    </template>
    <Oscillator
      :canvas="myCanvas"
      v-model:value="J_ABC"
      @change="Update"
      :marks="{ 0: '∠ABC 0°', 90: '∠ABC 90°' }"
      :max="90"
    />
    <canvas :id="id"></canvas>
  </Card>
</template>

<style scoped lang="less"></style>
