<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { overlays, id, Update, Transform, Y } from ".";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";
import { NText, NP } from "naive-ui";
import Oscillator from "@/views/math/DynamicDiagram/components/Oscillator.vue";

let myCanvas = shallowRef<_Canvas>();

onMounted(() => {
  myCanvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisShow: false,
    axisConfig: { y: -1 },
  });

  myCanvas.value.addOverlay(overlays);
  Update();
});
</script>

<template>
  <Card :canvas="myCanvas" alert="三角形 ABC 中, DE 平行于 BC">
    <template #alert-content>
      <NP>
        <NText strong>
          DE 分割线段 AB、AC 或与线段 AB、AC
          的延长线相交后，对应线段的比相等且比值等于 DE 比 BC
        </NText>
      </NP>
      <NP>
        <NText strong> 三角形 ADE 与三角形 ABC 对应边比例相等 </NText>
      </NP>
      <NP>
        <NText strong depth="3"> 注：做辅助线 DF 平行于 AC </NText>
      </NP>
    </template>

    <Oscillator
      :canvas="myCanvas"
      v-model:value="Y"
      @change="Update"
      :marks="{ '-4': 'DE(y) -4', 4: 'DE(y) 4' }"
      :min="-4"
      :max="4"
      :step="0.01"
      :Tips="Transform"
    />
    <canvas :id="id"></canvas>
  </Card>
</template>

<style scoped lang="less"></style>
