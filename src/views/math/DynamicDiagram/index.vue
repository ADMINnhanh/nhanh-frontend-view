<script setup lang="ts">
import {
  NAnchor,
  NAnchorLink,
  NRadio,
  NRadioGroup,
  NScrollbar,
  NSkeleton,
  NSpace,
} from "naive-ui";
import { markRaw, onUnmounted, ref } from "vue";
import Media from "@/stores/media";
import { Settings } from "@/components/popups/components/Settings/index";
import ThreeWalledEnclosure from "./threeWalledEnclosure.vue";

const dynamicDiagramCollection = [
  {
    title: "三边围墙",
  },
];
const dynamicDiagram = ref("三边围墙");
</script>

<template>
  <div class="dynamic-diagram-container">
    <NScrollbar style="max-height: 40vh">
      <NSpace>
        <NRadioGroup v-model:value="dynamicDiagram">
          <NRadio
            v-for="diagram in dynamicDiagramCollection"
            :key="diagram.title"
            :value="diagram.title"
          >
            {{ diagram.title }}
          </NRadio>
        </NRadioGroup>
      </NSpace>
    </NScrollbar>
  </div>
</template>

<style scoped lang="less">
.is-mobile .dynamic-diagram-container {
  padding: 0;
}
.dynamic-diagram-container {
  padding: 20px;
}
</style>
