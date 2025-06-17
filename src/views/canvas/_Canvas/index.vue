<script setup lang="ts">
import { NAnchor, NAnchorLink, NScrollbar, NSkeleton, NSpace } from "naive-ui";
import MyCard from "./card.vue";
import { markRaw, onUnmounted, ref } from "vue";
import Media from "@/stores/media";

const anchorPrefix = location.hash.replace(/(#[^/]+)*$/, "#");

const independent: [string, string][] = [
  // ["China%2Findex.vue", "最佳实现 - 中国地图"],
];
const demoName: [string, string][] = [
  // ["original.vue", "仅需初始化 _Canvas"],
  // ["center.vue", "中心点"],
  // ["shortcutKey.vue", "快捷键"],
  // ["axis.vue", "坐标轴"],
  // ["text.vue", "文字"],
  // ["point.vue", "点"],
  // ["line.vue", "线"],
  // ["arc.vue", "圆弧"],
  ["polygon.vue", "面"],
  // ["custom.vue", "自定义绘制"],
  // ["layer.vue", "图层 & 层级"],
  // ["show.vue", "显示条件"],
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
    const name = path.replace("./demo/", "").replace(/\//g, "%2F");
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
  <div id="/canvas/_Canvas" class="my-canvas-tools">
    <NScrollbar>
      <div class="list-box">
        <template v-if="doubleRow">
          <NSpace class="independent-space" vertical>
            <template v-for="item in independent" :key="item[0]">
              <MyCard
                v-if="vueFiles[item[0]]"
                :id="item[0]"
                :path="item[0]"
                :title="item[1]"
                :code="vueFiles[item[0]].code"
                :component="vueFiles[item[0]].component"
              />
              <NSkeleton v-else :id="item[0]" :sharp="false" />
            </template>
          </NSpace>
          <NSpace vertical>
            <template v-for="item in evenIndexArray" :key="item[0]">
              <MyCard
                v-if="vueFiles[item[0]]"
                :id="item[0]"
                :path="item[0]"
                :title="item[1]"
                :code="vueFiles[item[0]].code"
                :component="vueFiles[item[0]].component"
              />
              <NSkeleton v-else :id="item[0]" :sharp="false" />
            </template>
          </NSpace>
          <NSpace vertical>
            <template v-for="item in oddIndexArray" :key="item[0]">
              <MyCard
                v-if="vueFiles[item[0]]"
                :id="item[0]"
                :path="item[0]"
                :title="item[1]"
                :code="vueFiles[item[0]].code"
                :component="vueFiles[item[0]].component"
              />
              <NSkeleton v-else :id="item[0]" :sharp="false" />
            </template>
          </NSpace>
        </template>
        <NSpace v-else style="width: 100%" vertical>
          <template v-for="item in independent.concat(demoName)" :key="item[0]">
            <MyCard
              v-if="vueFiles[item[0]]"
              :id="item[0]"
              :path="item[0]"
              :title="item[1]"
              :code="vueFiles[item[0]].code"
              :component="vueFiles[item[0]].component"
            />
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
          v-for="item in independent.concat(demoName)"
          :key="item[0]"
          :href="anchorPrefix + item[0]"
          :title="item[1]"
        />
      </NAnchor>
    </NScrollbar>
  </div>
</template>

<style scoped lang="less">
.is-mobile .my-canvas-tools {
  .list-box {
    padding-right: 0;
  }
  :deep(.n-scrollbar) {
    .n-scrollbar-content {
      padding: 0;
    }
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
  .list-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-right: 14px;
    .independent-space {
      width: 100%;
      margin-bottom: 8px;
    }
    :deep(> div) {
      width: calc(50% - 7px);
    }
    .n-skeleton {
      width: 100%;
      height: 400px;
    }
  }
  :deep(.n-scrollbar) {
    .n-scrollbar-content {
      padding: 14px;
    }
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
