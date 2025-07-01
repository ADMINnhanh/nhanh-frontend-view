<script setup lang="ts">
import { NCard, NRadio, NRadioGroup, NSpace } from "naive-ui";
import { dynamicDiagram, dynamicDiagramCollection, type Collection } from ".";

interface Props {
  collection?: Collection;
}
const props = defineProps<Props>();

const collection = props.collection || dynamicDiagramCollection;
</script>

<template>
  <NSpace vertical>
    <template v-for="item in collection" :key="item.title">
      <NCard :title="item.title" size="small">
        <NRadioGroup v-model:value="dynamicDiagram">
          <template v-for="child in item.children" :key="child.title">
            <DynamicDiagramItem v-if="child.children" :collection="[child]" />
            <NRadio v-else :value="child.title">
              {{ child.title }}
            </NRadio>
          </template>
        </NRadioGroup>
      </NCard>
    </template>
  </NSpace>
</template>

<style scoped lang="less">
.n-radio-group {
  width: 100%;
  :deep(.n-card) {
    margin-top: 10px;
  }
}
</style>
