<script setup lang="ts">
import { NSpin } from "naive-ui";
import Scroll from "@/components/SingleFile/Scroll.vue";

interface PropsType {
  bottomReached?: (...args: any[]) => any;
}
const { bottomReached } = defineProps<PropsType>();
</script>

<template>
  <NSpin :delay="200">
    <template #description>
      <slot name="description">正在获取数据，请稍后...</slot>
    </template>
    <Scroll class="scroll" dynamic @bottom-reached="bottomReached">
      <slot></slot>
    </Scroll>
  </NSpin>
</template>

<style lang="less" scoped>
.n-spin-container {
  height: 100px;
  flex-grow: 1;
  :deep(.n-spin-content) {
    height: 100%;
    .scroll {
      height: 100%;
    }
  }
}
</style>
