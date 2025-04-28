import { _Schedule } from "nhanh-pure-function";
import Axis from "./axis";
import Event from "./event";
import type { Overlay } from "../OverlayGroup";
import Decimal from "decimal.js";

/** 快速方法 */
export default class QuickMethod extends Event {
  /** 获取默认覆盖物群组 */
  getDefaultOverlayGroup() {
    const layerGroup = this.layerGroups.get("默认图层群组");
    if (!layerGroup) return;
    const overlays_point = layerGroup
      .getLayer("点位图层")
      ?.getGroup("点位覆盖物群组");
    const overlays_line = layerGroup
      .getLayer("线段图层")
      ?.getGroup("线段覆盖物群组");
    const overlays_polygon = layerGroup
      .getLayer("多边形图层")
      ?.getGroup("多边形覆盖物群组");
    const overlays_text = layerGroup
      .getLayer("文字图层")
      ?.getGroup("文字覆盖物群组");
    const overlays_custom = layerGroup
      .getLayer("自定义绘制图层")
      ?.getGroup("自定义绘制覆盖物群组");
    return {
      overlays_text,
      overlays_point,
      overlays_line,
      overlays_polygon,
      overlays_custom,
    };
  }

  /**
   * 获取所有可见的覆盖层（Overlay）
   * 遍历图层组->图层->组->覆盖层结构，筛选出所有可见的覆盖层
   */
  getAllOverlays(): Overlay[] {
    const overlays: Overlay[] = [];

    // 使用循环替代多层map+flat组合，提升性能
    for (const [, layerGroup] of this.layerGroups) {
      if (!layerGroup.show.show) continue;

      for (const [, layer] of layerGroup.layers) {
        if (!layer.show.show) continue;

        for (const [, group] of layer.groups) {
          if (!group.show.show) continue;

          for (const overlay of group.overlays.values()) {
            if (overlay.show.show) {
              overlays.push(overlay);
            }
          }
        }
      }
    }

    return overlays;
  }
  /**
   * 调整视图以适应指定覆盖层
   * @param overlays 目标覆盖层数组，默认使用全部可见覆盖层
   * @param immediately 是否立即执行
   * @param avoid 边距调整 [上, 右, 下, 左]
   * @param maxScale 最大缩放比例限制
   */
  setFitView(
    overlays: Overlay[] = [],
    immediately: boolean = false,
    avoid: [number, number, number, number] = [60, 60, 60, 60],
    maxScale?: number
  ) {
    // 获取目标覆盖层并过滤属于当前画布的覆盖层
    const targetOverlays =
      overlays.length === 0
        ? this.getAllOverlays()
        : overlays.filter((overlay) => overlay.equalsMainCanvas(this as any));

    if (targetOverlays.length === 0) return;

    // 计算所有覆盖层的包围盒
    const { minX, maxX, minY, maxY } =
      this.calculateBoundingBox(targetOverlays);

    // 计算目标尺寸和缩放比例
    const targetWidth_Value = maxX - minX;
    const targetHeight_Value = maxY - minY;
    const targetScale = this.calculateOptimalScale(
      targetWidth_Value,
      targetHeight_Value,
      avoid,
      maxScale
    );
    return;

    // 计算目标位置偏移
    const targetOffset = this.calculateTargetOffset(
      minX,
      maxX,
      minY,
      maxY,
      targetScale,
      avoid
    );

    if (
      targetScale == this.scale &&
      targetOffset.x == this.offset.x &&
      targetOffset.y == this.offset.y
    )
      return;

    // console.log(targetScale, targetOffset.x, targetOffset.y);
    // return console.log(this);

    // 立即执行或动画过渡
    if (immediately) {
      this.applyTransformImmediately(targetScale, targetOffset);
    } else {
      this.animateTransform(targetScale, targetOffset);
    }
  }
  /** 计算所有覆盖层的边界范围 */
  private calculateBoundingBox(overlays: Overlay[]) {
    let minX = Infinity,
      maxX = -Infinity;
    let minY = Infinity,
      maxY = -Infinity;

    for (const overlay of overlays) {
      const scope = overlay.staticValueScope!;
      minX = Math.min(minX, scope.minX);
      maxX = Math.max(maxX, scope.maxX);
      minY = Math.min(minY, scope.minY);
      maxY = Math.max(maxY, scope.maxY);
    }

    return { minX, maxX, minY, maxY };
  }
  /** 计算最佳缩放比例 */
  private calculateOptimalScale(
    targetWidth_Value: number,
    targetHeight_Value: number,
    avoid: [number, number, number, number],
    maxScale?: number
  ): number {
    const { width, height } = this.rect!.value;
    const { cycle, delta, axisConfig } = this;
    const availableWidth = width - avoid[1] - avoid[3];
    const availableHeight = height - avoid[0] - avoid[2];

    // 有效性检查
    if (availableWidth <= 0 || availableHeight <= 0) {
      console.warn("可用显示区域尺寸异常");
      return this.scale;
    }

    /** x 轴每 1px 所表示的值 */
    const widthRatio = targetWidth_Value / availableWidth;
    /** y 轴每 1px 所表示的值 */
    const heightRatio = targetHeight_Value / availableHeight;
    /** 优先满足 缩小 > 放大 */
    const maxRatio = Math.max(widthRatio, heightRatio);

    // 根据基准比例计算缩放量
    const baseScale = axisConfig.count / axisConfig.min;
    const scaleDelta = cycle * delta;

    // 计算目标缩放比例
    let targetScale =
      maxRatio > baseScale
        ? 1 - (maxRatio / baseScale - 1) * scaleDelta // 需要缩小
        : 1 + (baseScale / maxRatio - 1) * scaleDelta; // 需要放大

    // 应用最大缩放限制
    targetScale = maxScale ? Math.min(maxScale, targetScale) : targetScale;

    console.log(targetScale, maxRatio, baseScale);
    console.log(this.getGridCount(targetScale), this.getGridSize(targetScale));

    // targetScale = parseInt(targetScale / delta + "") * delta;
    targetScale = new Decimal(targetScale)
      .div(delta)
      .round()
      .mul(delta)
      .toNumber();

    return targetScale;
  }
  /** 计算目标位置偏移 */
  private calculateTargetOffset(
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    targetScale: number,
    avoid: [number, number, number, number]
  ) {
    const { width, height } = this.rect!.value;
    const { axisConfig } = this;
    const targetGridCount = this.getGridCount(targetScale);
    const targetGridSize = this.getGridSize(targetScale);

    // 计算中心点坐标
    const centerX = (maxX + minX) / 2;
    const centerY = (maxY + minY) / 2;

    // 计算基于缩放后的位置偏移
    const scaledX = (centerX / targetGridCount) * targetGridSize;
    const scaledY = (centerY / targetGridCount) * targetGridSize;

    // 获取默认中心点位置
    const defaultCenter = this.getDefaultCenterLocation()!;

    return {
      x: Math.round(
        width / 2 -
          defaultCenter.x -
          (scaledX * axisConfig.x + (avoid[3] - avoid[1]))
      ),
      y: Math.round(
        height / 2 -
          defaultCenter.y -
          (scaledY * axisConfig.y + (avoid[0] - avoid[2]))
      ),
    };
  }
  /** 立即应用变换 */
  private applyTransformImmediately(
    targetScale: number,
    targetOffset: { x: number; y: number }
  ) {
    this.offset = targetOffset;
    this.scale = targetScale;
    this.updateSize();
    this.redrawOnce(true);
  }
  /** 执行动画过渡 */
  private animateTransform(
    targetScale: number,
    targetOffset: { x: number; y: number }
  ) {
    const initialOffset = { ...this.offset };
    const initialScale = this.scale;
    const duration = 300;
    // const duration = 10000;

    this.isAuto = true;

    _Schedule((schedule) => {
      if (!this.isAuto || !this.canvas || this.lockDragAndResize) return;

      // 插值计算当前值
      this.offset.x =
        initialOffset.x + (targetOffset.x - initialOffset.x) * schedule;
      this.offset.y =
        initialOffset.y + (targetOffset.y - initialOffset.y) * schedule;
      this.scale = initialScale + (targetScale - initialScale) * schedule;

      this.updateSize();
      this.redrawOnce(true);

      if (schedule === 1) this.isAuto = false;
    }, duration);
  }

