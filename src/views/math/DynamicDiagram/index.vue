<script setup lang="ts">
import { NRadio, NRadioGroup, NScrollbar, NSpace } from "naive-ui";
import { computed, ref } from "vue";
import { useLocalStorage } from "@vueuse/core";
import threeWalledEnclosure from "./demo/threeWalledEnclosure.vue";
import perpendicularBisector from "./demo/perpendicularBisector.vue";

const dynamicDiagramCollection = [
  {
    title: "三边围墙",
    component: threeWalledEnclosure,
  },
  {
    title: "垂直平分线",
    component: perpendicularBisector,
  },
];
const dynamicDiagram = useLocalStorage(
  "math-dynamic-diagram",
  dynamicDiagramCollection[0].title
);

const dynamicDiagramComponent = computed(() => {
  return dynamicDiagramCollection.find(
    (item) => item.title === dynamicDiagram.value
  )!.component;
});
</script>

<template>
  <div class="dynamic-diagram-container">
    <NScrollbar>
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
    <component :is="dynamicDiagramComponent" />
  </div>
</template>

<style scoped lang="less">
.is-mobile .dynamic-diagram-container {
  padding: 0;
  flex-direction: column;
  :deep(> .n-scrollbar) {
    width: 100%;
    max-height: 20vh;
    .n-space {
      padding: 10px;
    }
  }
  :deep(> .n-card) {
    width: 100%;
    height: 100px;
    flex-grow: 1;
    margin-left: 0;
  }
}
.dynamic-diagram-container {
  display: flex;
  height: 100%;
  padding: 20px;
  :deep(> .n-scrollbar) {
    width: 20vw;
    height: auto;
  }
  :deep(> .n-card) {
    width: 100px;
    height: 100%;
    flex-grow: 1;
    margin-left: 10px;
  }
}
</style>
