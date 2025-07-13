<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onMounted, shallowRef } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { overlays, id, Update, Transform } from ".";
import Card from "@/views/math/DynamicDiagram/components/Card.vue";
import { NButton, NText } from "naive-ui";
import SvgGather from "@/assets/icon/gather";

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
  <Card :canvas="myCanvas" vertical alert="三角形 ABC 中, DE 平行于 BC">
    <template #alert-content>
      <NText strong>
        DE 分割线段 AB、AC 或与线段 AB、AC
        的延长线相交后，对应线段的比相等且比值等于 DE 比 BC
      </NText>
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
