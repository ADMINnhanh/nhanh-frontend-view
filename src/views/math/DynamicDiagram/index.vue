<script setup lang="ts">
import { NScrollbar } from "naive-ui";
import { computed, defineAsyncComponent } from "vue";
import { dynamicDiagram, dynamicDiagramCollection } from ".";
import DynamicDiagramItem from "./components/DynamicDiagramItem.vue";

function GetComponent(title: string, collection = dynamicDiagramCollection) {
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    if (element.title === title) {
      return element.component;
    }
    if (element.children) {
      const component = GetComponent(title, element.children) as any;
      if (component) {
        return component;
      }
    }
  }
}
const dynamicDiagramComponent = computed(() =>
  defineAsyncComponent(GetComponent(dynamicDiagram.value))
);
</script>

<template>
  <div class="dynamic-diagram-container">
    <NScrollbar>
      <DynamicDiagramItem />
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
    width: 500px;
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
