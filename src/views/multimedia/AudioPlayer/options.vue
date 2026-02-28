<script lang="ts" setup>
import {
  NInputGroup,
  NInputGroupLabel,
  NInputNumber,
  NSelect,
  NSlider,
} from "naive-ui";
import { Endianness } from ".";

const volume = defineModel<number>("volume", { required: true });
const options = defineModel<Partial<PCMPlayOptions>>("options", {
  required: true,
});
</script>

<template>
  <div class="options-panel">
    <slot name="prefix" />
    <NInputGroup>
      <NInputGroupLabel>采样率</NInputGroupLabel>
      <NSelect
        v-model:value="options.sampleRate"
        :options="
          [8000, 16000, 22050, 24000, 44100, 48000, 96000, 192000].map((v) => ({
            label: String(v),
            value: v,
          }))
        "
      />
      <NInputGroupLabel>Hz</NInputGroupLabel>
    </NInputGroup>
    <NInputGroup>
      <NInputGroupLabel>位深</NInputGroupLabel>
      <NSelect
        v-model:value="options.bitDepth"
        :options="
          [8, 16, 24, 32, 64].map((v) => ({ label: String(v), value: v }))
        "
      />
      <NInputGroupLabel>bit</NInputGroupLabel>
    </NInputGroup>
    <NInputGroup>
      <NInputGroupLabel>声道数</NInputGroupLabel>
      <NInputNumber
        v-model:value="options.channelCount"
        :min="1"
        :precision="0"
      />
      <NInputGroupLabel>ch</NInputGroupLabel>
    </NInputGroup>
    <NInputGroup>
      <NInputGroupLabel>字节序</NInputGroupLabel>
      <NSelect
        v-model:value="options.endianness"
        :options="[
          { label: '小端序', value: Endianness.LE },
          { label: '大端序', value: Endianness.BE },
        ]"
      />
    </NInputGroup>
    <NInputGroup>
      <NInputGroupLabel>音量</NInputGroupLabel>
      <NSlider v-model:value="volume" :min="0" :max="1" :step="0.01" />
    </NInputGroup>
    <slot name="suffix" />
  </div>
</template>

<style scoped lang="less">
.options-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  .n-input-group {
    align-items: center;
    .n-slider {
      margin-left: 10px !important;
    }
  }
  .n-select,
  .n-input-number {
    text-align: center;
    flex-grow: 1;
  }
  .n-input-group-label {
    text-align: center;
    width: 70px;
  }
}
</style>
