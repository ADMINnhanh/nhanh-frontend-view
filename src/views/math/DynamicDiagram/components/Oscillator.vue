<script setup lang="ts">
import {
  _Animate_CreateOscillator,
  _Browser_GetFrameRate,
  _Canvas,
} from "nhanh-pure-function";
import { onBeforeUnmount, ref, watch } from "vue";
import { NButton, NIcon, NSlider } from "naive-ui";
import {
  PauseCircleOutline,
  PlayCircleOutline,
  RefreshCircleOutline,
} from "@vicons/ionicons5";
import Media from "@/stores/media";
import SvgGather from "@/assets/icon/gather";

interface Props {
  canvas?: _Canvas;
  value: number;
  marks: Record<string, string>;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  reverse?: boolean;
  Tips?: () => void;
}
const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
});

interface Emits {
  (e: "update:value", value: number): void;
  (e: "change"): void;
}
const emit = defineEmits<Emits>();

const isPlay = ref(false);

const oscillator = _Animate_CreateOscillator(props.min, props.max, 300, (v) => {
  emit("update:value", v);
  emit("change");
});

Media.value.fpsCallback((fps) => {
  oscillator.updateParams(props.min, props.max, (fps / 60) * 300);
});

function UpdatePlay() {
  isPlay.value = !isPlay.value;

  if (isPlay.value) oscillator.play(props.value);
  else oscillator.pause();
}

watch(
  () => props.disabled,
  (disabled) => {
    if (disabled && isPlay.value) UpdatePlay();
  }
);

onBeforeUnmount(() => {
  oscillator.pause();
});
</script>

<template>
  <div :class="['oscillator', disabled && 'disabled']">
    <slot></slot>
    <NButton
      v-if="Tips"
      quaternary
      circle
      type="success"
      style="font-size: 24px"
      @click="Tips"
    >
      <SvgGather icon="Bulb" />
    </NButton>
    <NButton
      quaternary
      circle
      style="font-size: 24px"
      @click="canvas?.returnToOrigin()"
    >
      <NIcon :component="RefreshCircleOutline" />
    </NButton>
    <NButton
      quaternary
      circle
      :type="isPlay ? 'primary' : 'default'"
      style="font-size: 24px"
      @click="UpdatePlay()"
    >
      <NIcon :component="isPlay ? PauseCircleOutline : PlayCircleOutline" />
    </NButton>
    <NSlider
      @update:value="
        (v) => {
          emit('update:value', v);
          emit('change');
        }
      "
      :="{ value, marks, min, max, step, reverse }"
      :vertical="!Media.isMobileStyle"
    />
  </div>
</template>

<style scoped lang="less">
.oscillator {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-right: 10px;
  > :not(:last-child) {
    margin-bottom: 10px;
  }
  .n-slider {
    width: 20px;
    height: 100px;
    flex-grow: 1;
  }
}
.disabled.oscillator {
  pointer-events: none;
  opacity: 0.7;
}
.is-mobile .oscillator {
  flex-direction: row;
  height: auto;
  .n-slider {
    height: auto;
    width: auto;
  }
}
</style>
