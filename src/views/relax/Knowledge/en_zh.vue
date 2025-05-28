<script setup lang="ts">
import { NH6, NBlockquote, NText } from "naive-ui";
import type { TextList } from ".";

interface Props {
  list: TextList;
}
const props = defineProps<Props>();
</script>

<template>
  <template v-for="item in list" :key="item.id">
    <NH6 prefix="bar" align-text>{{ item.en }}</NH6>
    <NBlockquote v-if="item.zh">
      <NText depth="3">翻译: {{ item.zh }}</NText>
    </NBlockquote>
  </template>
</template>

<style scoped lang="less"></style>
