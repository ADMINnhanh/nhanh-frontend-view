import { _GenerateUUID } from "nhanh-pure-function";
import { DrawAxisAndGrid } from "./AxisAndGrid";
import { shallowRef, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";

export const id = "canvas-" + _GenerateUUID();
class BaseData {
  /** 画布元素 */
  canvas = {} as HTMLCanvasElement;
  /** 画布上下文 */
  ctx = {} as CanvasRenderingContext2D;
  /** 画布宽度 */
  width = 0;
  /** 画布高度 */
  height = 0;
  /** 画布偏移量 */
  offset = { x: 0, y: 0 };
  /** 画布中心点 */
  centent = { x: 0, y: 0 };
  /** 缩放比例 */
  scale = 1;
  /** 网格大小 */
  gridSize = { min: 75, max: 200, size: 75 };
  /** 滚动10次一个周期 */
  cycle = 10;
  /** 滚轮滚动的值 */
  delta = 0.05;
  /** 是否在下一个渲染帧进行重绘 */
  redrawInNextRenderFrame = false;
  constructor() {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
  }
  updateCanvas() {
    const { ctx, width, height, offset } = this;
    ctx?.clearRect(0, 0, width, height);
    this.centent = {
      x: width / 2 + offset.x,
      y: height / 2 + offset.y,
    };
    DrawAxisAndGrid();
  }
  redraw() {
    if (!this.redrawInNextRenderFrame) {
      this.redrawInNextRenderFrame = true;
      requestAnimationFrame(() => {
        this.updateCanvas();
        this.redrawInNextRenderFrame = false;
      });
    }
  }
  updateScale(scaleOffset: number | boolean) {
    const { cycle, delta, gridSize, scale } = this;

    if (typeof scaleOffset === "boolean")
      scaleOffset = scaleOffset ? delta : -delta;
    this.scale += scaleOffset;

    let size = (Math.abs(scale - 1) % (cycle * delta)) / delta;
    size = Math.round(scale < 1 ? cycle - size : size);

    gridSize.size =
      (size / cycle) * (gridSize.max - gridSize.min) + gridSize.min;

    this.redraw();
  }
  updateCanvasSize() {
    const { canvas } = this;
    const { clientWidth, clientHeight } = canvas;
    canvas.width = clientWidth;
    canvas.height = clientHeight;
    this.width = clientWidth;
    this.height = clientHeight;
    this.redraw();
  }
  updateOffset(offset: { x: number; y: number }) {
    this.offset.x += offset.x;
    this.offset.y += offset.y;
    this.redraw();
  }
}

export const baseData = shallowRef<BaseData>();

export function Init() {
  baseData.value = new BaseData();
  baseData.value.updateCanvasSize();
}

watch(
  () => Settings.value.theme,
  () => baseData.value?.redraw()
);

/** 放大 */
export function ZoomIn() {
  baseData.value?.updateScale(0.1);
}
/** 缩小 */
export function ZoomOut() {
  baseData.value?.updateScale(-0.1);
}
