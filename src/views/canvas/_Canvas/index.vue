<script setup lang="ts">
import { NAnchor, NAnchorLink, NScrollbar, NSkeleton, NSpace } from "naive-ui";
import MyCard from "./card.vue";
import { markRaw, onUnmounted, ref } from "vue";
import Media from "@/stores/media";

const anchorPrefix = location.hash.replace(/(#[^/]+)*$/, "#");

const demoName: [string, string][] = [
  ["china", "中国地图"],
  ["original", "仅需初始化 _Canvas"],
  ["center", "中心点"],
  ["shortcutKey", "快捷键"],
  ["axis", "坐标轴"],
  ["text", "文字"],
  ["point", "点"],
  ["line", "线"],
  ["polygon", "面"],
  ["custom", "自定义绘制"],
  ["layer", "图层 & 层级"],
  ["show", "显示条件"],
];

type DemoName = (typeof demoName)[number][0];
function splitArrayByIndex<T>(arr: readonly T[]) {
  const oddIndexArray = [];
  const evenIndexArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenIndexArray.push(arr[i]);
    } else {
      oddIndexArray.push(arr[i]);
    }
  }
  return [evenIndexArray, oddIndexArray];
}
const [evenIndexArray, oddIndexArray] = splitArrayByIndex(demoName);

const vueFiles = ref<{
  [name in DemoName]: { component: any; code: string };
}>({} as any);

(async function () {
  const codeModules = import.meta.glob("./demo/**/*.vue", {
    query: "?raw",
    import: "default",
  });
  const componentModules = import.meta.glob("./demo/**/*.vue");
  for (const path in codeModules) {
    const name = (path.split("/").pop() as string).replace(".vue", "");
    const code = (await codeModules[path]()) as string;
    const component = (await componentModules[path]()) as any;
    vueFiles.value[name as DemoName] = {
      component: markRaw(component.default),
      code,
    };
  }
})();

const doubleRow = ref(window.innerWidth >= 1280);
const resize = () => {
  doubleRow.value = window.innerWidth >= 1280;
};
window.addEventListener("resize", resize);
onUnmounted(() => {
  window.removeEventListener("resize", resize);
});
</script>

<template>
  <div
    id="/canvas/_Canvas"
    :class="['my-canvas-tools', Media.isMobileStyle && 'mobile']"
  >
    <NScrollbar>
      <div class="list-box">
        <template v-if="doubleRow">
          <NSpace vertical>
            <template v-for="item in evenIndexArray" :key="item[0]">
              <MyCard
                v-if="vueFiles[item[0]]"
                :id="item[0]"
                :title="item[1]"
                :code="vueFiles[item[0]].code"
              >
                <component :is="vueFiles[item[0]].component" />
              </MyCard>
              <NSkeleton v-else :id="item[0]" :sharp="false" />
            </template>
          </NSpace>
          <NSpace vertical>
            <template v-for="item in oddIndexArray" :key="item[0]">
              <MyCard
                v-if="vueFiles[item[0]]"
                :id="item[0]"
                :title="item[1]"
                :code="vueFiles[item[0]].code"
              >
                <component :is="vueFiles[item[0]].component" />
              </MyCard>
              <NSkeleton v-else :id="item[0]" :sharp="false" />
            </template>
          </NSpace>
        </template>
        <NSpace v-else style="width: 100%" vertical>
          <template v-for="item in demoName" :key="item[0]">
            <MyCard
              v-if="vueFiles[item[0]]"
              :id="item[0]"
              :title="item[1]"
              :code="vueFiles[item[0]].code"
            >
              <component :is="vueFiles[item[0]].component" />
            </MyCard>
            <NSkeleton v-else :id="item[0]" :sharp="false" />
          </template>
        </NSpace>
      </div>
    </NScrollbar>
    <NScrollbar v-if="!Media.isMobileStyle">
      <NAnchor
        type="block"
        :bound="100"
        ignore-gap
        offset-target=".my-canvas-tools"
      >
        <NAnchorLink
          v-for="item in demoName"
          :key="item[0]"
          :href="anchorPrefix + item[0]"
          :title="item[1]"
        />
      </NAnchor>
    </NScrollbar>
  </div>
</template>

<style scoped lang="less">
.my-canvas-tools.mobile {
  padding: 0;
  .list-box {
    padding-right: 0;
  }
  :deep(.n-scrollbar) {
    &:nth-child(1) {
      margin-right: 0;
    }
  }
}
.my-canvas-tools {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 14px;
  .list-box {
    display: flex;
    justify-content: space-between;
    padding-right: 14px;
    :deep(> div) {
      width: calc(50% - 7px);
    }
    .n-skeleton {
      width: 100%;
      height: 400px;
    }
  }
  :deep(.n-scrollbar) {
    &:nth-child(1) {
      margin-right: 30px;
    }
    &:nth-child(2) {
      width: 200px;
      flex-shrink: 0;
    }
  }
}
</style>
