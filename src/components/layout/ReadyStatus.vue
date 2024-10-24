<script setup lang="ts">
interface PropsType {
  status: boolean | "error";
}
const props = defineProps<PropsType>();
</script>

<template>
  <div :class="['ready-status', props.status === false && 'loading']">
    <slot v-if="props.status === true"></slot>
    <div v-else-if="props.status === false" class="tips">
      正在加载模块所需资源 <span>.</span><span>.</span><span>.</span>
    </div>
    <div v-else class="tips">资源加载失败，请刷新重试</div>
  </div>
</template>

<style lang="less" scoped>
.ready-status {
  width: 100%;
  height: 100%;
}
@keyframes loadingDotsAnimation {
  0% {
    transform: translateY(0);
  }

  30% {
    transform: translateY(-5px);
  }

  60% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
  }
}
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
  .tips {
    font-size: 16px;
    color: var(--text-color);
    span {
      display: inline-block;
      animation: loadingDotsAnimation 1.6s linear infinite;
      &:nth-of-type(2) {
        animation-delay: 0.2s;
      }
      &:nth-of-type(3) {
        animation-delay: 0.4s;
      }
    }
  }
}
</style>
