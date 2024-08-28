<script setup lang="ts">
import { computed, ref } from "vue";

type PropsType = {
  dataList: any[];
  width: number[]; //
};

const Props = defineProps<PropsType>();

const listBoxHeaderRef = ref();
function updateListBoxHeader() {
  const dom = listBoxHeaderRef.value as HTMLElement;
  if (dom) {
    const scrollDom = dom.closest(".moduls-scroll") as HTMLElement;
    if (!scrollDom) return;
    scrollDom.addEventListener("scroll", () =>
      dom.style.setProperty("top", scrollDom.scrollTop + "px")
    );
  }
}
requestAnimationFrame(updateListBoxHeader);

const ListBoxStyle = computed(() => {
  const style = {} as any;
  Props.width.map((item, index) => {
    style["--width-" + (index + 1)] = item + "%";
  });
  return style;
});
</script>

<template>
  <div class="list-box" :style="ListBoxStyle">
    <header ref="listBoxHeaderRef">
      <slot name="header"></slot>
    </header>
    <div v-for="item in Props.dataList" :key="item.id" class="item">
      <slot name="item" :item="item"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.list-box {
  padding: 40px 0 0;
  position: relative;
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #f0f1f2;
    padding: 10px 20px;
    z-index: 1;

    display: flex;
    align-items: center;
  }
  header,
  .item {
    display: flex;
    align-items: center;
  }
  .item {
    padding: 18px 20px;
    background-color: transparent;
    transition: background-color 0.3s;
    &:hover {
      background-color: #aff3ff5e;
    }
  }
  .generate-widths(@index) when (@index > 0) {
    header,
    .item {
      > *:nth-child(@{index}) {
        width: ~"var(--width-@{index})";
      }
    }
    .generate-widths(@index - 1);
  }

  .generate-widths(30);
}
</style>
