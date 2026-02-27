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

type Mp3Info = Exclude<AudioOptions["mp3Info"], undefined>;
const id3v2Tag = shallowRef<string[]>([]);

function init() {
  clear();
  const metadata = props.getMetadata();
  // console.log(metadata);

  if (metadata) {
    const { mp3Info } = metadata;
    if (mp3Info) {
      const { id3v2 } = mp3Info;
      if (!id3v2) return;
      const img = id3v2.audioCover;
      id3v2Tag.value = Object.keys(id3v2)
        .filter((key) => {
          const reg = /^[\u4e00-\u9fa5]+$/;
          if (reg.test(key)) {
            return typeof id3v2[key] == "string";
          }
        })
        .map((key) => `${key}：${id3v2[key]}`);
      if (img && typeof img == "object") {
        const blob = new Blob([img.data], { type: img.mime });
        audioCover.value = URL.createObjectURL(blob);
      }
    }
  }
}
function clear() {
  if (audioCover.value) URL.revokeObjectURL(audioCover.value);
  id3v2Tag.value = [];
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

      <NScrollbar style="max-height: 100px">
        <NSpace>
          <n-tag v-for="tag in id3v2Tag" :key="tag">
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
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), transparent);
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
