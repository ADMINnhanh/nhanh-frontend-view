<script setup lang="ts">
import { watch } from "vue";
import ImageScatterRecombine from ".";
import { _Utility_GenerateUUID } from "nhanh-pure-function";

interface Props {
  config: Partial<ImageScatterConfig>;
}

const props = defineProps<Props>();

const id = _Utility_GenerateUUID();
const imageScatterRecombine = new ImageScatterRecombine();

watch(
  () => props.config,
  (config) => {
    requestAnimationFrame(() => imageScatterRecombine.start({ id, ...config }));
  },
  { immediate: true, deep: true }
);

defineExpose({
  imageScatterRecombine,
});
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
