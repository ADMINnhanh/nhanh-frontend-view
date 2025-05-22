<script setup lang="ts">
import { NA } from "naive-ui";
import { RouterLink, type RouterLinkProps } from "vue-router";

interface Props {
  to: RouterLinkProps["to"];
}
const props = defineProps<Props>();
</script>

<template>
  <RouterLink :to="to" #="{ navigate, href }" custom>
    <NA :href="href" @click="navigate">
      <slot />
    </NA>
  </RouterLink>
</template>

<style scoped lang="less"></style>