  /** 重置画布 */
  reset() {
    if (this.lockDragAndResize) return;

    this.isAuto = true;
    const time = 300;
    const waitResetData = {
      offset: { ...this.offset },
      scale: this.scale - 1,
    };

    _Schedule((schedule) => {
      if (!this.isAuto || !this.canvas || this.lockDragAndResize) return;

      if (schedule === 1) {
        this.offset = { x: 0, y: 0 };
        this.scale = 1;
        this.updateSize();
        this.isAuto = false;
      } else if (schedule > 0) {
        schedule = 1 - schedule;
        this.offset = {
          x: waitResetData.offset.x * schedule,
          y: waitResetData.offset.y * schedule,
        };
        this.scale = 1 + waitResetData.scale * schedule;
        this.updateSize();
      }
      this.redrawOnce(true);
    }, time);
  }
  /** 缩放画布 */
  zoom(delta: number) {
    const { canvas, rect } = this;
    if (!canvas || !rect)
      return console.error("canvas is not HTMLCanvasElement");

    this.setScale("center", delta);
    this.redrawOnce();
  }
  /** 放大 */
  zoomIn() {
    this.zoom(this.delta);
  }
  /** 缩小 */
  zoomOut() {
    this.zoom(-this.delta);
  }

  /** 添加样式 */
  setStyle(style: DeepPartial<StyleType>) {
    super.setStyle(style);
    this.redrawOnce();
  }
  /** 设置主题 */
  setTheme(theme: KnownStyleKeys) {
    super.setTheme(theme);
    this.redrawOnce();
  }
  /** 设置坐标轴 */
  setAxis(config: Partial<QuickMethod["axisConfig"]>) {
    super.setAxis(config);
    this.redrawOnce();
  }
  /** 设置默认中心 */
  setDefaultCenter(center: QuickMethod["defaultCenter"]) {
    super.setDefaultCenter(center);
    this.redrawOnce();
  }

