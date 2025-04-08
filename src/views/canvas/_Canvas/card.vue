<script setup lang="ts">
import { CodeOutline, CopyOutline } from "@vicons/ionicons5";
import {
  NButton,
  NCard,
  NCode,
  NCollapseTransition,
  NIcon,
  NScrollbar,
  NSpace,
  NTooltip,
} from "naive-ui";
import { ref } from "vue";

interface Props {
  code: string;
}
const props = defineProps<Props>();

const showCode = ref(false);
</script>

<template>
  <NCard>
    <template #header-extra>
      <NSpace>
        <NTooltip trigger="hover">
          <template #trigger>
            <NButton text>
              <template #icon>
                <NIcon :component="CopyOutline" />
              </template>
            </NButton>
          </template>
          复制代码
        </NTooltip>
        <NTooltip trigger="hover">
          <template #trigger>
            <NButton @click="showCode = !showCode" text>
              <template #icon>
                <NIcon :component="CodeOutline" />
              </template>
            </NButton>
          </template>
          {{ showCode ? "收起代码" : "显示代码" }}
        </NTooltip>
      </NSpace>
    </template>
    <slot></slot>
    <template #footer>
      <NCollapseTransition :show="showCode">
        <NScrollbar>
          <NCode :code="code" language="javascript" show-line-numbers />
        </NScrollbar>
      </NCollapseTransition>
    </template>
  </NCard>
</template>

<style scoped lang="less"></style>
