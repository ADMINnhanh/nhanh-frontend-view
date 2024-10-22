<script setup lang="ts">
import {
  Settings,
  setOptions,
  themeOptions,
} from "@/components/popups/components/Settings/index";
import { addUniqueModal } from "@/components/popups/popups";
import router from "@/router";
import Routes from "@/router/Routes";
import { SettingsOutline } from "@vicons/ionicons5";
import {
  NButton,
  NSpace,
  NMenu,
  type MenuOption,
  NIcon,
  NLayout,
  NLayoutSider,
} from "naive-ui";
import { computed, h, ref, type Component } from "vue";

const themeText = computed(
  () =>
    themeOptions.value.find((item) => item.value !== Settings.value.theme)
      ?.label
);

/** 切换语言 */
function changeLanguage() {
  if (Settings.value.language == "zhCN") {
    Settings.value.language = "enUS";
  } else {
    Settings.value.language = "zhCN";
  }
  setOptions();
}
/** 切换主题 */
function changeTheme() {
  if (Settings.value.theme == "light") {
    Settings.value.theme = "dark";
  } else {
    Settings.value.theme = "light";
  }
  setOptions();
}
/** 打开设置 */
function openSettings() {
  addUniqueModal({
    componentName: "Settings",
  });
}

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions = computed<MenuOption[]>(() => {
  const language = Settings.value.language;
  /** 生成菜单 */
  function generateMenu(item: typeof Routes) {
    return item.map((item) => {
      const i: MenuOption = {
        label: item.meta.name[language],
        key: item.name as string,
      };
      if (item.meta.icon) i.icon = renderIcon(item.meta.icon);
      if (item.children) i.children = generateMenu(item.children);

      return i;
    });
  }
  return generateMenu(Routes);
});
const activeKey = computed({
  get() {
    return (router.currentRoute.value.name || "") as string;
  },
  set(key: string) {
    router.push({ name: key });
  },
});
const collapsed = ref(false);
</script>

<template>
  <div class="home">
    <header>
      <div class="name">
        <img src="/nhanh.ico" alt="" />
        你好啊你好
      </div>
      <NSpace>
        <NButton quaternary @click="changeLanguage">{{
          Settings.language == "zhCN" ? "English" : "中文"
        }}</NButton>
        <NButton quaternary @click="changeTheme">{{ themeText }}</NButton>
        <NButton quaternary @click="openSettings"
          ><NIcon size="20" :component="SettingsOutline"
        /></NButton>
      </NSpace>
    </header>
    <n-layout has-sider>
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
        <n-menu
          v-model:value="activeKey"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout class="router-view">
        <router-view></router-view>
      </n-layout>
    </n-layout>
  </div>
</template>

<style scoped lang="less">
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--background-color);
    > * {
      flex-shrink: 0;
    }
    .name {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: var(--text-color);
      img {
        width: 40px;
        height: 40px;
        margin-right: 12px;
      }
    }
    :deep(.n-menu) {
      width: 100px;
      flex-grow: 1;
      margin: 0 50px;
    }
  }
  .n-layout {
    height: 100px;
    flex-grow: 1;
    .n-layout.router-view {
      height: 100%;
      :deep(.n-layout-scroll-container) {
        width: 100%;
        height: 100%;
        padding: 10px;
        display: flex;
      }
    }
  }
}
</style>
