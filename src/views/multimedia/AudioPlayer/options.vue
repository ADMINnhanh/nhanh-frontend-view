<script lang="ts" setup>
import {
  NInputGroup,
  NInputGroupLabel,
  NInputNumber,
  NSelect,
  NSlider,
  NH3,
  NText,
  NSwitch,
} from "naive-ui";
import { Endianness } from ".";

const volume = defineModel<number>("volume", { required: true });

const lfeMix = defineModel<LfeMix>("lfeMix", { required: true });
const options = defineModel<Partial<PCMPlayOptions>>("options", {
  required: true,
});
</script>

<template>
  <div class="options-panel">
    <slot name="prefix" />
    <NH3 prefix="bar" type="info" style="margin: 10px 0">
      <div class="options-panel">
        <NText type="info">
          <NText type="warning">LFE 混合</NText>
          作用于 MP3 / WAV 解析为 PCM 的过程
        </NText>
        <NInputGroup>
          <NInputGroupLabel>启用</NInputGroupLabel>
          <NSwitch v-model:value="lfeMix.enable" />
        </NInputGroup>
        <NInputGroup>
          <NInputGroupLabel>输出声道</NInputGroupLabel>
          <NSelect
            v-model:value="lfeMix.channelCount"
            :options="[
              { label: '单声道 (1)', value: 1 },
              { label: '立体声 (2)', value: 2 },
            ]"
          />
        </NInputGroup>
        <NInputGroup>
          <NInputGroupLabel>混合级别</NInputGroupLabel>
          <NSlider
            v-model:value="lfeMix.level"
            :min="0"
            :max="3"
            :step="0.01"
          />
        </NInputGroup>
      </div>
    </NH3>

    <NH3 prefix="bar" type="info" style="margin: 10px 0">
      <div class="options-panel">
        <NText type="info"> 作用于 PCM 的解析 </NText>
        <NInputGroup>
          <NInputGroupLabel>采样率</NInputGroupLabel>
          <NSelect
            v-model:value="options.sampleRate"
            :options="
              [8000, 16000, 22050, 24000, 44100, 48000, 96000, 192000].map(
                (v) => ({
                  label: String(v),
                  value: v,
                })
              )
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
          <NInputGroupLabel>采样格式</NInputGroupLabel>
          <NSelect
            v-model:value="options.sampleFormat"
            :options="[
              { label: '整数', value: 'int' },
              { label: '浮点数', value: 'float' },
            ]"
          />
        </NInputGroup>
        <NInputGroup>
          <NInputGroupLabel>音量</NInputGroupLabel>
          <NSlider v-model:value="volume" :min="0" :max="1" :step="0.01" />
        </NInputGroup>
      </div>
    </NH3>

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
    .n-slider,
    .n-switch {
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
    width: 80px;
  }
}
</style>
