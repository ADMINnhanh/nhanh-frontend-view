<script setup lang="ts">
import { NButton, NIcon, NSpace } from "naive-ui";
import { CameraOutline, DesktopOutline } from "@vicons/ionicons5";
import ResponsiveDirectionLayout from "@/components/layout/ResponsiveDirectionLayout.vue";
import { onMounted, onUnmounted, ref } from "vue";

const DisplayMedia = ref<HTMLVideoElement>();
const UserMedia = ref<HTMLVideoElement>();

const displayMediaStream = new MediaStream();
const userMediaStream = new MediaStream();

/** 采集屏幕媒体流 */
async function AAddScreenStream() {
  try {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    });
    displayMediaStream.getTracks().forEach((track) => {
      displayMediaStream.removeTrack(track);
    });
    screenStream.getVideoTracks().forEach((track) => {
      displayMediaStream.addTrack(track);
    });
    window.$message.success("屏幕媒体流已加入");
    console.log("屏幕媒体流已加入");
  } catch (error) {
    window.$message.error("无法采集屏幕媒体流");
    console.error("无法采集屏幕媒体流:", error);
  }
}
/** 关闭屏幕媒体流 */
async function ACloseScreenStream() {
  try {
    displayMediaStream.getTracks().forEach((track) => {
      track.stop();
      displayMediaStream.removeTrack(track);
    });
    window.$message.success("屏幕媒体流已关闭");
    console.log("屏幕媒体流已关闭");
  } catch (error) {
    window.$message.error("无法关闭屏幕媒体流");
    console.error("无法关闭屏幕媒体流:", error);
  }
}
/** 采集摄像头媒体流 */
async function AAddCameraStream() {
  try {
    const cameraStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    userMediaStream.getTracks().forEach((track) => {
      userMediaStream.removeTrack(track);
    });
    cameraStream.getVideoTracks().forEach((track) => {
      userMediaStream.addTrack(track);
    });
    window.$message.success("摄像头媒体流已加入");
    console.log("摄像头媒体流已加入");
  } catch (error) {
    window.$message.error("无法采集摄像头媒体流");
    console.error("无法采集摄像头媒体流:", error);
  }
}
/** 关闭摄像头媒体流 */
async function ACloseCameraStream() {
  try {
    userMediaStream.getTracks().forEach((track) => {
      track.stop();
      userMediaStream.removeTrack(track);
    });
    window.$message.success("摄像头媒体流已关闭");
    console.log("摄像头媒体流已关闭");
  } catch (error) {
    window.$message.error("无法关闭摄像头媒体流");
    console.error("无法关闭摄像头媒体流:", error);
  }
}

onMounted(() => {
  DisplayMedia.value!.srcObject = displayMediaStream;
  UserMedia.value!.srcObject = userMediaStream;
});
onUnmounted(() => {
  ACloseScreenStream();
  ACloseCameraStream();
});
</script>

<template>
  <ResponsiveDirectionLayout>
    <template #left>
      <NSpace vertical>
        <NSpace>
          <NButton @click="AAddScreenStream" type="primary" ghost>
            <template #icon>
              <NIcon :component="DesktopOutline" />
            </template>
            提取屏幕媒体流
          </NButton>
          <NButton @click="ACloseScreenStream" type="error" ghost>
            <template #icon>
              <NIcon :component="DesktopOutline" />
            </template>
            关闭屏幕媒体流
          </NButton>
        </NSpace>
        <NSpace>
          <NButton @click="AAddCameraStream" type="primary" ghost>
            <template #icon>
              <NIcon :component="CameraOutline" />
            </template>
            提取摄像头媒体流
          </NButton>
          <NButton @click="ACloseCameraStream" type="error" ghost>
            <template #icon>
              <NIcon :component="CameraOutline" />
            </template>
            关闭摄像头媒体流
          </NButton>
        </NSpace>
      </NSpace>
    </template>
    <template #right>
      <div class="media-box">
        <video ref="DisplayMedia" autoplay></video>
        <video ref="UserMedia" autoplay></video>
      </div>
    </template>
  </ResponsiveDirectionLayout>
</template>

<style scoped lang="less">
.media-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  video {
    box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    width: 100%;
    height: calc(50% - 5px);
  }
}
</style>
