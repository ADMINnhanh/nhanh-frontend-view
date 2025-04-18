<script setup lang="ts">
import { NLayout, NLayoutSider, NDrawer, NDrawerContent, NA } from "naive-ui";
import Media from "@/stores/media";
import Menu from "./menu.vue";
import { showMenu, collapsed } from ".";

const recordNumber = import.meta.env.VITE_SHOW_RECORD_NUMBER;
</script>

<template>
  <div v-if="Media.isMobileStyle" class="mobile-layout">
    <router-view></router-view>
    <NDrawer
      v-model:show="showMenu"
      to=".mobile-layout"
      placement="left"
      :auto-focus="false"
    >
      <NDrawerContent>
        <Menu @updateActiveKey="showMenu = false" />
      </NDrawerContent>
    </NDrawer>
  </div>
  <n-layout v-else has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <Menu />
    </n-layout-sider>
    <n-layout class="router-view">
      <div><router-view></router-view></div>
      <NA v-if="recordNumber" href="http://beian.miit.gov.cn/" target="_blank">
        {{ recordNumber }}
      </NA>
    </n-layout>
  </n-layout>
</template>

<style scoped lang="less">
.n-layout {
  height: 100px;
  flex-grow: 1;
  background-color: var(--main-content-box-background-color);

  .n-layout.router-view {
    height: 100%;
    :deep(.n-layout-scroll-container) {
      width: 100%;
      height: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      > div {
        width: 100%;
        height: 100px;
        flex-grow: 1;
        background-color: var(--background-color);
        border: var(--button-border-radius);
      }
      > a {
        margin-top: 10px;
        display: flex;
        justify-content: center;
      }
    }
  }
}
.mobile-layout {
  height: 100px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: var(--main-content-box-background-color);
  position: relative;
}
</style>
