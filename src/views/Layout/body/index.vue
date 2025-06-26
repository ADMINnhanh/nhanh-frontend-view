<script setup lang="ts">
import {
  NLayout,
  NLayoutSider,
  NDrawer,
  NDrawerContent,
  NButton,
  NIcon,
  NTabs,
  NTabPane,
} from "naive-ui";
import Media from "@/stores/media";
import Menu from "./menu.vue";
import { showMenu, collapsed } from ".";
import { Close, CopyOutline } from "@vicons/ionicons5";
import { _CopyToClipboard } from "nhanh-pure-function";
import { computed, ref, watch } from "vue";
import router from "@/router";
import { Settings } from "@/components/popups/components/Settings";

const recordNumber = import.meta.env.VITE_SHOW_RECORD_NUMBER;

let oldTab: string[] = [];
const tab = ref();

const panels = ref([
  {
    key: "home",
    name: {
      zhCN: "首页",
      enUS: "Home",
    },
    closable: false,
  },
]);
function ClosePanel(key: string) {
  panels.value = panels.value.filter((item) => item.key != key);
  oldTab = oldTab.filter((item) => item != key);
  if (key == tab.value)
    router.push({ name: oldTab.pop() || panels.value[0].key });
}
function CloseOtherPanel() {
  oldTab = [tab.value];
  panels.value = panels.value.filter(
    (item) => !item.closable || item.key == tab.value
  );
}
watch(
  () => router.currentRoute.value,
  (currentRoute) => {
    if (panels.value.some((item) => item.key == tab.value))
      oldTab.push(tab.value);

    tab.value = currentRoute.name;

    if (panels.value.every((item) => item.key != currentRoute.name)) {
      panels.value.push({
        key: currentRoute.name,
        name: currentRoute.meta.name,
        closable: true,
      } as any);
    }
  },
  { immediate: true }
);

const isCloud = import.meta.env.VITE_SHOW_RECORD_NUMBER;
const baseStyle = computed(() => {
  const headerHeight = 61;
  const tabHeight = Media.value.isMobileStyle ? 0 : 39;
  const routerViewMargin = isCloud && !Media.value.isMobileStyle ? 10 : 20;
  const recordNumber = isCloud ? 40 : 0;

  const height =
    "calc(100vh " +
    [headerHeight, tabHeight, routerViewMargin, recordNumber]
      .map((v) => `- ${v}px`)
      .join(" ") +
    ")";

  return { "--router-view-height": height };
});

if (import.meta.env.DEV) {
  panels.value = panels.value.filter((item) => !!item.key);
}
</script>

<template>
  <div v-if="Media.isMobileStyle" class="mobile-layout" :style="baseStyle">
    <div class="router-view">
      <router-view v-slot="{ Component }">
        <KeepAlive :max="5">
          <component :is="Component" />
        </KeepAlive>
      </router-view>
    </div>
    <div v-if="recordNumber" class="record-number">
      <NButton
        @click="_CopyToClipboard(recordNumber)"
        tag="a"
        text
        type="primary"
        href="http://beian.miit.gov.cn/"
        target="_blank"
      >
        <template #icon>
          <NIcon :component="CopyOutline" />
        </template>
        {{ recordNumber }}
      </NButton>
    </div>
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
  <n-layout
    v-else
    has-sider
    :class="[recordNumber && 'cloud']"
    :style="baseStyle"
  >
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
      <NTabs
        :value="tab"
        @update:value="(key) => router.push({ name: key })"
        @close="ClosePanel"
        type="card"
        size="small"
      >
        <NTabPane
          v-for="item in panels"
          :key="item.key"
          :name="item.key"
          :tab="item.name?.[Settings.language]"
          :closable="item.closable"
        />
        <template #suffix>
          <NButton
            :disabled="panels.length == 1"
            size="small"
            quaternary
            @click="CloseOtherPanel"
          >
            <template #icon>
              <NIcon :component="Close" />
            </template>
          </NButton>
        </template>
      </NTabs>
      <div class="router-view-box">
        <router-view v-slot="{ Component }">
          <KeepAlive :max="10" :include="panels.map((item) => item.key)">
            <component :is="Component" :key="tab" />
          </KeepAlive>
        </router-view>
      </div>
      <div v-if="recordNumber" class="record-number">
        <NButton
          @click="_CopyToClipboard(recordNumber)"
          tag="a"
          text
          type="primary"
          href="http://beian.miit.gov.cn/"
          target="_blank"
          size="small"
        >
          <template #icon>
            <NIcon :component="CopyOutline" />
          </template>
          {{ recordNumber }}
        </NButton>
      </div>
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
      display: flex;
      flex-direction: column;
      .n-tabs {
        background-color: var(--background-color);
        .n-tab-pane {
          padding: 0;
        }
      }
      .router-view-box {
        width: calc(100% - 20px);
        height: 100px;
        flex-grow: 1;
        margin: 10px;
        background-color: var(--background-color);
        border: var(--button-border-radius);
      }
    }
  }
}
.cloud.n-layout {
  .router-view-box {
    margin: 10px 10px 0 !important;
  }
  .record-number {
    margin-top: 0;
    height: 40px;
  }
}
.mobile-layout {
  height: 100px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  background-color: var(--main-content-box-background-color);
  position: relative;
  .router-view {
    width: 100%;
    height: 100px;
    flex-grow: 1;
    background-color: var(--background-color);
    border: var(--button-border-radius);
  }
}
.record-number {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
