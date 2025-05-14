<script setup lang="ts">
import service, { token } from "@/utils/axios";
import { LockClosedOutline } from "@vicons/ionicons5";
import { NButton, NCard, NIcon } from "naive-ui";
import { h, ref } from "vue";
import List from "./list.vue";
import { AddUniqueModal } from "@/components/popups/popups";
</script>

<template>
  <NCard title="访问会话列表">
    <template v-if="!token.ruoyi" #header-extra>
      <NButton
        @click="AddUniqueModal({ componentName: 'Login' })"
        quaternary
        type="warning"
        class="open-login-button"
      >
        <template #icon>
          <NIcon :component="LockClosedOutline" />
        </template>
        已锁定
      </NButton>
    </template>
    <List v-if="token.ruoyi" />
  </NCard>
</template>

<style scoped lang="less"></style>
