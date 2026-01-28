<script setup lang="ts">
import ResponsiveDirectionLayout from "@/components/layout/ResponsiveDirectionLayout.vue";
import {
  NCarousel,
  NCarouselItem,
  NRadio,
  NSpace,
  NRadioGroup,
  NCard,
  NInputGroup,
  NInputNumber,
  NScrollbar,
  NSwitch,
  NText,
  NButton,
  NIcon,
} from "naive-ui";
import { computed, ref } from "vue";
import Core from "./core/index.vue";
import { LogoElectron } from "@vicons/ionicons5";

const urls = [
  new URL("@/assets/img/picsum/200x200.jpg", import.meta.url).href,
  new URL("@/assets/img/picsum/200x300.jpg", import.meta.url).href,
  new URL("@/assets/img/picsum/350x300.jpg", import.meta.url).href,
  new URL("@/assets/img/picsum/400x300.jpg", import.meta.url).href,
];

const currentIndex = ref(0);
const renderSizeCustom = ref(false);
const config = ref<Partial<ImageScatterConfig>>({
  renderSize: { width: 200, height: 300 },
  blockSize: { width: 50, height: 50 },
  blockSortType: "sortInSequence",
  blockStartPositionGenerator: "bottom",
  animation: {
    name: "bounce",
    duration: 0.5,
  },
  throw: {
    type: "auto",
    autoThrowInterval: 0.1,
  },
});
const coreConfig = computed<Partial<ImageScatterConfig>>(() => {
  const url = urls[currentIndex.value];
  const renderSize = renderSizeCustom.value ? config.value.renderSize : null;
  return {
    ...config.value,
    url,
    renderSize,
  };
});

const coreRef = ref<InstanceType<typeof Core>>();
</script>

<template>
  <ResponsiveDirectionLayout :default-size="0.35" :min="0">
    <template #left>
      <NScrollbar>
        <n-space vertical>
          <n-card title="图片 url" size="small" hoverable>
            <NCarousel
              v-model:current-index="currentIndex"
              :space-between="15"
              :loop="false"
              slides-per-view="auto"
              centered-slides
              draggable
              show-arrow
            >
              <NCarouselItem v-for="url in urls" :key="url" style="width: 40%">
                <img :src="url" />
              </NCarouselItem>
            </NCarousel>
          </n-card>
          <n-card title="渲染大小 renderSize" size="small" hoverable>
            <n-space vertical>
              <n-space align="center">
                <n-text depth="3">自定义</n-text>
                <n-switch v-model:value="renderSizeCustom" />
              </n-space>
              <n-input-group>
                <n-input-number v-model:value="config.renderSize!.width">
                  <template #prefix> width </template>
                  <template #suffix> px </template>
                </n-input-number>
                <n-input-number v-model:value="config.renderSize!.height">
                  <template #prefix> height </template>
                  <template #suffix> px </template>
                </n-input-number>
              </n-input-group>
            </n-space>
          </n-card>
          <n-card title="数据块大小 blockSize" size="small" hoverable>
            <n-input-group>
              <n-input-number v-model:value="config.blockSize!.width">
                <template #prefix> width </template>
                <template #suffix> px </template>
              </n-input-number>
              <n-input-number v-model:value="config.blockSize!.height">
                <template #prefix> height </template>
                <template #suffix> px </template>
              </n-input-number>
            </n-input-group>
          </n-card>
          <n-card title="排序方式 blockSortType" size="small" hoverable>
            <n-radio-group v-model:value="config.blockSortType">
              <n-space>
                <n-radio
                  v-for="item in ['sortInSequence', 'sortRandomly']"
                  :key="item"
                  :value="item"
                >
                  {{ item }}
                </n-radio>
              </n-space>
            </n-radio-group>
          </n-card>
          <n-card
            title="起始位置 blockStartPositionGenerator"
            size="small"
            hoverable
          >
            <n-radio-group v-model:value="config.blockStartPositionGenerator">
              <n-space>
                <n-radio
                  v-for="item in ['center', 'top', 'bottom', 'left', 'right']"
                  :key="item"
                  :value="item"
                >
                  {{ item }}
                </n-radio>
              </n-space>
            </n-radio-group>
          </n-card>
          <n-card title="动画 animation" size="small" hoverable>
            <n-space align="center">
              <n-radio-group v-model:value="config.animation!.name">
                <n-space>
                  <n-radio
                    v-for="item in [
                      'linear',
                      'ease',
                      'easeOut',
                      'easeIn',
                      'bounce',
                    ]"
                    :key="item"
                    :value="item"
                  >
                    {{ item }}
                  </n-radio>
                </n-space>
              </n-radio-group>
              <n-input-number
                v-model:value="config.animation!.duration"
                :step="0.1"
              >
                <template #prefix> duration </template>
                <template #suffix> s </template>
              </n-input-number>
            </n-space>
          </n-card>
          <n-card title="抛出 throw" size="small" hoverable>
            <n-space vertical>
              <n-space align="center">
                <n-radio-group v-model:value="config.throw!.type">
                  <n-space>
                    <n-radio
                      v-for="item in ['auto', 'manual']"
                      :key="item"
                      :value="item"
                    >
                      {{ item }}
                    </n-radio>
                  </n-space>
                </n-radio-group>
                <n-button
                  type="success"
                  secondary
                  size="small"
                  :disabled="config.throw?.type != 'manual'"
                  @click="coreRef?.imageScatterRecombine.throwBlock()"
                >
                  <template #icon>
                    <n-icon :component="LogoElectron" />
                  </template>
                  抛出
                </n-button>
              </n-space>
              <n-input-number
                v-model:value="config.throw!.autoThrowInterval"
                :step="0.1"
              >
                <template #prefix> autoThrowInterval </template>
                <template #suffix> s </template>
              </n-input-number>
            </n-space>
          </n-card>
        </n-space>
      </NScrollbar>
    </template>
    <template #right>
      <Core ref="coreRef" :config="coreConfig" />
    </template>
  </ResponsiveDirectionLayout>
</template>

<style scoped lang="less">
.n-carousel {
  height: 200px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
.n-input-number {
  :deep(input) {
    text-align: center;
  }
}
</style>
