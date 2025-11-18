<script setup lang="ts">
import {
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NSpin,
  NLoadingBarProvider,
} from "naive-ui";
import { NSpinValue } from "@/stores/globalLoading";
import UseGlobal from "@/views/UseGlobal.vue";
import { configProviderPropsRef } from "./utils/windows";
import { computed } from "vue";
import katex from "katex";
import "katex/dist/katex.css";

import { _Utility_WaitForCondition } from "nhanh-pure-function";

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

function UpdateVh() {
  const htmlDom = document.querySelector("html");
  htmlDom?.style.setProperty("--100vh", window.innerHeight + "px");
}
requestAnimationFrame(UpdateVh);
window.addEventListener("resize", UpdateVh);
</script>

<template>
  <!-- config 全局配置 -->
  <n-config-provider :="configProviderPropsRef" :katex="katex">
    <!-- dialog 全局弹窗 -->
    <n-dialog-provider>
      <!-- message 全局消息提示 -->
      <n-message-provider>
        <!-- Loading Bar 全局加载条 -->
        <n-loading-bar-provider>
          <!-- Spin 全局加载中 -->
          <n-spin :="NSpinApi">
            <template #description>
              <div v-html="NSpinValue.description"></div>
            </template>

            <!-- 视图 -->
            <router-view />

            <UseGlobal />
          </n-spin>
        </n-loading-bar-provider>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<style lang="less">
html {
  --100vh: 100vh;
}
#app {
  width: 100vw;
  height: var(--100vh);
  overflow: hidden;
}
</style>
