<script setup lang="ts">
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
import { NButton, NSpace, NIcon } from "naive-ui";
import { _Fullscreen, _IsFullscreen } from "nhanh-pure-function";
import { onBeforeUnmount, ref } from "vue";
import WeatherInfo from "./weatherInfo/index.vue";
import Media from "@/stores/media";

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

/** 前往 GitHub */
function GotoGitHub() {
  window.open("https://github.com/ADMINnhanh/nhanh-frontend-view", "_blank");
}

/** 当前状态是否是全屏 */
const isFullScreen = ref(false);
/** 全屏切换 */
const toggleFullScreen = _Fullscreen();
/** 全屏切换监测 */
const resizeObserver = new ResizeObserver(() => {
  isFullScreen.value = _IsFullscreen();
});
resizeObserver.observe(document.documentElement);
onBeforeUnmount(() => {
  resizeObserver?.disconnect();
});
</script>

<template>
  <NSpace class="layout-header-button-group">
    <WeatherInfo v-if="!Media.isMobileStyle" />
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
