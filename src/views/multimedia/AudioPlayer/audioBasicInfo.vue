<script lang="ts" setup>
import {
  NSpace,
  NTag,
  NText,
  NImage,
  NScrollbar,
  NButton,
  NIcon,
} from "naive-ui";
import { type AudioOptions, type TargetFileConfig } from ".";
import { onUnmounted, ref, shallowRef, watch } from "vue";
import { CopyOutline } from "@vicons/ionicons5";
import { _Browser_CopyToClipboard, _Tip } from "nhanh-pure-function";

interface Props {
  isRunning: boolean;
  info: TargetFileConfig;
  getMetadata: () => AudioOptions | undefined;
}
const props = defineProps<Props>();

const audioCover = ref("");

const audioTag = shallowRef<string[]>([]);

function extractChinese(info: Record<string, string>) {
  if (!info || typeof info !== "object") return [];

  const hasChineseReg = /[\u4e00-\u9fa5]/;

  return Object.keys(info)
    .filter((key) => hasChineseReg.test(key) && typeof info[key] === "string")
    .map((key) => `${key}：${info[key]}`);
}

function init() {
  clear();
  const metadata = props.getMetadata();

  if (metadata) {
    const { mp3, wav } = metadata;
    if (mp3) {
      const { id3v2 } = mp3;
      if (!id3v2) return;
      const img = id3v2.audioCover;
      audioTag.value = extractChinese(id3v2);
      if (img && typeof img == "object") {
        const blob = new Blob([img.data], { type: img.mime });
        audioCover.value = URL.createObjectURL(blob);
      }
    } else if (wav) {
      const { id3, list_info } = wav.otherChunk;
      audioTag.value = [];
      if (id3) audioTag.value = extractChinese(id3);
      if (list_info) audioTag.value.push(...extractChinese(list_info));
    }
  }
}
function clear() {
  if (audioCover.value) URL.revokeObjectURL(audioCover.value);
  audioTag.value = [];
  audioCover.value = "";
}

watch(() => props.info, init, { immediate: true });

onUnmounted(clear);
</script>

<template>
  <div class="flex-box">
    <div :class="[isRunning && 'running', 'record-player']">
      <div class="img-box"><NImage v-if="audioCover" :src="audioCover" /></div>
      <div class="tonarm-lift"></div>
    </div>

    <NSpace vertical>
      <NText>{{ info.name }}</NText>

      <NScrollbar style="max-height: 90px">
        <NSpace>
          <n-tag v-for="tag in audioTag" :key="tag">
            <template v-if="tag.length > 30">
              {{ tag.slice(0, 28) }}..
              <NButton
                type="info"
                text
                @click="
                  _Tip
                    .success('复制完成')
                    .error('复制失败')
                    .run(_Browser_CopyToClipboard(tag))
                "
              >
                <NIcon :component="CopyOutline" />
              </NButton>
            </template>
            <template v-else>{{ tag }}</template>
          </n-tag>
        </NSpace>
      </NScrollbar>

      <NSpace>
        <n-tag type="info"> {{ info.type }} </n-tag>
        <n-tag
          :color="{
            color: '#8a2be21a',
            textColor: '#9339E7FF',
            borderColor: '#9339E7FF',
          }"
        >
          {{ info.size }}
        </n-tag>
        <n-tag type="success"> {{ info.totalDuration }} </n-tag>
        <n-tag type="warning"> {{ info.sampleRate }}Hz </n-tag>
        <n-tag> {{ info.channelCount }}ch </n-tag>
        <n-tag> {{ info.bitDepth }}bit </n-tag>
      </NSpace>
    </NSpace>
  </div>
</template>

<style scoped lang="less">
.flex-box {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 20px;
}
/* 定义旋转关键帧 */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.record-player {
  position: relative;
  display: flex;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), transparent);

  border-radius: 5px;
  padding: 25px 5px 5px;
  --img-size: 130px;

  .img-box {
    overflow: hidden;
    width: var(--img-size);
    height: var(--img-size);
    background-image: url("../../../assets/img/record-player.png");
    background-size: var(--img-size) var(--img-size);
    /* 动画名称、时长、速度曲线、循环次数 */
    animation: spin 20s linear infinite;
    animation-play-state: paused;

    display: flex;
    justify-content: center;
    align-items: center;
    .n-image {
      --size: 66%;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
    }
  }

  .tonarm-lift {
    position: absolute;
    top: 5px;
    left: calc(var(--img-size) / 2 + 5px - 4px);
    width: calc(179px * 0.35);
    height: calc(90px * 0.35);
    background-image: url("../../../assets/img/tonarm-lift.png");
    background-size: 100% 100%;
    transform-origin: 0 0;
    transform: rotateZ(-5deg);
    transition: transform 0.5s linear;
  }
}

.running {
  .img-box {
    animation-play-state: running;
  }
  .tonarm-lift {
    transform: rotateZ(23deg);
  }
}
</style>
