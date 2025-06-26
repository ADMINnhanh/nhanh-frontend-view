<script setup lang="ts">
import { NRadio, NRadioGroup, NScrollbar, NSpace } from "naive-ui";
import { computed, ref } from "vue";
import ThreeWalledEnclosure from "./threeWalledEnclosure.vue";

const dynamicDiagramCollection = [
  {
    title: "三边围墙",
    component: ThreeWalledEnclosure,
  },
];
const dynamicDiagram = ref("三边围墙");

const dynamicDiagramComponent = computed(() => {
  return dynamicDiagramCollection.find(
    (item) => item.title === dynamicDiagram.value
  )!.component;
});
</script>

<template>
  <div class="dynamic-diagram-container">
    <NScrollbar style="width: 20vw; height: auto">
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
}
.dynamic-diagram-container {
  display: flex;
  height: 100%;
  padding: 20px;
  :deep(.n-card) {
    width: 100px;
    height: 100%;
    flex-grow: 1;
    margin-left: 10px;
  }
}
</style>
