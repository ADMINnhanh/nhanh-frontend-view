<script setup lang="ts">
import { NButton, NIcon } from "naive-ui";
import { ChevronBack, ChevronForward } from "@vicons/ionicons5";
import Scroll from "@/components/SingleFile/Scroll.vue";
import { computed, ref } from "vue";
import { _GenerateUUID, _Schedule } from "nhanh-pure-function";

type PropsType = {
  trigger: "vertical" | "horizontal";
  list: {
    id: number;
    activated: boolean;
    [key: string]: any;
  }[];
};
const props = defineProps<PropsType>();

/** 可否前进 */
const canNext = computed(() => {
  return props.list.findIndex((item) => item.activated) < props.list.length - 1;
});
/** 可否后退 */
const canBack = computed(() => {
  return props.list.findIndex((item) => item.activated) > 0;
});

/** 是否正在移动滚动条中 */
const isMoving = ref(false);

const id = "id-" + _GenerateUUID();
function MoveSrcoll() {
  const scrollDom = document.querySelector(
    `#` + id + ` .scroll >div`
  ) as HTMLElement;
  const activatedDom = document.querySelector(
    `#` + id + ` .scroll .item.activated`
  ) as HTMLElement;
  if (scrollDom && activatedDom) {
    const srcollRect = scrollDom.getBoundingClientRect();
    const activatedRect = activatedDom.getBoundingClientRect();

    /** 富裕宽高 */
    const RichSize = 50;

    const changeScroll = (
      trigger: "vertical" | "horizontal",
      offset: number
    ) => {
      isMoving.value = true;
      /** 已移动距离 */
      let moved = 0;
      _Schedule((schedule: number) => {
        if (trigger == "vertical") {
          let newSrcollMoved = scrollDom.scrollTop + schedule * offset - moved;
          newSrcollMoved = Math.min(
            Math.max(0, newSrcollMoved),
            srcollRect.height
          );
          scrollDom.scrollTop = newSrcollMoved;
        } else {
          let newSrcollMoved = scrollDom.scrollLeft + schedule * offset - moved;
          newSrcollMoved = Math.min(
            Math.max(0, newSrcollMoved),
            srcollRect.width
          );
          scrollDom.scrollLeft = newSrcollMoved;
        }
        moved = schedule * offset;

        if (schedule == 1) isMoving.value = false;
      }, 300);
    };
    const vertical = () => {
      /** 存于上侧 */
      const isTop = activatedRect.y - RichSize < srcollRect.y;
      /** 存于下侧 */
      const isBottom =
        activatedRect.y > srcollRect.y + srcollRect.height - RichSize;

      if (isTop) {
        const offset = srcollRect.y - activatedRect.y + RichSize;
        changeScroll("vertical", -offset);
      } else if (isBottom) {
        const offset =
          activatedRect.y +
          activatedRect.height -
          srcollRect.y -
          srcollRect.height +
          RichSize;
        changeScroll("vertical", offset);
      }
    };
    const horizontal = () => {
      /** 存于左侧 */
      const isLeft = activatedRect.x - RichSize < srcollRect.x;

      /** 存于右侧 */
      const isRight =
        activatedRect.x > srcollRect.x + srcollRect.width - RichSize;

      if (isLeft) {
        const offset = srcollRect.x - activatedRect.x + RichSize;
        changeScroll("horizontal", -offset);
      } else if (isRight) {
        const offset =
          activatedRect.x +
          activatedRect.width -
          srcollRect.x -
          srcollRect.width +
          RichSize;

        changeScroll("horizontal", offset);
      }
    };

    props.trigger == "vertical" ? vertical() : horizontal();
  }
}
/** 前进或后退 */
function NextOrBack(type: "next" | "back") {
  const activatedIndex = props.list.findIndex((item) => item.activated);
  if (activatedIndex == -1) {
    props.list[0].activated = true;
  } else if (type == "next" && canNext.value) {
    props.list[activatedIndex + 1].activated = true;
    props.list[activatedIndex].activated = false;
  } else if (type == "back" && canBack.value) {
    props.list[activatedIndex - 1].activated = true;
    props.list[activatedIndex].activated = false;
  }
  requestAnimationFrame(MoveSrcoll);
}

function ItemClickEvent(item: any) {
  props.list.forEach((listItem) => {
    listItem.activated = listItem.id == item.id ? !listItem.activated : false;
  });
  requestAnimationFrame(MoveSrcoll);
}
</script>

<template>
  <div
    :id="id"
    :class="['select-item-list', props.trigger, isMoving && 'moving']"
  >
    <NButton
      ghost
      class="before"
      :disabled="!canBack"
      @click="NextOrBack('back')"
    >
      <NIcon size="20" :component="ChevronBack" />
    </NButton>
    <Scroll class="scroll">
      <div
        v-for="item in props.list"
        :key="item.id"
        :class="['item', item.activated && 'activated']"
        @click="ItemClickEvent(item)"
      >
        <slot :item="item"></slot>
      </div>
      <div
        :style="{
          height: props.trigger == 'vertical' ? '5px' : 'auto',
          width: props.trigger == 'vertical' ? 'auto' : '5px',
          'flex-shrink': 0,
        }"
      ></div>
    </Scroll>
    <NButton
      ghost
      class="after"
      :disabled="!canNext"
      @click="NextOrBack('next')"
    >
      <NIcon size="20" :component="ChevronForward" />
    </NButton>
  </div>
</template>

<style lang="less" scoped>
.moving {
  pointer-events: none;
}
.vertical {
  flex-direction: column;
  .before,
  .after {
    width: 100%;
  }
  .before .n-icon {
    transform: rotate(90deg);
  }
  .after .n-icon {
    transform: rotate(90deg);
  }
  .scroll {
    margin: 10px 0;
    height: 100px;
    width: 100%;

    :deep(.moduls-scroll) {
      > div {
        width: 100%;
        flex-direction: column;
        .item {
          width: 100%;
          margin-bottom: 10px;
          &:nth-last-child(2) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
.horizontal {
  .before,
  .after {
    height: 100%;
  }
  .scroll {
    margin: 0 10px;
    width: 100px;
    height: 100%;
    :deep(.moduls-scroll) {
      > div {
        height: 100%;
        .item {
          height: 100%;
          margin-right: 10px;

          &:nth-last-child(2) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
.select-item-list {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .scroll {
    flex-grow: 1;
    :deep(.moduls-scroll) {
      > div {
        display: flex;
        padding: 5px;

        .item {
          display: flex;
          cursor: pointer;
        }
        @keyframes activated {
          0% {
            box-shadow: 0 0 3px 3px #345cff63;
          }
          50% {
            box-shadow: 0 0 3px 3px #345cff;
          }
          100% {
            box-shadow: 0 0 3px 3px #345cff63;
          }
        }
        .activated {
          animation: activated 2s linear infinite;
        }
      }
    }
  }
}
</style>
