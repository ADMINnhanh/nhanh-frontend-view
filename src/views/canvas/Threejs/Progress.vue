<script setup lang="ts">
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import { NProgress, NSpin } from "naive-ui";

interface Props {
  percentage: number | boolean | undefined;
}
const props = defineProps<Props>();
</script>

<template>
  <slot v-if="percentage === undefined" />
  <NSpin v-else-if="typeof percentage == 'boolean'" :show="!percentage">
    <slot />
    <template #description> 希望不会让您等待太久 </template>
  </NSpin>
  <div class="box" v-else>
    <slot />
    <NProgress
      type="line"
      status="success"
      :percentage="percentage"
      :style="{ opacity: percentage == 100 ? 0 : 1 }"
      :show-indicator="false"
      processing
    />
  </div>
</template>

<style lang="less" scoped>
.n-spin-container {
  width: 100%;
  height: 100%;
  :deep(.n-spin-content) {
    width: 100%;
    height: 100%;
  }
}
.box {
  position: relative;
  width: 100%;
  height: 100%;
  .n-progress {
    pointer-events: none;
    position: absolute;
    inset: 0;
    margin: auto;
    opacity: 1;
    width: 300px;
    height: 20px;
    transition: opacity 0.5s ease-out;
  }
}
</style>
