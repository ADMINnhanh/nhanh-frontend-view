<script setup lang="ts">
import { _Utility_GenerateUUID } from "nhanh-pure-function";
import { ref, watch } from "vue";
import { NProgress } from "naive-ui";

interface Props {
  percentage?: number;
  once?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  percentage: 0,
  once: true,
});

const progressRef = ref();
const watchRes = watch(
  () => props.percentage,
  (percentage) => {
    progressRef.value.$el.style.opacity = percentage == 100 ? 0 : 1;
    if (percentage == 100 && props.once) watchRes();
  }
);
</script>

<template>
  <div>
    <slot />
    <NProgress
      ref="progressRef"
      type="line"
      status="success"
      :percentage="percentage"
      indicator-placement="inside"
      processing
    />
  </div>
</template>

<style lang="less" scoped>
div {
  position: relative;
  width: 100%;
  height: 100%;
}
.n-progress {
  pointer-events: none;
  position: absolute;
  inset: 0;
  margin: auto;
  opacity: 1;
  width: 300px;
  height: 20px;
  transition: opacity 0.5s ease-out;
}
</style>
