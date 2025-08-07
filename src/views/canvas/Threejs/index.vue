<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
import { NTabPane, NTabs } from "naive-ui";
import { computed, defineAsyncComponent, ref } from "vue";
import Progress from "./Progress.vue";

const demos = [
  { name: "迷你城市", path: "MiniCity", defaultPercentage: false },
  { name: "人口分布", path: "Population", defaultPercentage: 0 },
  { name: "离屏渲染", path: "Offscreen" },
  { name: "动画", path: "Animation", defaultPercentage: 0 },
].map((v) => ({
  ...v,
  component: defineAsyncComponent(() => import(`./demo/${v.path}/index.vue`)),
}));

const threejs = useLocalStorage("three.js-demo", "迷你城市");

const componentRef = ref();
let deomConfig = demos.find((v) => v.name === threejs.value)!;
const percentage = computed(() => {
  const component = componentRef.value;
  return component?.percentage || deomConfig.defaultPercentage;
});
const updateRef = (el: any, config: (typeof demos)[number]) => {
  componentRef.value = el;
  deomConfig = config;
};
</script>

<template>
  <NTabs v-model:value="threejs">
    <NTabPane v-for="item in demos" :name="item.name">
      <Progress :percentage="percentage">
        <component :ref="(el:any)=> updateRef(el,item)" :is="item.component" />
      </Progress>
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
    > *:first-child {
      width: 100%;
      height: 100%;
    }
    canvas {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
