<script setup lang="ts">
import {
  CodeOutline,
  Contract,
  CopyOutline,
  Expand,
  LogoGithub,
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
import {
  _CopyToClipboard,
  _Fullscreen,
  _IsFullscreen,
  _Tip,
} from "nhanh-pure-function";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import type _Canvas from "./_Canvas";
import { Settings } from "@/components/popups/components/Settings";

interface Props {
  path: string;
  code: string;
  component: Comment;
}
const props = defineProps<Props>();

/** 是否显示代码 */
const showCode = ref(false);

const cardRef = ref();
const componentRef = ref<{ myCanvas: _Canvas }>();
watch(
  () => Settings.value.theme,
  (theme) => componentRef.value?.myCanvas.setTheme(theme)
);

/** 当前状态是否是全屏 */
const isFullScreen = ref(false);
const toggleFullScreen = ref();

/** 全屏切换监测 */
const resizeObserver = new ResizeObserver(() => {
  isFullScreen.value = _IsFullscreen(cardRef.value?.$el);
});

onMounted(() => {
  toggleFullScreen.value = _Fullscreen(cardRef.value.$el);
  resizeObserver.observe(cardRef.value.$el);
});
onBeforeUnmount(() => {
  componentRef.value?.myCanvas.destroy();
  resizeObserver?.disconnect();
});
</script>

<template>
  <NCard ref="cardRef" hoverable>
    <template #header-extra>
      <NSpace>
        <NTooltip trigger="hover">
          <template #trigger>
            <NButton @click="componentRef?.myCanvas.returnToOrigin()" text>
              <template #icon>
                <NIcon :component="Refresh" />
              </template>
            </NButton>
          </template>
          复位视图
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
              tag="a"
              :href="
                'https://github.com/ADMINnhanh/nhanh-frontend-view/tree/main/src/views/canvas/_Canvas/demo/' +
                path
              "
              target="_blank"
              text
            >
              <template #icon>
                <NIcon :component="LogoGithub" />
              </template>
            </NButton>
          </template>
          在 GitHub 查看源码
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
      height: var(--height, 300px);
      flex-grow: 1;
    }
  }
}
</style>
