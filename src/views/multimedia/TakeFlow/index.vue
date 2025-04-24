<script setup lang="ts">
import {
  NButton,
  NIcon,
  NSpace,
  NStatistic,
  NGrid,
  NGi,
  NSwitch,
  NModal,
  NImage,
} from "naive-ui";
import {
  CameraOutline,
  DesktopOutline,
  VideocamOutline,
  VideocamOffOutline,
  RecordingOutline,
  StopCircleOutline,
  ImageOutline,
  ExpandOutline,
  ContractOutline,
  StatsChartOutline,
} from "@vicons/ionicons5";
import ResponsiveDirectionLayout from "@/components/layout/ResponsiveDirectionLayout.vue";
import { onMounted, onUnmounted, ref, computed, type Ref } from "vue";
import { _DownloadFile, _TimeTransition } from "nhanh-pure-function";

const DisplayMedia = ref<HTMLVideoElement>();
const UserMedia = ref<HTMLVideoElement>();

let displayMediaStream = new MediaStream();
let userMediaStream = new MediaStream();

// 状态管理
const isScreenActive = ref(false);
const isCameraActive = ref(false);
const isRecording = ref(false);
const showStats = ref(false);
const showScreenshotModal = ref(false);
const screenshotData = ref("");

// 录制相关
let mediaRecorder: MediaRecorder | null = null;
let recordedChunks: Blob[] = [];

// 统计信息
const stats = ref({
  screen: {
    width: 0,
    height: 0,
    fps: 0,
    bitrate: 0,
  },
  camera: {
    width: 0,
    height: 0,
    fps: 0,
    bitrate: 0,
  },
});

/** 采集屏幕媒体流 */
async function AAddScreenStream() {
  try {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: false,
    });

    // 监听用户停止共享
    screenStream.getVideoTracks()[0].addEventListener("ended", () => {
      isScreenActive.value = false;
      window.$message.warning("屏幕共享已停止");
    });

    displayMediaStream.getTracks().forEach((track) => {
      displayMediaStream.removeTrack(track);
    });
    screenStream.getVideoTracks().forEach((track) => {
      console.log(track);

      displayMediaStream.addTrack(track);
      updateTrackStats(track, "screen");
    });

    isScreenActive.value = true;
    window.$message.success("屏幕媒体流已加入");
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
    isScreenActive.value = false;
    window.$message.success("屏幕媒体流已关闭");
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
      updateTrackStats(track, "camera");
    });

    isCameraActive.value = true;
    window.$message.success("摄像头媒体流已加入");
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
    isCameraActive.value = false;
    window.$message.success("摄像头媒体流已关闭");
  } catch (error) {
    window.$message.error("无法关闭摄像头媒体流");
    console.error("无法关闭摄像头媒体流:", error);
  }
}

let recordingTimeInterval: number;
const recordingStartTime = ref(0);
const recordingTime = computed(
  () =>
    `${String(parseInt(recordingStartTime.value / 3600 + "") % 24).padStart(
      2,
      "0"
    )}:${String(parseInt(recordingStartTime.value / 60 + "") % 60).padStart(
      2,
      "0"
    )}:${String(recordingStartTime.value % 60).padStart(2, "0")}`
);
/** 开始录制 */
function startRecording() {
  if (!isScreenActive.value && !isCameraActive.value) {
    window.$message.warning("请先开启至少一个媒体流");
    return;
  }

  const combinedStream = new MediaStream();
  displayMediaStream
    .getTracks()
    .forEach((track) => combinedStream.addTrack(track));
  userMediaStream
    .getTracks()
    .forEach((track) => combinedStream.addTrack(track));

  recordedChunks = [];
  mediaRecorder = new MediaRecorder(combinedStream, {
    mimeType: "video/webm;codecs=vp9",
  });

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };

  mediaRecorder.onstop = () => {
    clearInterval(recordingTimeInterval);

    combinedStream
      .getTracks()
      .forEach((track) => combinedStream.removeTrack(track));
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = `recording-${new Date().toISOString()}.webm`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  };

  mediaRecorder.start(1000); // 收集数据间隔1秒
  isRecording.value = true;

  recordingStartTime.value = 0;
  recordingTimeInterval = window.setInterval(() => {
    recordingStartTime.value += 1;
  }, 1000);
}

