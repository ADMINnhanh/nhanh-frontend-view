<script setup lang="ts">
import { watch } from "vue";
import type { ImageScatterAnimationType } from "..";
import ImageScatterRecombine from ".";

interface Props {
  url: string;
  animation: ImageScatterAnimationType;
}

const props = defineProps<Props>();

const imageScatterRecombine = new ImageScatterRecombine();

watch(
  [() => props.url, () => props.animation],
  ([url, animation]) => {
    imageScatterRecombine.start({
      url,
      animation,
    });
  },
  { immediate: true }
);
</script>

<template>
  <canvas />
</template>

<style scoped lang="less">
canvas {
  width: 100%;
  height: 100%;
}
</style>
