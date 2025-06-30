<script setup lang="ts">
import { NRadio, NRadioGroup, NScrollbar, NSpace } from "naive-ui";
import { computed } from "vue";
import { dynamicDiagram, dynamicDiagramCollection } from ".";

const dynamicDiagramComponent = computed(() => {
  return dynamicDiagramCollection.find(
    (item) => item.title === dynamicDiagram.value
  )!.component;
});
</script>

<template>
  <div class="dynamic-diagram-container">
    <NScrollbar>
      <!-- <template v-for="(item, index) in dynamicDiagramCollection"
       :key="item.title"
       
       >
       <NSpace  vertical></NSpace>

      
      </template> -->
      <NRadioGroup v-model:value="dynamicDiagram">
        <NRadio
          v-for="diagram in dynamicDiagramCollection"
          :key="diagram.title"
          :value="diagram.title"
        >
          {{ diagram.title }}
        </NRadio>
      </NRadioGroup>
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
    width: 400px;
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
