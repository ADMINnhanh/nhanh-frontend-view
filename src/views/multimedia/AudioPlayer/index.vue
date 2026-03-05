<script lang="ts" setup>
import {
  _Browser_GetFrameRate,
  _Utility_Debounce,
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
  NText,
  NScrollbar,
  NH3,
  NInputGroup,
  NInputGroupLabel,
  NSlider,
} from "naive-ui";
import { onDeactivated, onUnmounted, ref, watch } from "vue";
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
  getTargetAudioConfig,
  type AudioOptions,
  type TargetAudioConfig,
} from ".";
import AudioVisualizationManager from "./core/AudioVisualizationManager";
import MP3FileParser from "./core/MP3FileParser/main";
import type { UploadFileInfo } from "naive-ui";
import AudioBasicInfo from "./audioBasicInfo.vue";
import WAVFileParser from "./core/WAVFileParser/main";

const id = _Utility_GenerateUUID("audio-player-");
const fileListId = _Utility_GenerateUUID("file-list-");

const play = ref(false);
const accept = ".mp3,.pcm,.wav,.wave";
const fileList = ref<UploadFileInfo[]>([]);

const volume = ref(0.5);
const channelVolume = ref<number[]>([]);
const options = ref<Partial<PCMPlayOptions>>({
  sampleRate: 16000,
  bitDepth: 16,
  channelCount: 1,
  startTime: 0,
  duration: 0,
  sampleFormat: "int",
  endianness: Endianness.LE,
});
const lfeMix = ref<LfeMix>({
  enable: false,
  level: 1.0,
  channelCount: 2,
});

let initChannelVolumeTips = false;
const channelVolumeTips = ref(false);

const audioOptions = new Map<string, AudioOptions>();
const targetAudioConfig = ref<TargetAudioConfig>();

const audioVisualization = new AudioVisualizationManager();
audioVisualization.onPlayCompleted = () => {
  play.value = false;
};
audioVisualization.playProgressCallback = (currentTime) => {
  targetAudioConfig.value!.currentTime = FormatTime(Number(currentTime));
};

const fileListChange = _Utility_Debounce(
  (list: UploadFileInfo[], lastList?: UploadFileInfo[]) => {
    if (!targetAudioConfig.value && list.length > (lastList?.length || 0)) {
      setActiveUploadFile(0);
    }
  },
  200
);
watch(fileList, fileListChange);
const initAudio = _Utility_Debounce(() => {
  const index = getActivationFileIndex();
  if (index === undefined) return;

  const file = fileList.value[index];
  const audioOption = audioOptions.get(file.id)!;
  targetAudioConfig.value = getTargetAudioConfig(audioOption);
  targetAudioConfig.value.id = file.id;

  const channelCount = options.value.channelCount || 0;
  for (let i = channelVolume.value.length; i < channelCount; i++) {
    channelVolume.value[i] = 1;
  }
  if (!initChannelVolumeTips) {
    initChannelVolumeTips = true;
    channelVolumeTips.value = true;
    setTimeout(() => {
      channelVolumeTips.value = false;
    }, 5000);
  }

  requestAnimationFrame(async () => {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    const pcmData = audioOption.pcm;
    await audioVisualization.init({
      canvas,
      pcmData,
      pcmOptions: {
        volume: volume.value,
        ...options.value,
      },
    });
    targetAudioConfig.value!.currentTime = FormatTime(0);
    targetAudioConfig.value!.totalDuration = FormatTime(
      Number(audioVisualization.totalDuration)
    );
  });
}, 200);
watch(options, initAudio, { deep: true });
watch(volume, (volume) => audioVisualization.setVolume(volume));
watch(
  channelVolume,
  (channelVolume) => {
    channelVolume.forEach((volume, index) => {
      audioVisualization.setChannelVolume(index, volume);
    });
  },
  { deep: true }
);
const lfeMixChange = _Utility_Debounce((newLfeMix: LfeMix) => {
  if (targetAudioConfig.value) {
    const { type, lfeMix } = targetAudioConfig.value;
    if ((!lfeMix?.enable && !newLfeMix.enable) || type == "PCM") return;
    const index = getActivationFileIndex();
    if (index === undefined) return;
    setActiveUploadFile(index, true);
  }
}, 400);
watch(lfeMix, lfeMixChange, { deep: true });

