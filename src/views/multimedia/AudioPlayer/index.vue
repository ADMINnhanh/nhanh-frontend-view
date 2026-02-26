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
  NScrollbar,
  NH3,
} from "naive-ui";
import { ref, watch } from "vue";
import {
  Add,
  CloudDownloadOutline,
  PlayOutline,
  StopOutline,
} from "@vicons/ionicons5";
import Options from "./options.vue";
import axios from "axios";
import HandleFileDrag from "@/components/singleFile/HandleFileDrag.vue";
import {
  Endianness,
  FormatTime,
  getTargetFileConfig,
  type AudioOptions,
  type TargetFileConfig,
} from ".";
import AudioVisualizationManager from "./core/AudioVisualizationManager";
import MP3FileParser from "./core/MP3FileParser/main";
import type { UploadFileInfo } from "naive-ui";
import AudioBasicInfo from "./audioBasicInfo.vue";

const id = _Utility_GenerateUUID("audio-player-");
const fileListId = _Utility_GenerateUUID("file-list-");

const play = ref(false);
const accept = ".mp3,.pcm,.wav";
const fileIndex = ref<number | undefined>(undefined);
const fileList = ref<UploadFileInfo[]>([]);
const audioOptions = new Map<string, AudioOptions>();

const volume = ref(0.2);
const options = ref<Partial<PCMPlayOptions>>({
  sampleRate: 16000,
  bitDepth: 16,
  channelCount: 1,
  startTime: 0,
  duration: 0,
  endianness: Endianness.LE,
});
const targetFileConfig = ref<TargetFileConfig>();

const audioVisualization = new AudioVisualizationManager();

audioVisualization.onPlayCompleted = () => {
  play.value = false;
};
audioVisualization.playProgressCallback = (currentTime) => {
  targetFileConfig.value!.currentTime = FormatTime(Number(currentTime));
};

watch(
  [options, fileIndex],
  async ([pcmOptions, index]) => {
    if (typeof index == "number") {
      const file = fileList.value[index];
      const audioOption = audioOptions.get(file.id)!;
      targetFileConfig.value = getTargetFileConfig(audioOption, 0);
      requestAnimationFrame(async () => {
        const canvas = document.getElementById(id) as HTMLCanvasElement;
        const pcmData = audioOption.pcm;
        await audioVisualization.init({
          canvas,
          pcmData,
          pcmOptions,
        });
        targetFileConfig.value!.currentTime = FormatTime(0);
        targetFileConfig.value!.totalDuration = FormatTime(
          Number(audioVisualization.totalDuration)
        );
      });
    }
  },
  { deep: true }
);
watch(volume, (volume) => {
  audioVisualization.setVolume(volume);
});

function playAudio() {
  audioVisualization.play();
  play.value = true;
}
function pauseAudio() {
  audioVisualization.stop();
  play.value = false;
}
/** 从指定时间开始播放 */
async function playFromPosition(payload: PointerEvent) {
  const { offsetX, target } = payload;
  const width = (target as HTMLElement).clientWidth;
  const position = (offsetX / width) * audioVisualization.totalDuration;
  await audioVisualization.play(position);
  play.value = true;
}
/** 时间轴提示 */
function handleMouseMove(mouse: MouseEvent) {
  const { offsetX, target } = mouse;
  const dom = target as HTMLElement;
  const width = dom.clientWidth;
  const position = (offsetX / width) * audioVisualization.totalDuration;
  dom.dataset.time = FormatTime(position);
  dom.style.setProperty("--after-x", offsetX - 46 / 2 + "px");
}
/** 获取元数据 */
function getMetadata() {
  if (fileIndex.value === undefined) return;
  const file = fileList.value[fileIndex.value];
  return audioOptions.get(file.id);
}

