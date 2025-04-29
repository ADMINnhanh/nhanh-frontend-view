<script setup lang="ts">
import {
  CodeOutline,
  Contract,
  CopyOutline,
  Expand,
  Refresh,
} from "@vicons/ionicons5";
import {
  NButton,
  NCard,
  NCode,
  NCollapseTransition,
  NIcon,
  NScrollbar,
  NSpace,
  NTooltip,
} from "naive-ui";
import { _CopyToClipboard, _Fullscreen, _Tip } from "nhanh-pure-function";
import { onMounted, ref } from "vue";
import type _Canvas from "./_Canvas";

interface Props {
  code: string;
  component: Comment;
}
const props = defineProps<Props>();

/** 是否显示代码 */
const showCode = ref(false);

// 创建一个 ref 对象，用于存储组件的引用
const componentRef = ref<{
  myCanvas: _Canvas;
}>();

/** 当前状态是否是全屏 */
const isFullScreen = ref(false);
const toggleFullScreen = ref();
const cardRef = ref();
onMounted(() => {
  toggleFullScreen.value = (function (toggle) {
    return () => {
      isFullScreen.value = !isFullScreen.value;
      toggle();
    };
  })(_Fullscreen(cardRef.value.$el));
});
</script>

<template>
  <NCard ref="cardRef">
    <template #header-extra>
      <NSpace>
        <NTooltip trigger="hover">
          <template #trigger>
            <NButton @click="componentRef?.myCanvas.reset()" text>
              <template #icon>
                <NIcon :component="Refresh" />
              </template>
            </NButton>
          </template>
          复位
        </NTooltip>
        <NTooltip trigger="hover">
          <template #trigger>
            <NButton @click="toggleFullScreen" text>
              <template #icon>
                <NIcon :component="isFullScreen ? Contract : Expand" />
              </template>
            </NButton>
          </template>
          {{ isFullScreen ? "退出全屏" : "全屏" }}
        </NTooltip>
        <NTooltip trigger="hover">
          <template #trigger>
            <NButton
              @click="
                _Tip
                  .success('复制成功')
                  .error('复制失败')
                  .run(_CopyToClipboard(code))
              "
              text
            >
              <template #icon>
                <NIcon :component="CopyOutline" />
              </template>
            </NButton>
          </template>
          复制代码
        </NTooltip>
        <NTooltip trigger="hover">
          <template #trigger>
            <NButton @click="showCode = !showCode" text>
              <template #icon>
                <NIcon :component="CodeOutline" />
              </template>
            </NButton>
          </template>
          {{ showCode ? "收起代码" : "显示代码" }}
        </NTooltip>
      </NSpace>
    </template>
    <component :is="component" ref="componentRef" />
    <NCollapseTransition :show="showCode">
      <NScrollbar x-scrollable style="max-height: 50vh; margin-top: 10px">
        <NCode :code="code" language="javascript" show-line-numbers />
      </NScrollbar>
    </NCollapseTransition>
  </NCard>
</template>

<style scoped lang="less">
.n-card {
  :deep(.n-card__content) {
    display: flex;
    flex-direction: column;
    .my-canvas {
      width: 100%;
      height: var(--height, 270px);
      flex-grow: 1;
    }
  }
}
</style>