function getActivationFileIndex() {
  const files = document.querySelectorAll(`#${fileListId} .n-upload-file`);
  const index = Array.from(files).findIndex((v) =>
    v.classList.contains("active")
  );
  return index != -1 ? index : undefined;
}

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

  audioVisualization
    .play(Math.max(0, position), !play.value)
    ?.then(() => (play.value = true));
}
let isDown = false;
function handleMouseDown() {
  isDown = true;
}
function handleMouseUp() {
  isDown = false;
}

/** 时间轴提示 */
function handleMouseMove(mouse: MouseEvent) {
  const { offsetX, target } = mouse;
  const dom = target as HTMLElement;
  const width = dom.clientWidth;
  const x = Math.max(0, offsetX);
  const position = (x / width) * audioVisualization.totalDuration;
  dom.dataset.time = FormatTime(position);
  dom.style.setProperty("--after-x", x - 46 / 2 + "px");
  if (isDown && !play.value) playFromPosition(mouse as any);
}
/** 获取元数据 */
function getMetadata() {
  const index = getActivationFileIndex();
  if (index === undefined) return;

  const file = fileList.value[index];
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
    if (!targetAudioConfig.value)
      setActiveUploadFile(fileList.value.length - audios.length);
  } else {
    window.$message.warning("请拖拽音频文件");
  }
}

/** 加载样例 */
async function loadExample() {
  const msg = window.$message.loading("加载样例中...", { duration: 0 });

  const base = "/public/multimedia/";
  const jay_chou = "Jay Chou.pcm";

  await axios
    .get(base + jay_chou, { responseType: "blob" })
    .then(async (res) => {
      const file = new File([res.data], jay_chou);
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
          sampleFormat: "int",
        },
        pcm,
      });
      fileList.value.push({
        id,
        name: jay_chou,
        status: "finished",
      });
      if (!targetAudioConfig.value) {
        const index = fileList.value.length - 1;
        setTimeout(() => setActiveUploadFile(index), 100);
      }
    });

  const promises = ["Phil Michalski.mp3", "M1F1-uint8-AFsp.wav"].map(
    (fileName) => {
      return axios
        .get(base + fileName, { responseType: "blob" })
        .then(async (res) => {
          const file = new File([res.data], fileName);
          const id = String(file.lastModified);
          fileList.value.push({
            id,
            name: fileName,
            status: "finished",
            file,
          });
        });
    }
  );

  await Promise.allSettled(promises);

  msg.type = "success";
  msg.content = "加载完成。";
  setTimeout(() => msg.destroy(), 3000);
}

const parserLoading = ref(false);
async function setActiveUploadFile(index: number, forceParse = false) {
  if (parserLoading.value) return window.$message.warning("请稍等~");

  const file = fileList.value[index];
  let audioOption = audioOptions.get(file.id);

  const msg = window.$message.loading("解析中... 希望不会太久~", {
    duration: 0,
  });
  parserLoading.value = true;

  const finish = () => {
    parserLoading.value = false;
    setTimeout(() => {
      msg.type = "success";
      msg.content = `解析完成。久等了~`;
      setTimeout(() => msg.destroy(), 3000);
    }, 1000);
  };
  const error = (str: string) => {
    parserLoading.value = false;

    msg.type = "error";
    msg.content = `解析失败，${str}。额~`;
    setTimeout(() => msg.destroy(), 3000);
  };

  if (!audioOption || forceParse) {
    const audio = file.file;
    if (!audio) return error("数据异常");

    const index = audio.name.lastIndexOf(".");
    const type = audio.name.slice(index + 1);

    const _lfeMix = { ...lfeMix.value };
    if (type.toLocaleLowerCase() == "mp3") {
      const info = await MP3FileParser(audio, _lfeMix);
      if (info) {
        const audioBasicInfo = info.audioBasicInfo;
        audioOptions.set(file.id, {
          fileName: audio.name,
          fileSize: audio.size,
          audioBasicInfo: {
            sampleRate: audioBasicInfo.sampleRate as any,
            channelCount: audioBasicInfo.channelCount,
            bitDepth: audioBasicInfo.bitDepth as any,
            endianness: Endianness.LE,
            sampleFormat: info.sampleFormat,
          },
          pcm: info.pcm,
          mp3: info,
          lfeMix: _lfeMix,
        });
      } else {
        return error("MP3文件解析失败");
      }
    } else if (type.toLocaleLowerCase() == "pcm") {
      const pcm = await audio.arrayBuffer();
      audioOptions.set(file.id, {
        fileName: audio.name,
        fileSize: audio.size,
        audioBasicInfo: {},
        pcm,
      });
    } else {
      const info = await WAVFileParser(audio, _lfeMix);
      if (info) {
        const fmt = info.fmt;
        audioOptions.set(file.id, {
          fileName: audio.name,
          fileSize: audio.size,
          audioBasicInfo: {
            sampleRate: fmt.dwSamplesPerSec as any,
            channelCount: fmt.wChannels,
            bitDepth: fmt.dwBitsPerSample as any,
            endianness: Endianness.LE,
            sampleFormat: info.sampleFormat,
          },
          pcm: info.pcm,
          wav: info,
          lfeMix: _lfeMix,
        });
      } else {
        return error("WAV文件解析失败");
      }
    }

    audioOption = audioOptions.get(file.id);
  }

  finish();

  Object.assign(options.value, audioOption!.audioBasicInfo);

  if (audioOption?.lfeMix?.enable)
    options.value.channelCount = audioOption.lfeMix.channelCount;

  const files = document.querySelectorAll(`#${fileListId} .n-upload-file`);
  files.forEach((v, i) => {
    v.classList.remove("active");
    if (i == index) v.classList.add("active");
  });
  initAudio();
}
function handleFileListClick(ev: PointerEvent) {
  const isButton = (ev.target as HTMLElement).closest(".n-button");
  const fileDom = (ev.target as HTMLElement).closest(".n-upload-file");
  if (!fileDom) return;
  const files = document.querySelectorAll(`#${fileListId} .n-upload-file`);
  const index = Array.from(files).findIndex((v) => v === fileDom);

  const file = fileList.value[index];
  if (isButton) {
    audioOptions.delete(file.id);
    if (file.id == targetAudioConfig.value?.id) {
      play.value = false;
      audioVisualization.clear();
      targetAudioConfig.value = undefined;
    }
    return;
  }

  if (index != -1 && file.id != targetAudioConfig.value?.id)
    setActiveUploadFile(index);
}

