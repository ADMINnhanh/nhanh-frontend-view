<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, ref, shallowRef, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { overlays, id, Update, Transform, t } from ".";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";
import { NButton } from "naive-ui";
import SvgGather from "@/assets/icon/gather";

let myCanvas = shallowRef<_Canvas>();

watch(
  () => Settings.value.theme,
  (theme) => {
    const color = theme == "dark" ? "#aaaaaa" : "#000000";
    t.style = {
      fill: color + 80,
      stroke: {
        width: 4,
        color,
      },
    };
  },
  {
    immediate: true,
  }
);

const math = ref();
onMounted(() => {
  window.katex.render(
    `\\begin{aligned}
  &\\text{已知}:\\ AD = DB,\\ AE = EC; \\\\
  &\\text{作DE的延长线至F，使} EF = DE, \\text{并连接CF}; \\\\
  &\\therefore \\triangle ADE \\cong \\triangle EFC; \\\\
  &\\therefore AB \\parallel CF; \\\\
  &\\because DB = CF;  \\\\
  &\\therefore \\square DFCB \\text{ 是平行四边形}; \\\\
  &\\therefore DE = \\frac{BC}{2};
  \\end{aligned}`,
    math.value
  );

  myCanvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisShow: false,
  });

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
