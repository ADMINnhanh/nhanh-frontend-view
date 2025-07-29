<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
import { NTabPane, NTabs } from "naive-ui";
import { defineAsyncComponent } from "vue";

const demos = [
  { name: "迷你城市", path: "MiniCity" },
  { name: "人口分布", path: "Population" },
  { name: "离屏渲染", path: "Offscreen" },
  { name: "追逐", path: "Chase" },
].map((v) => ({
  ...v,
  component: defineAsyncComponent(
    () => import(new URL(`./demo/${v.path}/index.vue`, import.meta.url).href)
  ),
}));

const threejs = useLocalStorage("three.js-demo", "迷你城市");
</script>

<template>
  <NTabs v-model:value="threejs">
    <NTabPane v-for="item in demos" :name="item.name">
      <component :is="item.component" />
    </NTabPane>
  </NTabs>
</template>

<style lang="less" scoped>
.n-tabs {
  padding: 10px 20px;
  height: 100%;
  :deep(.n-tab-pane) {
    flex-grow: 1;
    height: 100px;
    margin-top: 10px;
    position: relative;
    canvas {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
