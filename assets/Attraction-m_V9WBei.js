const n=`<script setup lang="ts">
import { NCard, NA, NDescriptions, NDescriptionsItem } from "naive-ui";
import type { AttractionsInfo } from "..";
import { computed, ref, watch } from "vue";
import Media from "@/stores/media";
import { _FormatNumberWithUnit } from "nhanh-pure-function";

interface Props {
  info: AttractionsInfo;
}
const props = defineProps<Props>();

const cardRef = ref();
const cardRect = ref<DOMRect>();
watch(
  () => props.info,
  () => {
    requestAnimationFrame(() => {
      cardRect.value = (
        cardRef.value?.$el as HTMLElement
      )?.getBoundingClientRect();
    });
  },
  { immediate: true }
);
const cardStyle = computed(() => {
  const rect = cardRect.value;
  let { x: left, y: top } = props.info;

  if (rect && left && top) {
    left -= rect.width / 2;
    top -= rect.height + 20;
  }

  return { left: (left || 0) + "px", top: (top || 0) + "px" };
});

/** 谷歌 */
const hrefGoogle = "https://www.google.com/search?q=";
/** 百度 */
const hrefBaidu = "https://www.baidu.com/s?wd=";
<\/script>

<template>
  <NCard ref="cardRef" :title="info.name" size="small" :style="cardStyle">
    <template v-if="!Media.isMobileStyle" #header-extra>
      <NA :href="hrefBaidu + info.name" target="_blank"> 百度一下 </NA>
      &nbsp;
      <NA :href="hrefGoogle + info.name" target="_blank"> 谷歌搜索 </NA>
    </template>
    <template v-if="Media.isMobileStyle">
      <NA :href="hrefBaidu + info.name" target="_blank"> 百度一下 </NA>
      &nbsp;
      <NA :href="hrefGoogle + info.name" target="_blank"> 谷歌搜索 </NA>
    </template>
    <NDescriptions bordered size="small" :column="2">
      <NDescriptionsItem label="坐标">{{ info.coordinates }}</NDescriptionsItem>
      <NDescriptionsItem label="访问量">
        {{ _FormatNumberWithUnit(info.visitors, { join: true }) }}人
      </NDescriptionsItem>

      <NDescriptionsItem label="积极评价">
        {{ _FormatNumberWithUnit(info.positiveReviews, { join: true }) }}人 ({{
          info.positiveRate
        }}%)
      </NDescriptionsItem>
      <NDescriptionsItem label="消极评价">
        {{ _FormatNumberWithUnit(info.negativeReviews, { join: true }) }}人 ({{
          info.negativeRate
        }}%)
      </NDescriptionsItem>
    </NDescriptions>
    <div class="n-popover-arrow"></div>
  </NCard>
</template>

<style scoped lang="less">
.n-card {
  width: 40%;
  max-width: 350px;
  position: absolute;
  box-shadow: var(--n-box-shadow);

  .n-blockquote {
    margin-bottom: 0;
  }

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
.is-mobile .n-card {
  width: 75%;
}
</style>
`;export{n as default};
