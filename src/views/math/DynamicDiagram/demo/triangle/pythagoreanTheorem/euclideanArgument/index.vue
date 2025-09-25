<script setup lang="ts">
import { _Canvas } from "nhanh-pure-function";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { overlays, id, Update, J_ABC, isPlay, Tips } from ".";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";
import Oscillator from "@/views/math/DynamicDiagram/components/Oscillator.vue";
import { NButton } from "naive-ui";
import SvgGather from "@/assets/icon/gather";
import Media from "@/stores/media";

let myCanvas = shallowRef<_Canvas>();

onMounted(() => {
  myCanvas.value = new _Canvas({
    id,
    theme: Settings.value.theme,
    axisShow: false,
    defaultScale: Media.value.isMobileStyle ? 0.8 : 1,
  });

  myCanvas.value.addOverlay(overlays);
  myCanvas.value.style.light.line.stroke.color = "#000";
  myCanvas.value.style.light.line.stroke.width = 2;
  myCanvas.value.style.dark.line.stroke.color = "#fff";
  myCanvas.value.style.dark.line.stroke.width = 2;
  Update();
});
</script>

<template>
  <Card :canvas="myCanvas" alert="巧妙的辅助线，对吗？对的！">
    <template #alert-content>
      没有头绪？ 点击
      <NButton
        text
        type="success"
        style="font-size: 20px; vertical-align: middle"
      >
        <SvgGather icon="Bulb" />
      </NButton>
      看看。
    </template>
    <Oscillator
      :canvas="myCanvas"
      v-model:value="J_ABC"
      @change="Update"
      :marks="{ 0: '∠ABC 0°', 90: '∠ABC 90°' }"
      :max="90"
      :disabled="isPlay"
      :Tips="Tips"
    />
    <canvas :id="id"></canvas>
  </Card>
</template>

<style scoped lang="less"></style>
