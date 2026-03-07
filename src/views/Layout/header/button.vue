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
import {
  _Element_Fullscreen,
  _Element_FullscreenObserver,
  _Element_IsFullscreen,
} from "nhanh-pure-function";
import { ref } from "vue";
import WeatherInfo from "./weatherInfo/index.vue";
import Media from "@/stores/media";
import Counter from "./counter.vue";

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
  window.open("https://github.com/nha-nh", "_blank");
}

/** 当前状态是否是全屏 */
const isFullScreen = ref(false);
/** 全屏切换 */
const toggleFullScreen = _Element_Fullscreen();
_Element_FullscreenObserver((isFull) => (isFullScreen.value = isFull));
</script>

<template>
  <NSpace class="layout-header-button-group">
    <template v-if="!Media.isMobileStyle">
      <Counter />
      <!-- <WeatherInfo /> -->
    </template>

    <NButton title="全屏切换" quaternary @click="toggleFullScreen">
      <template #icon>
        <NIcon :component="isFullScreen ? Contract : Expand" />
      </template>
    </NButton>
    <NButton title="主题切换" quaternary @click="ChangeTheme">
      <template #icon>
        <NIcon
          :component="Settings.theme == 'light' ? SunnyOutline : MoonOutline"
        />
      </template>
    </NButton>
    <NButton title="语言切换" quaternary @click="ChangeLanguage">
      <template #icon>
        <NIcon :component="LanguageOutline" />
      </template>
    </NButton>
    <NButton title="GitHub 主页" quaternary @click="GotoGitHub">
      <template #icon><NIcon :component="LogoGithub" /></template>
    </NButton>
    <NButton title="设置" quaternary @click="OpenSettings">
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
