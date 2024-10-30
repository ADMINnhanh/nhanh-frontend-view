<script setup lang="ts">
import { _GenerateUUID, _Schedule } from "nhanh-pure-function";
import { onUnmounted, ref } from "vue";
/** 鼠标速度 */
const speed = ref({ x: 0, y: 0 });
/** 鼠标 X */
const x = ref();
/** 鼠标 Y */
const y = ref();
/** 是否按下了 */
const pressed = ref();

const maxPosition = { x: 0, y: 0 };
requestAnimationFrame(() => {
  const dom = document.querySelector(".speed-nhanh");
  if (dom) {
    maxPosition.x = dom.clientWidth - 100;
    maxPosition.y = dom.clientHeight - 100;
  }
});
const position = ref({ x: 0, y: 0 });
const positionOld = { x: 0, y: 0 };

/** 继续移动时间 */
const time = 1000 * 1.2;
let moveId = "";
/** 继续移动 */
function ContinueMove(id: string) {
  /** 方向 */
  const direction = {
    x: positionOld.x < x.value ? 1 : -1,
    y: positionOld.y < y.value ? 1 : -1,
  };

  let _speed = { x: speed.value.x, y: speed.value.y };
  const _moveId = id;

  _Schedule((schedule) => {
    if (moveId != _moveId) return;
    const x = (1 - schedule) * _speed.x;
    const y = (1 - schedule) * _speed.y;

    position.value.x += x * direction.x;
    position.value.y += y * direction.y;

    if (position.value.x >= maxPosition.x || position.value.x <= 0) {
      _speed.x /= 2;
      direction.x *= -1;
    }
    if (position.value.y >= maxPosition.y || position.value.y <= 0) {
      _speed.y /= 2;
      direction.y *= -1;
    }

    position.value.x = Math.min(Math.max(position.value.x, 0), maxPosition.x);
    position.value.y = Math.min(Math.max(position.value.y, 0), maxPosition.y);
  }, time);
}

/** 鼠标按下 */
function Mousedown(payload: MouseEvent) {
  document.body.classList.add("no-select");
  pressed.value = true;
  moveId = "";
  x.value = payload.clientX;
  y.value = payload.clientY;
}
/** 鼠标松开 */
function Mouseup(payload: MouseEvent) {
  if (!pressed.value) return;
  document.body.classList.remove("no-select");
  pressed.value = false;

  x.value = payload.clientX;
  y.value = payload.clientY;

  moveId = _GenerateUUID();
  ContinueMove(moveId);
}
/** 鼠标移动 */
function Mousemove(payload: MouseEvent) {
  if (!pressed.value) return;
  speed.value.x = Math.abs(payload.clientX - x.value);
  speed.value.y = Math.abs(payload.clientY - y.value);

  position.value.x += payload.clientX - x.value;
  position.value.y += payload.clientY - y.value;
  position.value.x = Math.min(Math.max(position.value.x, 0), maxPosition.x);
  position.value.y = Math.min(Math.max(position.value.y, 0), maxPosition.y);

  positionOld.x = x.value;
  positionOld.y = y.value;

  x.value = payload.clientX;
  y.value = payload.clientY;
}

window.addEventListener("mouseup", Mouseup);
window.addEventListener("mousemove", Mousemove);
onUnmounted(() => {
  window.removeEventListener("mouseup", Mouseup);
  window.removeEventListener("mousemove", Mousemove);
});
</script>

<template>
  <div class="speed-nhanh" @mousedown="Mousedown">
    <img
      src="/nhanh.ico"
      alt=""
      :style="{ top: `${position.y}px`, left: `${position.x}px` }"
    />
  </div>
</template>

<style lang="less" scoped>
.speed-nhanh {
  width: 100%;
  height: 100%;
  background-color: var(--active-hover) !important;
  img {
    position: relative;
    width: 100px;
    height: 100px;
  }
}
</style>
