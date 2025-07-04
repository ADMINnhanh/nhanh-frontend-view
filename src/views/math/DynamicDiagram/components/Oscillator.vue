<script setup lang="ts">
import { _Animate_CreateOscillator } from "nhanh-pure-function";
import _Canvas from "@/views/canvas/_Canvas/_Canvas";
import { onBeforeUnmount, ref, watch } from "vue";
import { NButton, NIcon, NSlider } from "naive-ui";
import {
  PauseCircleOutline,
  PlayCircleOutline,
  RefreshCircleOutline,
} from "@vicons/ionicons5";
import Media from "@/stores/media";

interface Props {
  canvas?: _Canvas;
  value: number;
  marks: Record<string, string>;
  min?: number;
  max?: number;
  disabled?: boolean;
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
      :="{ value, marks, min, max }"
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
