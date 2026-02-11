<script lang="ts" setup>
import {
  _Browser_GetFrameRate,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import ResponsiveDirectionLayout from "@/components/layout/ResponsiveDirectionLayout.vue";
import {
  NButton,
  NButtonGroup,
  NIcon,
  NUpload,
  NUploadTrigger,
  NUploadFileList,
  NSpace,
  NTag,
  NText,
} from "naive-ui";
import { ref, watch } from "vue";
import {
  Add,
  CloudDownloadOutline,
  PlayOutline,
  StopOutline,
} from "@vicons/ionicons5";
import Options from "./options.vue";
import PCMAudioPlayer, { Endianness, type PCMPlayOptions } from "./core";
import axios from "axios";
import HandleFileDrag from "@/components/singleFile/HandleFileDrag.vue";
import {
  FormatTime,
  getTargetFileConfig,
  type AudioFileList,
  type TargetFileConfig,
} from ".";
import AudioVisualizationManager from "./core/AudioVisualizationManager";

const id = _Utility_GenerateUUID("audio-player-");
const fileListId = _Utility_GenerateUUID("file-list-");

const play = ref(false);
const accept = ".mp3,.pcm,.wav";
const fileIndex = ref<number | undefined>(undefined);
const fileList = ref<AudioFileList>([]);

const volume = ref(0.5);
const options = ref<PCMPlayOptions>({
  sampleRate: 16000,
  bitDepth: 16,
  channelCount: 1,
  startTime: 0,
  duration: 0,
  endianness: Endianness.LE,
});
const targetFileConfig = ref<TargetFileConfig>();

const audioPlayer = new PCMAudioPlayer();
const audioVisualization = new AudioVisualizationManager();

audioPlayer.onPlayCompleted = () => {
  play.value = false;
};

audioPlayer.playProgressCallback = (
  currentTime,
  totalDuration,
  progressPercentage
) => {
  const progress = Number(progressPercentage);
  audioVisualization.render(progress);
  targetFileConfig.value!.currentTime = FormatTime(Number(currentTime));
};

watch(
  [options, fileIndex],
  async ([options, index]) => {
    if (typeof index == "number") {
      const file = fileList.value[index];
      const arrayBuffer = await file.file!.arrayBuffer();
      audioPlayer.initPCM(arrayBuffer, options);
      targetFileConfig.value = getTargetFileConfig(
        file,
        audioPlayer.totalDuration
      );

      requestAnimationFrame(() => {
        const canvas = document.getElementById(id) as HTMLCanvasElement;
        const audioBuffer = audioPlayer.audioBuffer!;
        const duration = audioPlayer.totalDuration!;
        const channelCount = options.channelCount!;
        audioVisualization.init({
          canvas,
          audioBuffer,
          channelCount,
          duration,
        });
      });
    }
  },
  { deep: true }
);
watch(volume, (volume) => {
  audioPlayer.setVolume(volume);
});
watch(play, (play) => {
  if (play) audioPlayer.play();
  else audioPlayer.stop();
});

/** 拖拽放手时触发 */
function handleDrop(files: File[]) {
  const isAudioFile = (fileName: string) =>
    accept.split(",").some((extension) => fileName.endsWith(extension));
  const audios = files.filter((file) => isAudioFile(file.name));

  if (audios.length > 0) {
    audios.forEach((audio) => {
      fileList.value.push({
        id: String(audio.lastModified),
        name: audio.name,
        status: "pending",
        file: audio,
        options: {},
      });
    });
  } else {
    window.$message.warning("请拖拽音频文件");
  }
}

/** 加载样例 */
function loadExample() {
  axios
    .get("./multimedia/Jay Chou.pcm", { responseType: "blob" })
    .then((res) => {
      const file = new File([res.data], "Jay Chou.pcm");
      fileList.value.push({
        id: String(file.lastModified),
        name: file.name,
        status: "finished",
        file,
        options: {
          sampleRate: 24000,
          bitDepth: 16,
          channelCount: 2,
          endianness: Endianness.LE,
        },
      });
      setActiveUploadFile(fileList.value.length - 1);
    });
}

function setActiveUploadFile(index: number) {
  fileIndex.value = index;
  Object.assign(options.value, fileList.value[index].options);
  setTimeout(() => {
    const files = document.querySelectorAll(`#${fileListId} .n-upload-file`);
    files.forEach((v, i) => {
      v.classList.remove("active");
      if (i == index) v.classList.add("active");
    });
  }, 100);
}
function handleFileListClick(ev: PointerEvent) {
  const isButton = (ev.target as HTMLElement).closest(".n-button");
  const file = (ev.target as HTMLElement).closest(".n-upload-file");
  if (!file) return;
  const files = document.querySelectorAll(`#${fileListId} .n-upload-file`);
  const index = Array.from(files).findIndex((v) => v === file);

  if (isButton) {
    if (index == fileIndex.value) {
      fileIndex.value = undefined;
      play.value = false;
      audioPlayer.clear();
    }
    return;
  }

  if (index != -1) setActiveUploadFile(index);
}
</script>

<template>
  <HandleFileDrag @drop-callback="handleDrop">
    <ResponsiveDirectionLayout :default-size="0.35" :min="0">
      <template #left>
        <Options v-model:options="options" v-model:volume="volume">
          <template #prefix>
            <n-upload
              v-model:file-list="fileList"
              abstract
              :accept="accept"
              multiple
            >
              <NButtonGroup>
                <n-upload-trigger #="{ handleClick }" abstract>
                  <n-button type="info" @click="handleClick">
                    <template #icon>
                      <n-icon :component="Add" />
                    </template>
                    选择或拖入文件
                  </n-button>
                </n-upload-trigger>

                <n-button type="info" ghost @click="loadExample">
                  <template #icon>
                    <n-icon :component="CloudDownloadOutline" />
                  </template>
                  加载样例
                </n-button>
              </NButtonGroup>
              <NUploadFileList :id="fileListId" @click="handleFileListClick" />
            </n-upload>
          </template>
          <template #suffix>
            <NButton
              :disabled="typeof fileIndex != 'number'"
              :type="play ? 'error' : 'success'"
              ghost
              @click="play = !play"
            >
              <template #icon>
                <NIcon :component="play ? StopOutline : PlayOutline" />
              </template>
              {{ play ? "暂停" : "播放" }}
            </NButton>
          </template>
        </Options>
      </template>
      <template #right>
        <div v-if="targetFileConfig" class="audio-player-container">
          <NSpace>
            <n-text>{{ targetFileConfig.name }}</n-text>
            <n-tag type="info"> {{ targetFileConfig.type }} </n-tag>
            <n-tag
              :color="{
                color: '#8a2be21a',
                textColor: '#9339E7FF',
                borderColor: '#9339E7FF',
              }"
            >
              {{ targetFileConfig.size }}
            </n-tag>
            <n-tag type="success"> {{ targetFileConfig.totalDuration }} </n-tag>
            <n-tag type="warning"> {{ targetFileConfig.sampleRate }}Hz </n-tag>
            <n-tag> {{ targetFileConfig.channelCount }}ch </n-tag>
            <n-tag> {{ targetFileConfig.bitDepth }}bit </n-tag>
          </NSpace>
          <canvas :id="id" />
          <div class="time-container">
            <n-text>{{ targetFileConfig.currentTime }}</n-text>
            <n-text>{{ targetFileConfig.totalDuration }}</n-text>
          </div>
        </div>
      </template>
    </ResponsiveDirectionLayout>
  </HandleFileDrag>
</template>

<style scoped lang="less">
.handle-file-drag {
  height: 100%;
}

.n-button-group {
  width: 100%;
  .n-button {
    flex-grow: 1;
  }
}
.n-upload-file-list {
  :deep(.n-upload-file) {
    cursor: pointer;
  }
  :deep(.n-upload-file.active) {
    background-color: color-mix(
      in srgb,
      var(--n-item-text-color-success) 20%,
      transparent
    );
  }
}

.audio-player-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
  .n-text {
    font-weight: bold;
  }
  canvas {
    width: 100%;
    border-radius: 6px;
    box-shadow: 0px 0px 10px 5px var(--box-shadow);
  }
  .time-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