/** 停止录制 */
function stopRecording() {
  if (mediaRecorder && isRecording.value) {
    mediaRecorder.stop();
    isRecording.value = false;
    window.$message.success("录制已保存");
  }
}

/** 截图 */
function takeScreenshot() {
  if (!isScreenActive.value && !isCameraActive.value) {
    window.$message.warning("请先开启至少一个媒体流");
    return;
  }

  const canvas = document.createElement("canvas");
  const video = isScreenActive.value ? DisplayMedia.value : UserMedia.value;

  if (video) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      screenshotData.value = canvas.toDataURL("image/png");
      showScreenshotModal.value = true;
    }
  }
}

const pictureInPictureElement = ref<HTMLVideoElement | undefined>(undefined);
/** 切换画中画模式 */
async function togglePictureInPicture(video: HTMLVideoElement | undefined) {
  if (!video) return;

  if (document.pictureInPictureElement === video) {
    await document.exitPictureInPicture();
  } else {
    await video.requestPictureInPicture();
  }
  pictureInPictureElement.value = document.pictureInPictureElement as
    | HTMLVideoElement
    | undefined;
}

/** 更新轨道统计信息 */
function updateTrackStats(track: MediaStreamTrack, type: "screen" | "camera") {
  if (!("getSettings" in track)) return;

  const settings = track.getSettings();
  stats.value[type].width = settings.width || 0;
  stats.value[type].height = settings.height || 0;
  stats.value[type].fps = settings.frameRate || 0;

  // 实际应用中可以通过RTCPeerConnection获取更详细的统计信息
}

// 定期更新统计信息
let statsInterval: number;
onMounted(() => {
  DisplayMedia.value!.srcObject = displayMediaStream;
  UserMedia.value!.srcObject = userMediaStream;

  statsInterval = window.setInterval(() => {
    if (
      isScreenActive.value &&
      displayMediaStream.getVideoTracks().length > 0
    ) {
      updateTrackStats(displayMediaStream.getVideoTracks()[0], "screen");
    }
    if (isCameraActive.value && userMediaStream.getVideoTracks().length > 0) {
      updateTrackStats(userMediaStream.getVideoTracks()[0], "camera");
    }
  }, 1000);
});

onUnmounted(() => {
  ACloseScreenStream();
  ACloseCameraStream();
  if (mediaRecorder && isRecording.value) {
    mediaRecorder.stop();
  }
  clearInterval(statsInterval);
});
</script>

