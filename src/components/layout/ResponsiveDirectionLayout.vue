<script setup lang="ts">
import Media from "@/stores/media";
import { NSplit } from "naive-ui";
</script>

<template>
  <NSplit
    :direction="Media.isMobileStyle ? 'vertical' : 'horizontal'"
    :max="0.75"
    :min="0.25"
    :default-size="0.25"
  >
    <template #1>
      <slot name="left" />
    </template>
    <template #2>
      <slot name="right" />
    </template>
  </NSplit>
</template>

<style lang="less" scoped>
.n-split {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  :deep(.n-split__resize-trigger-wrapper) {
    margin: 5px;
  }
}
</style>
