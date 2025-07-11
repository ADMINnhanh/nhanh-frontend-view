<script setup lang="ts">
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { computed, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NCard, NAlert } from "naive-ui";
import Media from "@/stores/media";

interface Props {
  /** 是否垂直 */
  vertical?: boolean;
  /** 画布实例 */
  canvas?: _Canvas;
  /** 提示信息 */
  alert?: string;
  /** 提示内容 */
  alertContent?: string;
  /** 无提示内容 */
  hasNoAlertContent?: boolean;
}
const props = defineProps<Props>();

const vertical = computed(() => props.vertical || Media.value.isMobileStyle);

watch(
  () => Settings.value.theme,
  (theme) => {
    props.canvas?.setTheme(theme);
  }
);
</script>

<template>
  <NCard
    :size="Media.isMobileStyle ? 'small' : 'medium'"
    :class="[hasNoAlertContent && 'no-alert-content']"
  >
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
    .n-alert {
      margin-bottom: 5px;
      .math {
        max-height: 30vh;
      }
    }
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
