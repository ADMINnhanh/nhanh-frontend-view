<script setup lang="ts">
import {
  NButton,
  NCard,
  NIcon,
  NInput,
  NInputGroup,
  NScrollbar,
  NSpace,
  NText,
} from "naive-ui";
import {
  peerID,
  destPeerID,
  logMessage,
  videoEl,
  ConnectToPeer,
  scrollbarRef,
  scrollbarHover,
} from ".";
import { CallOutline } from "@vicons/ionicons5";
import { _CopyToClipboard, _Tip } from "nhanh-pure-function";
import ResponsiveDirectionLayout from "@/components/layout/ResponsiveDirectionLayout.vue";
</script>

<template>
  <ResponsiveDirectionLayout>
    <template #left>
      <NSpace class="left-space" vertical>
        <NText
          @click="
            _Tip
              .success('已复制 Peer ID')
              .error('复制 Peer ID 失败')
              .run(_CopyToClipboard(peerID))
          "
        >
          我的 Peer ID (点击复制): {{ peerID }}
        </NText>
        <NInputGroup>
          <NInput
            v-model:value="destPeerID"
            clearable
            placeholder="请输入对方 Peer ID"
          />
          <NButton @click="ConnectToPeer">
            <template #icon>
              <NIcon :component="CallOutline" />
            </template>
            呼叫
          </NButton>
        </NInputGroup>
        <NCard
          @mouseenter="scrollbarHover = true"
          @mouseleave="scrollbarHover = false"
          size="small"
        >
          <NScrollbar ref="scrollbarRef">
            <NSpace vertical>
              <NText
                v-for="(item, index) in logMessage"
                :key="index"
                :type="item[0]"
                >{{ item[1] }}</NText
              >
            </NSpace>
          </NScrollbar>
        </NCard>
      </NSpace>
    </template>
    <template #right>
      <video ref="videoEl" autoplay></video>
    </template>
  </ResponsiveDirectionLayout>
</template>

<style scoped lang="less">
video {
  width: 100%;
  height: 100%;
}

.left-space {
  height: 100%;
  > *:nth-child(3) {
    height: 100px;
    flex-grow: 1;
    > .n-card {
      height: 100%;
      :deep(.n-card__content) {
        height: 100%;
      }
    }
  }
}
</style>