/** 拖拽放手时触发 */
function handleDrop(files: File[]) {
  const isAudioFile = (fileName: string) =>
    accept.split(",").some((extension) => fileName.endsWith(extension));
  const audios = files.filter((file) => isAudioFile(file.name));

  if (audios.length > 0) {
    audios.forEach((audio) => {
      const id = String(audio.lastModified);
      fileList.value.push({
        id,
        name: audio.name,
        status: "finished",
        file: audio,
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
    .then(async (res) => {
      const file = new File([res.data], "Jay Chou.pcm");
      const pcm = await file.arrayBuffer();
      const id = String(file.lastModified);
      audioOptions.set(id, {
        fileName: file.name,
        fileSize: file.size,
        audioBasicInfo: {
          sampleRate: 24000,
          bitDepth: 16,
          channelCount: 2,
          endianness: Endianness.LE,
        },
        pcm,
      });
      fileList.value.push({
        id,
        name: file.name,
        status: "finished",
      });
      setActiveUploadFile(fileList.value.length - 1);
    });
}

async function setActiveUploadFile(index: number) {
  const file = fileList.value[index];
  let audioOption = audioOptions.get(file.id);

  const msg = window.$message.loading("解析中... 希望不会太久~", {
    duration: 0,
  });
  const finish = () => {
    setTimeout(() => {
      msg.type = "success";
      msg.content = `解析完成。久等了~`;
      setTimeout(() => msg.destroy(), 3000);
    }, 1000);
  };
  const error = (str: string) => {
    msg.type = "error";
    msg.content = `解析失败，${str}。额~`;
    setTimeout(() => msg.destroy(), 3000);
  };

  if (!audioOption) {
    const audio = file.file;
    if (!audio) return error("数据异常");

    const index = audio.name.lastIndexOf(".");
    const type = audio.name.slice(index + 1);

    if (type.toLocaleLowerCase() == "mp3") {
      const info = await MP3FileParser(audio);
      if (info) {
        const { audioBasicInfo } = info.mpegAudio;
        audioOptions.set(file.id, {
          fileName: audio.name,
          fileSize: audio.size,
          audioBasicInfo: {
            sampleRate: audioBasicInfo.sampleRate as any,
            channelCount: audioBasicInfo.channelCount,
            bitDepth: audioBasicInfo.bitDepth as any,
            endianness: Endianness.LE,
          },
          pcm: info.pcm,
          mp3Info: info,
        });
      } else {
        return error("MP3文件解析失败");
      }
    } else if (type.toLocaleLowerCase() == "pcm") {
      const pcm = await audio.arrayBuffer();
      audioOptions.set(file.id, {
        fileName: audio.name,
        fileSize: audio.size,
        audioBasicInfo: {
          sampleRate: 8000,
          channelCount: 2,
          bitDepth: 16,
          endianness: Endianness.LE,
        },
        pcm,
      });
    } else {
      return error("敬请期待");
      // fileList.value.push({
      //   id: String(audio.lastModified),
      //   name: audio.name,
      //   status: "pending",
      //   options: {},
      // });
    }

    audioOption = audioOptions.get(file.id);
  }
  fileIndex.value = index;

  finish();

  Object.assign(options.value, audioOption!.audioBasicInfo);
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
    const file = fileList.value[index];
    audioOptions.delete(file.id);
    if (index == fileIndex.value) {
      fileIndex.value = undefined;
      play.value = false;
      audioVisualization.clear();
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
        <NScrollbar>
          <NH3 prefix="bar">
            <NText type="success">
              PCM / MP3 /
              <NText type="warning">WAV(额~)</NText>
              音频可视化播放器
            </NText>
          </NH3>
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
                <NUploadFileList
                  :id="fileListId"
                  @click.capture="handleFileListClick"
                />
              </n-upload>
            </template>
            <template #suffix>
              <NButton
                :disabled="typeof fileIndex != 'number'"
                :type="play ? 'error' : 'success'"
                ghost
                @click="play ? pauseAudio() : playAudio()"
              >
                <template #icon>
                  <NIcon :component="play ? StopOutline : PlayOutline" />
                </template>
                {{ play ? "暂停" : "播放" }}
              </NButton>
            </template>
          </Options>
        </NScrollbar>
      </template>
      <template #right>
        <div v-if="targetFileConfig" class="audio-player-container">
          <AudioBasicInfo
            :is-running="play"
            :info="targetFileConfig"
            :getMetadata="getMetadata"
          />
          <div class="canvas-container">
            <canvas :id="id" />
            <div
              class="progress"
              @mousemove="handleMouseMove"
              @click="playFromPosition"
            ></div>
          </div>
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
  .canvas-container {
    display: flex;
    position: relative;
    canvas {
      width: 100%;
      border-radius: 6px;
      box-shadow: 0px 0px 10px 5px var(--box-shadow);
    }
    .progress {
      cursor: pointer;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100px;
      &::after {
        /* 必须：显示data属性中的文本 */
        content: attr(data-time);
        /* 定位：可根据需求调整位置（如右上角、鼠标位置等） */
        position: absolute;
        top: 0; /* 向上偏移，避免遮挡时间轴 */
        left: var(--after-x);
        /* 样式：保证可读性 */
        padding: 2px 8px;
        background: #333;
        color: #fff;
        font-size: 12px;
        border-radius: 3px;
        pointer-events: none; /* 不影响鼠标交互 */
        /* 关键：始终显示（去掉默认的hover触发） */
        display: block;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      &:hover::after {
        opacity: 1;
      }
    }
  }

  .time-container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
