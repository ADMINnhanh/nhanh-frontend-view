<script setup lang="ts">
import { NCard, NA, NBlockquote, NText } from "naive-ui";
import type { ProvinceInfo } from ".";
import { computed, ref } from "vue";
import Media from "@/stores/media";

interface Props {
  info: ProvinceInfo;
}
const props = defineProps<Props>();

const cardRef = ref();
const cardStyle = computed(() => {
  const rect = (cardRef.value?.$el as HTMLElement)?.getBoundingClientRect();
  let { x: left, y: top } = props.info;

  if (rect && left && top) {
    left -= rect.width / 2;
    top -= rect.height + 20;
  }

  return { left: (left || 0) + "px", top: (top || 0) + "px" };
});
</script>

<template>
  <NCard ref="cardRef" :title="info.name" size="small" :style="cardStyle">
    <template v-if="!Media.isMobileStyle" #header-extra>
      <NA :href="info.website" target="_blank"> 前往政府网站了解更多 </NA>
    </template>
    <NA v-if="Media.isMobileStyle" :href="info.website" target="_blank">
      前往政府网站了解更多
    </NA>
    <NBlockquote>
      <NText depth="3">{{ info.description }}</NText>
    </NBlockquote>
    <div class="n-popover-arrow"></div>
  </NCard>
</template>

<style scoped lang="less">
.n-card {
  width: 50%;
  max-width: 450px;
  position: absolute;
  box-shadow: var(--n-box-shadow);

  .n-popover-arrow {
    --n-arrow-height: 6px;
    bottom: calc(var(--n-arrow-height) * 1.414 / -2);
    left: calc(50% - var(--n-arrow-height) * 1.414 / 2);
    transition: background-color 0.3s var(--n-bezier);
    position: absolute;
    display: block;
    width: calc(var(--n-arrow-height) * 1.414);
    height: calc(var(--n-arrow-height) * 1.414);
    transform: rotate(45deg);
    background-color: var(--n-color);
    pointer-events: all;
  }
}
.mobile .n-card {
  width: 75%;
}
</style>
