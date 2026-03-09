<script setup lang="ts">
import { NCard, NRadio, NRadioGroup } from "naive-ui";
import { dynamicDiagram, dynamicDiagramCollection, type Collection } from "..";

interface Props {
  collection?: Collection;
}
const props = defineProps<Props>();

const collection = props.collection || dynamicDiagramCollection;
</script>

<template>
  <template v-for="item in collection" :key="item.title">
    <NCard :title="item.title" size="small">
      <NRadioGroup v-model:value="dynamicDiagram">
        <div class="flex-box">
          <template v-for="child in item.children" :key="child.title">
            <DynamicDiagramItem v-if="child.children" :collection="[child]" />
            <NRadio v-else :value="child.title">
              {{ child.title }}
            </NRadio>
          </template>
        </div>
      </NRadioGroup>
    </NCard>
  </template>
</template>

<style scoped lang="less">
.flex-box {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .n-card {
    margin-top: 0px !important;
  }
}
.n-card:not(:first-child) {
  margin-top: 10px;
}
.n-radio-group {
  width: 100%;
}
</style>
