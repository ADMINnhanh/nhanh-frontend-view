<script setup lang="ts">
import { _ScrollEndListener } from "nhanh-pure-function";
import { ref } from "vue";

type PropsType = {
  dynamic?: boolean;
};
const Props = defineProps<PropsType>();

type EmitsType = {
  (e: "bottomReached", trigger: "vertical" | "horizontal"): void;
};
const emits = defineEmits<EmitsType>();

const ScrollDom = ref<HTMLElement>();

function HasVerticalScrollbar() {
  const scrollDom = ScrollDom.value;
  function MergeDuplicateCode() {
    if (scrollDom) {
      const paddingRight =
        scrollDom.clientHeight < scrollDom.scrollHeight
          ? "var(--moduls-scroll-padding)"
          : "0";
      scrollDom.style.paddingRight = paddingRight;

      const paddingBottom =
        scrollDom.clientWidth < scrollDom.scrollWidth
          ? "var(--moduls-scroll-padding)"
          : "0";
      scrollDom.style.paddingBottom = paddingBottom;
    }
  }
  if (!scrollDom) {
    requestAnimationFrame(HasVerticalScrollbar);
  } else {
    MergeDuplicateCode();
    if (Props.dynamic) {
      const observer = new ResizeObserver(MergeDuplicateCode);
      observer.observe(scrollDom);
    }
  }
}
HasVerticalScrollbar();

const onScroll = _ScrollEndListener((trigger) =>
  emits("bottomReached", trigger)
);
</script>

<template>
  <section class="moduls-scroll-section">
    <div ref="ScrollDom" class="moduls-scroll" @scroll="onScroll">
      <div><slot></slot></div>
    </div>
  </section>
</template>

<style scoped lang="less">
.moduls-scroll-section {
  box-sizing: border-box;
  .moduls-scroll {
    transition: padding-right 0.3s ease 0s, padding-bottom 0.3s ease 0s;
    will-change: width, height, padding-right, padding-bottom;
  }
}
</style>
