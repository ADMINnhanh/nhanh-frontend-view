<script setup lang="ts">
import { computed, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { NCard, NAlert, NButton, NSpace } from "naive-ui";
import Media from "@/stores/media";
import SvgGather from "@/assets/icon/gather";
import type { _Canvas } from "nhanh-pure-function";

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
  /** 提示动画 */
  tipsAnimation?: () => void;
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
    <div :class="['content', vertical ? 'vertical' : '']">
      <div class="float-button">
        <NSpace vertical>
          <NButton
            v-if="tipsAnimation"
            strong
            secondary
            circle
            type="success"
            @click="tipsAnimation"
          >
            <template #icon>
              <SvgGather icon="Bulb" />
            </template>
          </NButton>
        </NSpace>
      </div>

      <slot />
    </div>
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
      position: relative;
      .float-button {
        position: absolute;
        top: 0;
        left: 0;
      }
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
