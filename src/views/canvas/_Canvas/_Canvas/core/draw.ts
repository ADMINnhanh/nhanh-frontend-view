import { _Debounce, _Throttle } from "nhanh-pure-function";
import Style from "./style";
import _Canvas, { _TimeConsumption } from "..";
import type { Overlay } from "../OverlayGroup";

import Custom from "../OverlayGroup/custom";
import Text from "../OverlayGroup/text";
import Point from "../OverlayGroup/point";
import Line from "../OverlayGroup/line";
import Polygon from "../OverlayGroup/polygon";

type ThrowsProperty<T extends keyof _Canvas = keyof _Canvas> = {
  keys: T[];
  get: (data: Record<T, _Canvas[T]>) => void;
};

/** 绘制方法 */
export default class Draw extends Style {
  /** 监听元素大小 */
  private resizeObserver?: ResizeObserver;
  /** 本次绘制的覆盖物 */
  protected currentDrawOverlays: Overlay[] = [];

  /** 计算坐标所需依赖 */
  rely = "";
  /** 是否需要重新计算坐标 */
  isRecalculate = false;

  /** 抛出属性 */
  throwsProperty?: ThrowsProperty;

  constructor(id: string) {
    super(id);
    if (this.canvas) {
      this.resizeObserver = new ResizeObserver(
        _Debounce(() => {
          const rect = this.rect!.value;
          [this.canvas.width, this.canvas.height] = [rect.width, rect.height];
          this.redrawOnce();
        }, 200)
      );
      this.resizeObserver.observe(this.canvas);
    }
    this.updateRely();
    this.isRecalculate = false;
  }

  /** 更新 计算坐标所需依赖 */
  private updateRely() {
    const { center, scale, rect, axisConfig } = this;

    const newRely = [
      center.x,
      center.y,
      scale,
      JSON.stringify(axisConfig),
      rect!.value.width,
      rect!.value.height,
    ].join();
    this.isRecalculate = this.rely !== newRely;
    this.rely = newRely;
  }

  /** 获取最大/小的 值 */
  maxMinValue = {
    minXV: 0,
    maxXV: 0,
    minYV: 0,
    maxYV: 0,
  };

  /** 重绘画布 */
  private redraw() {
    if (!this.canvas) return console.error("canvas is not HTMLCanvasElement");
    if (this.canvas.clientWidth == 0 || this.canvas.clientHeight == 0)
      return console.error(
        "The image argument is a canvas element with a width or height of 0."
      );

    this.updateCenter();

    this.updateRely();

    this.maxMinValue = this.getMaxMinValue();

    this.clearScreen();

    /** 本次绘制的覆盖物 */
    const currentDrawOverlays: [[number, number], Overlay][] = [];
    let canvasArr: [
      number,
      HTMLCanvasElement | (() => void),
      [[number, number], Overlay][]
    ][] = [[0, () => this.drawAxis?.drawAxisAndGrid(), []]];
    this.layerGroups.forEach(
      (layerGroup) => (canvasArr = canvasArr.concat(layerGroup.fetchCanvas()))
    );
    canvasArr.sort((a, b) => a[0] - b[0]);
    canvasArr.forEach(([, canvas, overlays], index) => {
      if (typeof canvas === "function") canvas();
      else this.ctx.drawImage(canvas, 0, 0);

      overlays.forEach(([[layerZIndex, overlayZIndex], overlay]) => {
        currentDrawOverlays.push([
          [layerZIndex + index, overlayZIndex],
          overlay,
        ]);
      });
    });

    // 排序
    currentDrawOverlays.sort(
      (
        [[aLayerZIndex, aOverlayZIndex], aOverlay],
        [[bLayerZIndex, bOverlayZIndex], bOverlay]
      ) => {
        // 首先比较图层 z-index
        if (aLayerZIndex !== bLayerZIndex) return bLayerZIndex - aLayerZIndex;

        // 然后比较覆盖层的z-index
        if (aOverlayZIndex !== bOverlayZIndex)
          return bOverlayZIndex - aOverlayZIndex;

        // 最后比较覆盖类型优先级
        const getPriority = (overlay: any) => {
          if (overlay instanceof Custom) return 0;
          if (overlay instanceof Text) return 1;
          if (overlay instanceof Point) return 2;
          if (overlay instanceof Line) return 3;
          if (overlay instanceof Polygon) return 4;
          return 5; // 默认优先级
        };

        return getPriority(bOverlay) - getPriority(aOverlay);
      }
    );

    // 将分组结果转换为 Overlay[] 结构
    this.currentDrawOverlays = currentDrawOverlays.map(
      ([, overlay]) => overlay
    );

    this.isRecalculate = false;
    this.isThemeUpdated = false;

    if (this.throwsProperty) {
      const { keys, get } = this.throwsProperty;
      const obj = {} as any;
      /** @ts-ignore */
      keys.forEach((key) => (obj[key] = this[key]));
      get(obj);
    }
  }

  /** 测量重绘性能 */
  private measureRedrawPerformance = _TimeConsumption(
    () => this.redraw(),
    [
      [1, "#F56C6C"],
      [0.5, "#E6A23C"],
      [0, "#67C23A"],
    ]
  );

  /** 重绘画布 同一个渲染帧只会执行一次 */
  redrawOnce(isAuto?: boolean) {
    if (this.isAuto && !isAuto) this.isAuto = false;

    if (!this.redrawInNextRenderFrame) {
      this.redrawInNextRenderFrame = true;
      requestAnimationFrame(() => {
        this.redrawInNextRenderFrame = false;
        this.measureRedrawPerformance();
        // this.redraw();
      });
    }
  }

  /** 根据坐标查找覆盖物 */
  protected findOverlayByPoint(x: number, y: number) {
    return this.currentDrawOverlays.find((overlay) =>
      overlay.isPointInAnywhere(x, y)
    );
  }

  /** 销毁resizeObserver监听器 */
  destroy() {
    this.resizeObserver?.disconnect();
  }
}
