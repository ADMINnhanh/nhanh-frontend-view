<script setup lang="ts">
import { watch } from "vue";
import ImageScatterRecombine from ".";
import { _Utility_GenerateUUID } from "nhanh-pure-function";

interface Props {
  url: string;
}

const props = defineProps<Props>();

const id = _Utility_GenerateUUID();
const imageScatterRecombine = new ImageScatterRecombine();

watch(
  () => props.url,
  (url) => {
    requestAnimationFrame(() => {
      imageScatterRecombine.start({ id, url });
    });
  },
  { immediate: true }
);
</script>

<template>
  <canvas :id="id" />
</template>

<style scoped lang="less">
canvas {
  width: 100%;
  height: 100%;
}
</style>
