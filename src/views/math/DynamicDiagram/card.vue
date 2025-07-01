<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NCard, NAlert } from "naive-ui";

interface Props {
  vertical?: boolean;
  canvas?: _Canvas;
  alert?: string;
  alertContent?: string;
  hasNoAlertContent?: boolean;
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
  <NCard :class="[hasNoAlertContent && 'no-alert-content']">
    <NAlert v-if="alert" :title="alert" type="info" :bordered="false" closable>
      <template v-if="alertContent">{{ alertContent }}</template>
      <slot name="alert-content" />
    </NAlert>
    <div :class="['content', vertical ? 'vertical' : '']"><slot /></div>
  </NCard>
</template>

<style scoped lang="less">
.n-card {
  :deep(.n-card__content) {
    height: 100%;
    display: flex;
    flex-direction: column;
    .content {
      width: 100%;
      height: 100px;
      flex: 1;
      display: flex;
      > canvas {
        width: 100px;
        height: 100%;
        flex: 1;
      }
    }
    .content.vertical {
      flex-direction: column;
      > canvas {
        width: 100%;
        height: 100px;
        flex: 1;
      }
    }
  }
}
.no-alert-content {
  .n-alert {
    :deep(.n-alert-body__content) {
      margin-top: 0;
    }
  }
}
</style>
