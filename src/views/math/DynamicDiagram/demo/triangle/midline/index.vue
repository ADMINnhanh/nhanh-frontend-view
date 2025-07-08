<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, ref, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { overlays, id, Update, Transform } from ".";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";
import { NButton } from "naive-ui";
import SvgGather from "@/assets/icon/gather";

let myCanvas = shallowRef<_Canvas>();

const math = ref();
onMounted(() => {
  window.katex.render(
    `\\begin{aligned}
&\\text{已知}:\\ AD = DB,\\ AE = EC; \\\\
&\\because DF \\parallel BC \\quad  \\land \\quad DB \\parallel FC; \\\\
&\\therefore \\square DFCB \\text{ 是平行四边形}; \\\\
&\\therefore DF = BC; \\\\
&\\therefore DE = \\frac{BC}{2};
\\end{aligned}`,
    math.value
  );

  myCanvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisShow: false,
  });
  myCanvas.value.style.dark.polygon.fill = "#aaaaaa" + 80;
  myCanvas.value.style.dark.polygon.stroke.width = 4;
  myCanvas.value.style.dark.polygon.stroke.color = "#aaaaaa";

  myCanvas.value.style.light.polygon.fill = "#000000" + 80;
  myCanvas.value.style.light.polygon.stroke.width = 4;
  myCanvas.value.style.light.polygon.stroke.color = "#000000";
  myCanvas.value.addOverlay(overlays);
  Update();
});
</script>

<template>
  <Card
    :canvas="myCanvas"
    vertical
    alert="三角形中位线平行于第三边，且等于第三边的一半"
  >
    <template #alert-content>
      <div ref="math" class="math"></div>
    </template>
    <NButton strong secondary circle type="success" @click="Transform">
      <template #icon>
        <SvgGather icon="Bulb" />
      </template>
    </NButton>

    <canvas :id="id"></canvas>
  </Card>
</template>

<style scoped lang="less"></style>
