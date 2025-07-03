<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { overlays, id, Update, J_ABC } from ".";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";
import Oscillator from "@/views/math/DynamicDiagram/components/Oscillator.vue";

let myCanvas = shallowRef<_Canvas>();

onMounted(() => {
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
    alert="巧妙的辅助线，对吗？对的！"
    has-no-alert-content
  >
    <Oscillator
      :canvas="myCanvas"
      v-model:value="J_ABC"
      @change="Update"
      :marks="{ 0: '0°', 90: '90°' }"
      :max="90"
    />
    <canvas :id="id"></canvas>
  </Card>
</template>

<style scoped lang="less"></style>
