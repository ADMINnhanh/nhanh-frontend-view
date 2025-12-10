<script setup lang="ts">
import { useThemeVars } from "naive-ui";

interface Props {
  min?: boolean;
}
const props = defineProps<Props>();

const themeVars = useThemeVars();
</script>

<template>
  <div
    :class="['chapter-content', min && 'min']"
    :style="{ '--keyword-color': themeVars.primaryColor }"
  ></div>
</template>

<style scoped lang="less">
.min.chapter-content {
  line-height: 2;
  padding: 0 50px;
  :deep(.gap) {
    height: 10px;
  }
}
.chapter-content {
  line-height: 3;
  font-weight: bold;
  font-family: unset;
  /* 保留空白和换行，且内容会自动换行 */
  white-space: pre-wrap;
  tab-size: 4;
  padding: 0 100px;
  :deep(.gap) {
    height: 30px;
  }
  :deep(.keyword) {
    color: var(--keyword-color);
    font-weight: bold;
    text-decoration: underline;
  }
}
.is-mobile {
  .min.chapter-content {
    padding: 0 10px;
  }
  .chapter-content {
    padding: 0 30px;
  }
}
</style>
