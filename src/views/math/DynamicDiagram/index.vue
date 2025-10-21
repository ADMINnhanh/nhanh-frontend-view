<script setup lang="ts">
import {
  NCard,
  NRadio,
  NRadioGroup,
  NResult,
  NScrollbar,
  NSpace,
} from "naive-ui";
import { computed, defineAsyncComponent, h } from "vue";
import { dynamicDiagram, GetComponent } from ".";
import DynamicDiagramItem from "./components/DynamicDiagramItem.vue";
import router from "@/router";
import { useLocalStorage } from "@vueuse/core";
import { _Utility_WaitForCondition } from "nhanh-pure-function";

interface Props {
  target?: string;
}
const props = defineProps<Props>();

if (props.target) dynamicDiagram.value = props.target;

const dynamicDiagramComponent = computed(() => {
  if (!router.currentRoute.value.path.includes("DynamicDiagram")) return;

  router.replace({ params: { target: dynamicDiagram.value } });
  const component = GetComponent(dynamicDiagram.value);

  const error = () =>
    h(NResult, {
      status: "500",
      title: "初始化失败了",
      description: "这是为什么啊？可恶！",
    });

  if (component) {
    const waitComponent = () =>
      _Utility_WaitForCondition(
        () => !!document.querySelector(".dynamic-diagram-container"),
        1000
      )
        .then(component)
        .catch(() => {
          window.$message.error("初始化失败");
          return error;
        });

    return defineAsyncComponent(waitComponent as any);
  }

  return error;
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
  "slide-fade"
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
  .n-result {
    width: 0;
    flex-grow: 1;
  }
}
</style>
