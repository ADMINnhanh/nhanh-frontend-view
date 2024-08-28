<script setup lang="ts">
import {
  PopupItems,
  deletePopup,
  setPopupConfig,
} from "@/components/popups/popups";

// 隐藏弹窗
function closure(zIndex: number) {
  setPopupConfig({ zIndex, show: false });
}
// 在弹窗隐藏后删除该弹窗
function dele(zIndex: number) {
  let data = PopupItems.value.find((item) => item.zIndex == zIndex);
  if (data && !data.show) deletePopup(zIndex);
}
</script>

<template>
  <div class="popups-gather">
    <Transition
      v-for="item in PopupItems"
      :key="item.zIndex"
      :name="item.transition"
      @after-leave="dele(item.zIndex)"
    >
      <component
        v-show="item.show"
        :is="item.component"
        @closure="closure(item.zIndex)"
        :style="{ zIndex: item.zIndex }"
        :zIndex="item.zIndex"
        :data-zIndex="item.zIndex"
        :="item.data"
      />
    </Transition>
  </div>
</template>

<style>
/* 淡入淡出  提供 fade-in-linear 和 fade-in 两种效果  https://element.eleme.io/#/zh-CN/component/transition */
.fade-in-linear-enter-active,
.fade-in-linear-leave-active {
  transition: opacity 0.2s linear;
}

.fade-in-linear-enter-from,
.fade-in-linear-leave-to {
  opacity: 0;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}

/* 缩放  提供 zoom-in-center，zoom-in-top 和 zoom-in-bottom 三种效果。 */
.zoom-in-center-enter-active,
.zoom-in-center-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.zoom-in-center-enter-from,
.zoom-in-center-leave-to {
  opacity: 0;
  transform: scaleX(0);
}

.zoom-in-top-enter-active,
.zoom-in-top-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}

.zoom-in-top-enter-from,
.zoom-in-top-leave-to {
  opacity: 0;
  transform: scaleY(0);
}

.zoom-in-bottom-enter-active,
.zoom-in-bottom-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center bottom;
}

.zoom-in-bottom-enter-from,
.zoom-in-bottom-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
</style>