<template>
  <ResponsiveDirectionLayout>
    <template #left>
      <NSpace vertical>
        <!-- 屏幕媒体流控制 -->
        <NSpace vertical>
          <NStatistic
            label="屏幕状态"
            :value="isScreenActive ? '活跃' : '未激活'"
          >
            <template #suffix>
              <NIcon
                :color="isScreenActive ? 'green' : 'red'"
                :component="
                  isScreenActive ? VideocamOutline : VideocamOffOutline
                "
              />
            </template>
          </NStatistic>
          <NSpace>
            <NButton
              @click="AAddScreenStream"
              type="primary"
              ghost
              :disabled="isScreenActive"
            >
              <template #icon>
                <NIcon :component="DesktopOutline" />
              </template>
              提取屏幕
            </NButton>
            <NButton
              @click="ACloseScreenStream"
              type="error"
              ghost
              :disabled="!isScreenActive"
            >
              <template #icon>
                <NIcon :component="DesktopOutline" />
              </template>
              关闭屏幕
            </NButton>
            <NButton
              @click="togglePictureInPicture(DisplayMedia)"
              type="info"
              ghost
              :disabled="!isScreenActive"
            >
              <template #icon>
                <NIcon
                  :component="
                    isScreenActive && pictureInPictureElement === DisplayMedia
                      ? ContractOutline
                      : ExpandOutline
                  "
                />
              </template>
              画中画
            </NButton>
          </NSpace>
        </NSpace>

        <!-- 摄像头媒体流控制 -->
        <NSpace vertical>
          <NStatistic
            label="摄像头状态"
            :value="isCameraActive ? '活跃' : '未激活'"
          >
            <template #suffix>
              <NIcon
                :color="isCameraActive ? 'green' : 'red'"
                :component="
                  isCameraActive ? VideocamOutline : VideocamOffOutline
                "
              />
            </template>
          </NStatistic>
          <NSpace>
            <NButton
              @click="AAddCameraStream"
              type="primary"
              ghost
              :disabled="isCameraActive"
            >
              <template #icon>
                <NIcon :component="CameraOutline" />
              </template>
              提取摄像头
            </NButton>
            <NButton
              @click="ACloseCameraStream"
              type="error"
              ghost
              :disabled="!isCameraActive"
            >
              <template #icon>
                <NIcon :component="CameraOutline" />
              </template>
              关闭摄像头
            </NButton>
            <NButton
              @click="togglePictureInPicture(UserMedia)"
              type="info"
              ghost
              :disabled="!isCameraActive"
            >
              <template #icon>
                <NIcon
                  :component="
                    isCameraActive && pictureInPictureElement === UserMedia
                      ? ContractOutline
                      : ExpandOutline
                  "
                />
              </template>
              画中画
            </NButton>
          </NSpace>
        </NSpace>

        <!-- 录制控制 -->
        <NSpace vertical>
          <NStatistic
            label="录制状态"
            :value="isRecording ? '进行中' : '未开始'"
          >
            <template #prefix>
              <NIcon
                :color="isRecording ? 'red' : 'gray'"
                :component="isRecording ? RecordingOutline : StopCircleOutline"
              />
            </template>
            <template #suffix>
              {{ recordingTime }}
            </template>
          </NStatistic>
          <NSpace>
            <NButton
              @click="startRecording"
              type="error"
              ghost
              :disabled="isRecording || (!isScreenActive && !isCameraActive)"
            >
              <template #icon>
                <NIcon :component="RecordingOutline" />
              </template>
              开始录制
            </NButton>
            <NButton
              @click="stopRecording"
              type="error"
              :disabled="!isRecording"
            >
              <template #icon>
                <NIcon :component="StopCircleOutline" />
              </template>
              停止录制
            </NButton>
          </NSpace>
        </NSpace>

        <!-- 其他功能 -->
        <NSpace>
          <NButton
            @click="takeScreenshot"
            type="info"
            ghost
            :disabled="!isScreenActive && !isCameraActive"
          >
            <template #icon>
              <NIcon :component="ImageOutline" />
            </template>
            截图
          </NButton>
          <NButton @click="showStats = !showStats" type="info" ghost>
            <template #icon>
              <NIcon :component="StatsChartOutline" />
            </template>
            统计信息
          </NButton>
        </NSpace>

        <!-- 统计信息面板 -->
        <NSpace vertical v-if="showStats">
          <NGrid :cols="2" x-gap="12" y-gap="12">
            <NGi>
              <NStatistic
                label="屏幕分辨率"
                :value="`${stats.screen.width}×${stats.screen.height}`"
              />
            </NGi>
            <NGi>
              <NStatistic label="屏幕帧率" :value="stats.screen.fps" />
            </NGi>
            <NGi>
              <NStatistic
                label="摄像头分辨率"
                :value="`${stats.camera.width}×${stats.camera.height}`"
              />
            </NGi>
            <NGi>
              <NStatistic label="摄像头帧率" :value="stats.camera.fps" />
            </NGi>
          </NGrid>
        </NSpace>
      </NSpace>
    </template>

    <template #right>
      <div class="media-box">
        <video
          ref="DisplayMedia"
          autoplay
          muted
          playsinline
          class="media-video"
          :class="{ active: isScreenActive }"
        ></video>
        <video
          ref="UserMedia"
          autoplay
          muted
          playsinline
          class="media-video"
          :class="{ active: isCameraActive }"
        ></video>
      </div>
    </template>
  </ResponsiveDirectionLayout>

  <!-- 截图预览模态框 -->
  <NModal
    v-model:show="showScreenshotModal"
    title="截图预览"
    preset="card"
    style="width: 70vw"
  >
    <template #header-extra>
      <NButton
        ghost
        type="success"
        @click="
          _DownloadFile(
            screenshotData,
            `screenshot-${new Date().toISOString()}.png`
          )
        "
      >
        下载
      </NButton>
    </template>
    <NImage :src="screenshotData" />
  </NModal>
</template>

<style scoped lang="less">
.media-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  .media-video {
    border-radius: 5px;
    width: 100%;
    height: calc(50% - 5px);
    background-color: #00000070;
    transition: opacity 0.3s ease;

    &.active {
      opacity: 1;
    }
  }
}

.n-image {
  :deep(img) {
    width: 100%;
  }
}

.n-statistic {
  margin-bottom: 10px;
}
</style>