onDeactivated(() => {
  audioVisualization.stop();
});
onUnmounted(() => {
  audioVisualization.clear();
});
</script>

<template>
  <HandleFileDrag @drop-callback="handleDrop">
    <ResponsiveDirectionLayout :default-size="0.35" :min="0">
      <template #left>
        <NScrollbar>
          <NH3 prefix="bar">
            <NText type="success"> PCM / MP3 / WAV 音频可视化播放器 </NText>
          </NH3>

          <Options
            v-model:options="options"
            v-model:volume="volume"
            v-model:lfe-mix="lfeMix"
          >
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
                <NScrollbar style="max-height: calc(100vh - 794px)">
                  <NUploadFileList
                    :id="fileListId"
                    @click.capture="handleFileListClick"
                  />
                </NScrollbar>
              </n-upload>
            </template>
            <template #suffix>
              <NButton
                :disabled="!targetAudioConfig"
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
        <NScrollbar>
          <div v-if="targetAudioConfig" class="audio-player-container">
            <AudioBasicInfo
              :is-running="play"
              :info="targetAudioConfig"
              :getMetadata="getMetadata"
            />
            <div class="canvas-container">
              <div
                :class="['channel-volume', channelVolumeTips && 'show']"
                :style="{
                  height: (options.channelCount || 0) * 100 + 'px',
                }"
              >
                <NInputGroup
                  v-for="(_, index) in channelVolume.slice(
                    0,
                    options.channelCount || 0
                  )"
                  :key="index"
                >
                  <NInputGroupLabel>声道 {{ index + 1 }} 音量</NInputGroupLabel>
                  <NSlider
                    v-model:value="channelVolume[index]"
                    :min="0"
                    :max="3"
                    :step="0.01"
                    :marks="{
                      0: '0',
                      1: '1',
                      2: '2',
                      3: '3',
                    }"
                  />
                </NInputGroup>
              </div>
              <canvas :id="id" />
              <div
                class="progress"
                @mousemove="handleMouseMove"
                @click="playFromPosition"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              ></div>
            </div>
            <div class="time-container">
              <n-text>{{ targetAudioConfig.currentTime }}</n-text>
              <n-text>{{ targetAudioConfig.totalDuration }}</n-text>
            </div>
          </div>
        </NScrollbar>
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
    .channel-volume {
      position: absolute;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      background-color: #464646cf;
      opacity: 0;
      transition: opacity 0.3s linear;
      &:hover {
        opacity: 1;
      }
      .n-input-group {
        width: 50%;
        .n-slider {
          margin: 8px 0 8px 10px !important;
        }
      }
    }
    .channel-volume.show {
      opacity: 1;
    }
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
