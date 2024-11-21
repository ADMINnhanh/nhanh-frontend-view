import { DrawAxisAndGrid } from "./AxisAndGrid";
import { shallowRef, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { _Schedule, _Throttle } from "nhanh-pure-function";

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
  /** 监听元素大小 */
  resizeObserver = new ResizeObserver(
    _Throttle(() => this.updateCanvasSize(), 300)
  );
  /** 是否正在复位 */
  isResetting = false;
  constructor(id: string) {
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.resizeObserver.observe(canvas);
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
  updateScale(scaleOffset: number | boolean, isReset?: boolean) {
    if (!isReset && this.isResetting) this.isResetting = false;

    const { cycle, delta, gridSize } = this;

    if (typeof scaleOffset === "boolean")
      scaleOffset = scaleOffset ? delta : -delta;
    this.scale += scaleOffset;

    let size = (Math.abs(this.scale - 1) % (cycle * delta)) / delta;
    size = Math.round(this.scale < 1 ? cycle - size : size);

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
  updateOffset(offset: { x: number; y: number }, isReset?: boolean) {
    if (!isReset && this.isResetting) this.isResetting = false;

    this.offset.x += offset.x;
    this.offset.y += offset.y;
    this.redraw();
  }
  reset() {
    this.isResetting = true;
    const time = 1000;
    const waitResetData = {
      offset: { ...this.offset },
      scale: this.scale - 1,
    };

    _Schedule((schedule) => {
      if (!this.isResetting) return;

      if (schedule === 1) {
        this.offset = { x: 0, y: 0 };
        this.scale = 1;
        this.updateScale(0);
        this.isResetting = false;
      } else if (schedule > 0) {
        schedule = 1 - schedule;
        this.offset = {
          x: waitResetData.offset.x * schedule,
          y: waitResetData.offset.y * schedule,
        };
        this.scale = 1 + waitResetData.scale * schedule;
        this.updateScale(0, true);
      }
    }, time);
  }

  destroy() {
    this.resizeObserver.disconnect();
  }
}

export const baseData = shallowRef<BaseData>();

export function Init(id: string) {
  baseData.value = new BaseData(id);
  baseData.value.updateCanvasSize();
}

watch(
  () => Settings.value.theme,
  () => baseData.value?.redraw()
);