  /** 开关坐标轴 */
  toggleAxis(show?: boolean | DeepPartial<Axis["show"]>) {
    this.drawAxis.toggleAxis(show);
    this.redrawOnce();
  }
  /** 开关点位 */
  togglePoint(show?: boolean) {
    const { overlays_point } = this.getDefaultOverlayGroup() || {};

    if (overlays_point) {
      overlays_point.show.setShow(show ?? !overlays_point.show);
      this.redrawOnce();
      return overlays_point.show;
    }
    return false;
  }
  /** 开关线段 */
  toggleLine(show?: boolean) {
    const { overlays_line } = this.getDefaultOverlayGroup() || {};
    if (overlays_line) {
      overlays_line.show.setShow(show ?? !overlays_line.show);
      this.redrawOnce();
      return overlays_line.show;
    }
    return false;
  }
  /** 开关多边形 */
  togglePolygon(show?: boolean) {
    const { overlays_polygon } = this.getDefaultOverlayGroup() || {};
    if (overlays_polygon) {
      overlays_polygon.show.setShow(show ?? !overlays_polygon.show);
      this.redrawOnce();
      return overlays_polygon.show;
    }
    return false;
  }
  /** 切换锁定状态 */
  toggleLock(lock?: boolean) {
    this.lockDragAndResize = lock ?? !this.lockDragAndResize;
    return this.lockDragAndResize;
  }
}
