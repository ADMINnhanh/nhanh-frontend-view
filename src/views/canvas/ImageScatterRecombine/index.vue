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
import Core from "./core/index.vue";

const urls = [
  new URL("@/assets/img/picsum/200x200.jpg", import.meta.url).href,
  new URL("@/assets/img/picsum/200x300.jpg", import.meta.url).href,
  new URL("@/assets/img/picsum/350x300.jpg", import.meta.url).href,
  new URL("@/assets/img/picsum/400x300.jpg", import.meta.url).href,
];

const currentIndex = ref(0);
</script>

<template>
  <ResponsiveDirectionLayout :default-size="0.35" :min="0">
    <template #left>
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
      <Core :url="urls[currentIndex]" />
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
