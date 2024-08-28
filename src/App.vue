<script setup lang="ts">
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NSpin,
} from "naive-ui";
import { NSpinValue } from "@/stores/globalLoading";
import UseGlobal from "@/views/UseGlobal.vue";
import { configProviderPropsRef } from "./utils/windows";
import { computed } from "vue";

const NSpinApi = computed(() => {
  return {
    show: NSpinValue.value.show,
    delay: 200,
    style: {
      height: "100%",
      "background-color": "var(--n-spin-background-color)",
    },
  };
});
</script>

<template>
  <!-- config 全局配置 -->
  <n-config-provider :="configProviderPropsRef">
    <!-- dialog 全局弹窗 -->
    <n-dialog-provider>
      <!-- message 全局消息提示 -->
      <n-message-provider>
        <!-- 在视图上加个全局 loading -->
        <n-spin :="NSpinApi">
          <template #description>
            <div v-html="NSpinValue.description"></div>
          </template>

          <!-- 视图 -->
          <router-view></router-view>

          <UseGlobal />
        </n-spin>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
