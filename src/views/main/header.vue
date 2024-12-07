<script setup lang="ts">
import SvgGather from "@/assets/icon/gather";
import {
  Settings,
  SetOptions,
  themeOptions,
} from "@/components/popups/components/Settings/index";
import { AddUniqueModal } from "@/components/popups/popups";
import {
  SettingsOutline,
  Contract,
  Expand,
  LogoGithub,
} from "@vicons/ionicons5";
import { NButton, NSpace, NIcon, NDropdown } from "naive-ui";
import { _IsFullscreen } from "nhanh-pure-function";
import { computed, onUnmounted, ref } from "vue";

const themeText = computed(
  () =>
    themeOptions.value.find((item) => item.value !== Settings.value.theme)
      ?.label
);

/** 切换语言 */
function ChangeLanguage() {
  if (Settings.value.language == "zhCN") {
    Settings.value.language = "enUS";
  } else {
    Settings.value.language = "zhCN";
  }
  SetOptions();
}
/** 切换主题 */
function ChangeTheme() {
  if (Settings.value.theme == "light") {
    Settings.value.theme = "dark";
  } else {
    Settings.value.theme = "light";
  }
  SetOptions();
}
/** 打开设置 */
function OpenSettings() {
  AddUniqueModal({
    componentName: "Settings",
  });
}

/** 当前状态是否是全屏 */
const isFullScreen = ref(false);
/** 全屏切换 */
function toggleFullScreen() {
  if (isFullScreen.value) document.exitFullscreen();
  else document.documentElement.requestFullscreen();
}
/** 全屏切换监测 */
function onFullScreen() {
  isFullScreen.value = !!_IsFullscreen();
}
onFullScreen();
window.addEventListener("resize", onFullScreen);
onUnmounted(() => window.removeEventListener("resize", onFullScreen));

/** 前往 GitHub */
function GotoGitHub() {
  window.open("https://github.com/ADMINnhanh/nhanh-frontend-view", "_blank");
}

/** 本项目使用到的 依赖 */
const options = [
  {
    label: "vue",
    key: "https://github.com/vuejs/core",
  },
  {
    label: "naive-ui",
    key: "https://github.com/TuSimple/naive-ui",
  },
  {
    label: "@vueuse/core",
    key: "https://github.com/antfu/vueuse",
  },
  {
    label: "gl-matrix",
    key: "https://github.com/toji/gl-matrix",
  },
  {
    label: "nhanh-pure-function",
    key: "https://github.com/ADMINnhanh/nhanh-pure-function",
  },
];
/** 前往依赖官网 */
function GoToTheOfficialWebsite(value: string) {
  window.open(value, "_blank");
}
</script>

<template>
  <header>
    <div class="name">
      <img src="/nhanh.ico" alt="" />
      你好啊你好
    </div>
    <NSpace>
      <NButton quaternary @click="toggleFullScreen">
        <template #icon>
          <NIcon :component="isFullScreen ? Contract : Expand" />
        </template>
      </NButton>
      <NButton quaternary @click="ChangeTheme">{{ themeText }}</NButton>
      <NButton quaternary @click="ChangeLanguage">{{
        Settings.language == "zhCN" ? "English" : "中文"
      }}</NButton>
      <NButton quaternary @click="GotoGitHub">
        <template #icon><NIcon :component="LogoGithub" /></template>
      </NButton>
      <NDropdown
        trigger="hover"
        :options="options"
        @select="GoToTheOfficialWebsite"
      >
        <div>
          <NButton quaternary>
            <template #icon
              ><NIcon :component="SvgGather('ColumnDependency')"
            /></template>
          </NButton>
        </div>
      </NDropdown>
      <NButton quaternary @click="OpenSettings">
        <template #icon><NIcon :component="SettingsOutline" /></template>
      </NButton>
    </NSpace>
  </header>
</template>

<style scoped lang="less">
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
</style>
