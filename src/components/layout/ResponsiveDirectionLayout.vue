<script setup lang="ts">
import Media from "@/stores/media";
import { NSplit } from "naive-ui";
import { ref, shallowRef } from "vue";

interface Props {
  defaultSize?: number;
  min?: number;
  max?: number;
}
const props = withDefaults(defineProps<Props>(), {
  defaultSize: 0.25,
  min: 0.25,
  max: 0.75,
});

const size = ref(props.defaultSize);

const split = shallowRef();
requestAnimationFrame(() => {
  const triggerDom: HTMLElement = split.value.$el.querySelector(
    ".n-split__resize-trigger-wrapper"
  );

  if (triggerDom) {
    const { width, height } = split.value.$el.getBoundingClientRect();
    let oldClientX: number | undefined, oldClientY: number | undefined;
    triggerDom.addEventListener("touchmove", (event) => {
      const { clientX, clientY } = event.touches[0];

      if (Media.value.isMobileStyle) {
        if (oldClientY) size.value += (clientY - oldClientY) / height;
        oldClientY = clientY;
      } else {
        if (oldClientX) size.value += (clientX - oldClientX) / width;
        oldClientX = clientX;
      }

      size.value = Math.max(props.min, Math.min(props.max, size.value));
    });
    triggerDom.addEventListener("touchend", () => {
      oldClientX = oldClientY = undefined;
    });
  }
});
</script>

<template>
  <NSplit
    ref="split"
    :direction="Media.isMobileStyle ? 'vertical' : 'horizontal'"
    :resize-trigger-size="Media.isMobileStyle ? 6 : 4"
    :="{ max, min }"
    v-model:size="size"
  >
    <template #1>
      <slot name="left" />
    </template>
    <template #2>
      <slot name="right" />
    </template>
  </NSplit>
</template>

<style lang="less" scoped>
.n-split {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  :deep(.n-split__resize-trigger-wrapper) {
    margin: 5px;
  }
}
</style>
