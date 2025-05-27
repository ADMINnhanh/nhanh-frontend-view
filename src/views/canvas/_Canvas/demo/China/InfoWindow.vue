<script setup lang="ts">
import { NCard, NA, NBlockquote, NText } from "naive-ui";
import type { ProvinceInfo } from ".";

interface Props {
  info: ProvinceInfo;
}
const props = defineProps<Props>();
</script>

<template>
  <NCard :title="info.name" size="small">
    <template #header-extra>
      <NA :href="info.website" target="_blank"> 政府网站地址 </NA>
    </template>
    <NBlockquote>
      <NText depth="3">{{ info.description }}</NText>
    </NBlockquote>
  </NCard>
</template>

<style scoped lang="less">
.n-card {
  width: 50%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
