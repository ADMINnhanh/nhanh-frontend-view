<script setup lang="ts">
import { NCard, NRadio, NRadioGroup, NScrollbar, NSpace } from "naive-ui";
import { computed, defineAsyncComponent, onMounted, ref } from "vue";
import { dynamicDiagram, dynamicDiagramCollection } from ".";
import DynamicDiagramItem from "./components/DynamicDiagramItem.vue";
import router from "@/router";
import { useLocalStorage } from "@vueuse/core";

interface Props {
  target?: string;
}
const props = defineProps<Props>();

if (props.target) dynamicDiagram.value = props.target;

const Modules = import.meta.glob(`./demo/**/index.vue`);
function GetComponent(title: string, collection = dynamicDiagramCollection) {
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    if (element.title === title) {
      return Modules[`./demo/${element.component!}/index.vue`];
    }
    if (element.children) {
      const component = GetComponent(title, element.children) as any;
      if (component) {
        return component;
      }
    }
  }
}

const dynamicDiagramComponent = computed(() => {
  if (!router.currentRoute.value.path.includes("DynamicDiagram")) return;

  router.replace({ params: { target: dynamicDiagram.value } });

  return defineAsyncComponent(GetComponent(dynamicDiagram.value));
});

/** 过渡动画 */
const transitionAnimations = [
  {
    value: "fade",
    label: "透明",
  },
  {
    value: "bounce",
    label: "弹跳",
  },
  {
    value: "flip",
    label: "3D翻转",
  },
  {
    value: "slide-fade",
    label: "滑动淡入",
  },
  {
    value: "scale-rotate",
    label: "缩放旋转",
  },
];
const activeTransition = useLocalStorage(
  "math-dynamic-diagram-transition",
  "scale-rotate"
);
</script>

<template>
  <div ref="dynamicDiagramContainer" class="dynamic-diagram-container">
    <NScrollbar>
      <NCard title="过渡动画" size="small" class="transition-animation">
        <NRadioGroup v-model:value="activeTransition">
          <NSpace>
            <NRadio
              v-for="item in transitionAnimations"
              :key="item.value"
              :="item"
            ></NRadio>
          </NSpace>
        </NRadioGroup>
      </NCard>
      <DynamicDiagramItem />
    </NScrollbar>
    <Transition :name="activeTransition" mode="out-in">
      <component :is="dynamicDiagramComponent" />
    </Transition>
  </div>
</template>

<style scoped lang="less">
.is-mobile .dynamic-diagram-container {
  padding: 0;
  flex-direction: column;
  .transition-animation {
    display: none;
  }
  :deep(> .n-scrollbar) {
    width: 100%;
    max-height: 20vh;
    .n-space {
      padding: 10px;
    }
  }
  :deep(> .n-card) {
    width: 100%;
    height: 100px;
    flex-grow: 1;
    margin-left: 0;
  }
}
.dynamic-diagram-container {
  display: flex;
  height: 100%;
  padding: 20px;
  overflow: hidden;
  :deep(> .n-scrollbar) {
    width: 500px;
    height: auto;
  }
  :deep(> .n-card) {
    width: 100px;
    height: 100%;
    flex-grow: 1;
    margin-left: 10px;
  }
}
</style>
