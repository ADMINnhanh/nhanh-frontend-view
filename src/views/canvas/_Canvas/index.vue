<script setup lang="ts">
import { NScrollbar, NSpace } from "naive-ui";
import MyCard from "./card.vue";
import { computed, markRaw, onUnmounted, ref } from "vue";

const demoName = [
  ["original", "仅需初始化 _Canvas"],
  ["center", "中心点"],
  ["shortcutKey", "快捷键"],
  ["axis", "坐标轴"],
] as const;
type DemoName = (typeof demoName)[number][0];

const vueFiles = ref<{
  [name in DemoName]: { component: any; code: string };
}>({} as any);

function splitArrayByIndex<T>(arr: T[]) {
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
const components = computed(() => {
  const components: { title: string; component: any; code: string }[] = [];
  demoName.forEach(([fileName, title]) => {
    const item = vueFiles.value[fileName];
    if (item)
      components.push({
        title,
        code: item.code,
        component: item.component,
      });
  });

  const [evenIndexArray, oddIndexArray] = splitArrayByIndex(components);
  return {
    all: components,
    even: evenIndexArray,
    odd: oddIndexArray,
  };
});

(async function () {
  const codeModules = import.meta.glob("./demo/*.vue", {
    query: "?raw",
    import: "default",
  });
  const componentModules = import.meta.glob("./demo/*.vue");
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
  <NScrollbar>
    <div class="box">
      <template v-if="doubleRow">
        <NSpace vertical>
          <MyCard
            v-for="item in components.even"
            :key="item.title"
            :title="item.title"
            :code="item.code"
          >
            <component :is="item.component" />
          </MyCard>
        </NSpace>
        <NSpace vertical>
          <MyCard
            v-for="item in components.odd"
            :key="item.title"
            :title="item.title"
            :code="item.code"
          >
            <component :is="item.component" />
          </MyCard>
        </NSpace>
      </template>
      <NSpace v-else style="width: 100%" vertical>
        <MyCard
          v-for="item in components.all"
          :key="item.title"
          :title="item.title"
          :code="item.code"
        >
          <component :is="item.component" />
        </MyCard>
      </NSpace>
    </div>
  </NScrollbar>
</template>

<style scoped lang="less">
.box {
  display: flex;
  justify-content: space-between;
  padding: 14px;
  :deep(> div) {
    width: calc(50% - 7px);
  }
}
</style>
