<script setup lang="ts">
import SvgGather from "@/assets/icon/gather";
import {
  Settings,
  SetOptions,
} from "@/components/popups/components/Settings/index";
import { AddUniqueModal } from "@/components/popups/popups";
import {
  SettingsOutline,
  Contract,
  Expand,
  LogoGithub,
  LanguageOutline,
  MoonOutline,
  SunnyOutline,
} from "@vicons/ionicons5";
import { NButton, NSpace, NIcon, NDropdown } from "naive-ui";
import { _IsFullscreen } from "nhanh-pure-function";
import { computed, onUnmounted, ref } from "vue";

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
  <NSpace>
    <NButton quaternary @click="toggleFullScreen">
      <template #icon>
        <NIcon :component="isFullScreen ? Contract : Expand" />
      </template>
    </NButton>
    <NButton quaternary @click="ChangeTheme">
      <template #icon>
        <NIcon
          :component="Settings.theme == 'light' ? SunnyOutline : MoonOutline"
        />
      </template>
    </NButton>
    <NButton quaternary @click="ChangeLanguage">
      <template #icon>
        <NIcon :component="LanguageOutline" />
      </template>
    </NButton>
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
          <template #icon>
            <SvgGather icon="ColumnDependency" />
          </template>
        </NButton>
      </div>
    </NDropdown>
    <NButton quaternary @click="OpenSettings">
      <template #icon><NIcon :component="SettingsOutline" /></template>
    </NButton>
  </NSpace>
</template>

<style scoped lang="less">
.n-space {
  :deep(.n-menu) {
    width: 100px;
    flex-grow: 1;
    margin: 0 50px;
  }
}
</style>
