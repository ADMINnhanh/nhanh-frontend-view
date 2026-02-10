<script lang="ts" setup>
import {
  _File_Download,
  _Utility_Debounce,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import { NA, NButton, NH5, NIcon, NModal, NText } from "naive-ui";
import { HelpCircleOutline } from "@vicons/ionicons5";
import { ref } from "vue";

const active = ref(false);
</script>

<template>
  <NButton type="info" ghost @click="active = true">
    <template #icon>
      <NIcon :component="HelpCircleOutline" />
    </template>
    说明
  </NButton>

  <NModal
    v-model:show="active"
    preset="card"
    title="图片查看器.exe 说明"
    style="width: 670px"
  >
    <NH5 prefix="bar" type="success">
      <NH5 prefix="bar" type="info" style="margin: 0 0 10px">
        快捷键对应功能：<br />
        <NText type="info">F1</NText> 显示/隐藏切换&nbsp;
        <NText type="info">F2</NText> 切换缩放模式&nbsp;
        <NText type="info">F3</NText> 切换透明度&nbsp;
        <NText type="info">F4</NText> 锁定窗口为鼠标穿透<br />
        <NText type="error">Esc</NText> 退出程序<br />
      </NH5>
      <NA
        href="https://github.com/ADMINnhanh/AHK-Scripts/blob/main/ImageViewer/Main.ahk"
      >
        源码 **/Main.ahk
      </NA>
    </NH5>
    <video src="/multimedia/ImageViewerHelp.mp4" controls />
  </NModal>
</template>

<style scoped lang="less">
video {
  width: 100%;
}
</style>
