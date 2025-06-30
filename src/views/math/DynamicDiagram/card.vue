<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NCard } from "naive-ui";

interface Props {
  vertical?: boolean;
  canvas?: _Canvas;
}
const props = defineProps<Props>();

watch(
  () => Settings.value.theme,
  (theme) => {
    props.canvas?.setTheme(theme);
  }
);
</script>

<template>
  <NCard :class="[vertical ? 'vertical' : '']">
    <slot />
  </NCard>
</template>

<style scoped lang="less">
.n-card.vertical {
  :deep(.n-card__content) {
    flex-direction: column;

    > canvas {
      width: 100%;
      height: 100px;
      flex: 1;
    }
  }
}

.n-card {
  :deep(.n-card__content) {
    height: 100%;
    display: flex;

    > canvas {
      width: 100px;
      height: 100%;
      flex: 1;
    }
  }
}
</style>
