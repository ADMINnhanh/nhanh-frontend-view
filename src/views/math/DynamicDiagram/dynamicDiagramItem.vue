<script setup lang="ts">
import { NCard, NRadio, NRadioGroup, NScrollbar, NSpace } from "naive-ui";
import { computed } from "vue";
import { dynamicDiagram, dynamicDiagramCollection, type Collection } from ".";

interface Props {
  collection?: Collection;
}
const props = defineProps<Props>();

const collection = props.collection || dynamicDiagramCollection;
</script>

<template>
  <template v-for="(item, index) in collection" :key="item.title">
    <NCard v-if="item.children" :title="item.title">
      <DynamicDiagramItem :collection="item.children" />
    </NCard>

    <NSpace v-else vertical> </NSpace>
  </template>
  <NRadioGroup v-model:value="dynamicDiagram">
    <NRadio
      v-for="diagram in dynamicDiagramCollection"
      :key="diagram.title"
      :value="diagram.title"
    >
      {{ diagram.title }}
    </NRadio>
  </NRadioGroup>
</template>

<style scoped lang="less"></style>
