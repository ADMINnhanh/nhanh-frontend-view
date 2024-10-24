import { ref } from "vue";
import { UpdateCanvas, baseData } from ".";

const mouseInCanvas = ref(false);

/** 鼠标移入 */
export function MouseInCanvas() {
  mouseInCanvas.value = true;
}
/** 鼠标移出 */
export function MouseOutCanvas() {
  mouseInCanvas.value = false;
}
/** 鼠标滚轮滚动 */
function HandleWheel(event: WheelEvent) {
  if (!mouseInCanvas.value) return;

  /** 滚动10次一个周期 */
  const cycle = 10;
  /** 滚轮滚动的值 */
  const delta = 0.05;

  if (event.deltaY < 0) {
    baseData.scale += delta;
  } else {
    baseData.scale -= delta;
  }

  let size = (Math.abs(baseData.scale - 1) % (cycle * delta)) / delta;
  size = Math.round(baseData.scale < 1 ? cycle - size : size);

  baseData.gridSize.size =
    (size / cycle) * (baseData.gridSize.max - baseData.gridSize.min) +
    baseData.gridSize.min;

  UpdateCanvas();
}

window.addEventListener("wheel", HandleWheel);
