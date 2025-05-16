<script setup lang="ts">
import { LockClosedOutline } from "@vicons/ionicons5";
import { NButton, NCard, NIcon } from "naive-ui";
import List from "./list.vue";
import { AddUniqueModal } from "@/components/popups/popups";
import { ruoyiUser } from "@/stores/user";
</script>

<template>
  <NCard title="访问会话列表">
    <template v-if="!ruoyiUser.token" #header-extra>
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
    <List v-if="ruoyiUser.token" />
  </NCard>
</template>

<style scoped lang="less">
.n-card {
  margin: 10px;
  width: auto;
}
</style>
