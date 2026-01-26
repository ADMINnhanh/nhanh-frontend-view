<script setup lang="ts">
import ResponsiveDirectionLayout from "@/components/layout/ResponsiveDirectionLayout.vue";
import {
  NCarousel,
  NCarouselItem,
  NRadio,
  NSpace,
  NRadioGroup,
} from "naive-ui";
import { ref } from "vue";
import { ANIMATION_TYPES, type ImageScatterAnimationType } from ".";
import Core from "./core/index.vue";

const urls = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/400/300",
  "https://picsum.photos/200/200",
  "https://picsum.photos/350/300",
];

const currentIndex = ref(0);
const animation = ref<ImageScatterAnimationType>("像素块依次飞入");
</script>

<template>
  <ResponsiveDirectionLayout :default-size="0.35" :min="0">
    <template #left>
      <NRadioGroup v-model:value="animation" name="radiogroup">
        <NSpace>
          <NRadio v-for="type in ANIMATION_TYPES" :key="type" :value="type">
            {{ type }}
          </NRadio>
        </NSpace>
      </NRadioGroup>
      <NCarousel
        v-model:current-index="currentIndex"
        :space-between="30"
        :loop="false"
        slides-per-view="auto"
        centered-slides
        draggable
      >
        <NCarouselItem v-for="url in urls" :key="url" style="width: 40%">
          <img :src="url" />
        </NCarouselItem>
      </NCarousel>
    </template>
    <template #right>
      <Core :animation="animation" :url="urls[currentIndex]" />
    </template>
  </ResponsiveDirectionLayout>
</template>

<style scoped lang="less">
.n-carousel {
  height: 240px;
  margin-top: 30px;
  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
}
</style>
