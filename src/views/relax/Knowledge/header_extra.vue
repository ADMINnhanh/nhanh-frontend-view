<script setup lang="ts">
import { NA, NButton, NIcon } from "naive-ui";
import { Add } from "@vicons/ionicons5";

interface Props {
  href: string;
  notClick?: boolean;
}
const props = defineProps<Props>();
interface Emit {
  (e: "click"): void;
}
const emit = defineEmits<Emit>();
</script>

<template>
  <NButton
    v-if="!notClick"
    @click="emit('click')"
    text
    type="info"
    style="margin-right: 10px"
  >
    <template #icon>
      <NIcon><Add /></NIcon>
    </template>
    再来一个
  </NButton>
  <NA :href="href" target="_blank"> Api 作者 </NA>
</template>

<style scoped lang="less"></style>
