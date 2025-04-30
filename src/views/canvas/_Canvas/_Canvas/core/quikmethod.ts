import { _Schedule } from "nhanh-pure-function";
import Axis from "./axis";
import Event from "./event";
import { type Overlay } from "../OverlayGroup";
import Decimal from "decimal.js";
import LayerGroup from "../LayerGroup";
import Layer from "../LayerGroup/layer";
import OverlayGroup from "../OverlayGroup";

// 定义基础节点类型
type NodeType = LayerGroup | Layer | OverlayGroup | Overlay;

// 定义单元素或数组的泛型类型
type SingleOrArray<T> = T | T[];

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
   * 支持从指定源（图层组/图层/覆盖层组/覆盖层数组）开始遍历
   */
  getAllOverlays(source?: SingleOrArray<NodeType>): Overlay[] {
    const overlays: Overlay[] = [];
    // 初始化栈：处理数组类型直接展开
    const stack: (LayerGroup | Layer | OverlayGroup | Overlay)[] =
      source !== undefined
        ? Array.isArray(source)
          ? [...source]
          : [source]
        : Array.from(this.layerGroups.values());

    while (stack.length > 0) {
      const current = stack.pop()!;

      if (current instanceof LayerGroup) {
        if (!current.show.show) continue;
        stack.push(...current.layers.values()); // 图层组→图层
      } else if (current instanceof Layer) {
        if (!current.show.show) continue;
        stack.push(...current.groups.values()); // 图层→覆盖层组
      } else if (current instanceof OverlayGroup) {
        if (!current.show.show) continue;
        stack.push(...current.overlays.values()); // 覆盖层组→覆盖层
      } else {
        if (current.show.show) overlays.push(current); // 直接收集可见覆盖层
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
    overlays: SingleOrArray<NodeType> | undefined = undefined,
    immediately: boolean = false,
    avoid: [number, number, number, number] = [60, 60, 60, 60],
    maxScale?: number
  ) {
    // 获取目标覆盖层并过滤属于当前画布的覆盖层
    const targetOverlays = this.getAllOverlays(overlays);

    if (targetOverlays.length === 0) return;

    // 计算所有覆盖层的包围盒
    const { minX, maxX, minY, maxY } =
      this.calculateBoundingBox(targetOverlays);
    //  return console.log(minX, maxX, minY, maxY);

    // 计算目标尺寸和缩放比例
    const targetWidth_Value = maxX - minX;
    const targetHeight_Value = maxY - minY;
    const targetScale = this.calculateOptimalScale(
      targetWidth_Value,
      targetHeight_Value,
      avoid,
      maxScale
    );
    // return console.log(targetScale);

    // 计算目标位置偏移
    const offsetDifference = this.calculateOffsetDifference(
      minX,
      maxX,
      minY,
      maxY,
      avoid
    );

    if (
      targetScale == this.scale &&
      offsetDifference.x == 0 &&
      offsetDifference.y == 0
    )
      return;

    // 立即执行或动画过渡
    if (immediately) {
      this.applyTransformImmediately(targetScale, offsetDifference);
    } else {
      this.animateTransform(targetScale, offsetDifference);
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
  /**
   * 计算最佳缩放比例（基于动态网格系统适配）
   *
   * 核心逻辑：
   * 1. 网格尺寸动态范围：x ~ 2x（axisConfig.min 表示基础尺寸 x）
   * 2. 计算内容密度 = 单位像素需要表示的数据量（数值越大表示越密集）
   * 3. 对比基准密度（网格在最小尺寸时的密度）
   * 4. 动态选择缩放策略：
   *    - 过密内容：减小缩放比例使内容更紧凑（网格尺寸向 2x 调整）
   *    - 过疏内容：增大缩放比例以填充空间（网格尺寸向 x 调整）
   *
   * @param visibleWidthValue 可见区域宽度（数据单位）
   * @param visibleHeightValue 可见区域高度（数据单位）
   * @param margins 安全边距 [top, right, bottom, left]（像素单位）
   * @param maxScale 最大允许缩放比例
   * @returns 优化后的缩放比例
   */
  private calculateOptimalScale(
    visibleWidthValue: number,
    visibleHeightValue: number,
    margins: [number, number, number, number],
    maxScale?: number
  ): number {
    // 获取画布尺寸和轴配置
    const { width, height } = this.rect!.value;
    const { cycle, delta, axisConfig } = this;

    // 计算实际可用绘制区域（考虑边距后的有效区域）
    const availableWidth =
      Math.max(0, width - margins[1] - margins[3]) || width; // 有效宽度 = 总宽 - 右边距 - 左边距
    const availableHeight =
      Math.max(0, height - margins[0] - margins[2]) || height; // 有效高度 = 总高 - 上边距 - 下边距

    // 有效性检查：确保可用区域尺寸合法
    if (availableWidth <= 0 || availableHeight <= 0) {
      console.warn("无效的可视区域尺寸，边距设置可能不合理");
      return this.scale;
    }

    /* 密度计算阶段 */
    // 单位像素数据量 = 可见数据范围 / 可用像素数（数值越大越密集）
    const widthDensity = visibleWidthValue / availableWidth;
    const heightDensity = visibleHeightValue / availableHeight;
    const maxDensity = Math.max(widthDensity, heightDensity);

    // 基准参数计算
    const baseCount = axisConfig.count; // 默认网格数量
    const baseDensity = baseCount / axisConfig.min; // 基准密度 = 默认网格数/基础尺寸
    const scaleStepFactor = cycle * delta; // 缩放步长 = 周期数 × 单步变化量

    /* 缩放策略选择 */
    let targetScale: number;

    // 情况1：内容过密 → 需要减小缩放比例（使内容更紧凑）
    if (maxDensity > baseDensity) {
      // 计算需要放大网格的倍数（向上取整确保完全容纳）
      const densityMultiplier = Math.ceil(maxDensity / baseDensity);
      // 所需网格代表的值 = 基准值 × 密度倍数
      const requiredGridMaxValue = baseCount * densityMultiplier;

      // 缩放公式分解：
      // 1. (requiredGridMaxValue / maxDensity - axisConfig.min) → 所需尺寸与基础尺寸差值
      // 2. 差值 / axisConfig.min → 相对基础尺寸的变化比例
      // 3. (densityMultiplier - 2) → 密度倍数补偿项
      // 4. 总调整量 = (变化比例 + 补偿项) × 步长因子

      targetScale =
        1 -
        ((requiredGridMaxValue / maxDensity - axisConfig.min) / axisConfig.min +
          (densityMultiplier - 2)) *
          scaleStepFactor;
    }
    // 情况2：内容过疏 → 需要增大缩放比例（填充可用空间）
    else {
      // 计算缩小级数（根据密度比开平方确定调整幅度）
      const shrinkLevel = Math.floor(Math.sqrt(baseDensity / maxDensity));
      // 缩小系数 = 2^级数
      const scaleDivider = Math.pow(2, shrinkLevel);
      // 所需网格代表的值 = 基准值 / 缩小系数
      const requiredGridMaxValue = baseCount / scaleDivider;

      // 缩放公式分解：
      // 1. (requiredGridMaxValue / maxDensity - axisConfig.min) → 所需尺寸与基础尺寸差值
      // 2. 差值 / axisConfig.min → 相对基础尺寸的变化比例
      // 3. shrinkLevel → 级数补偿项
      // 4. 总调整量 = (变化比例 + 补偿项) × 步长因子
      targetScale =
        1 +
        ((requiredGridMaxValue / maxDensity - axisConfig.min) / axisConfig.min +
          shrinkLevel) *
          scaleStepFactor;
    }

    // 应用最大缩放限制（若配置）
    if (maxScale !== undefined) targetScale = Math.min(maxScale, targetScale);

    // 对齐到最近的步长倍数（保证缩放比例符合预设精度）
    targetScale = new Decimal(targetScale)
      .div(delta)
      .round()
      .mul(delta)
      .toNumber();

    return targetScale;
  }
  /** 计算目标位置偏移 */
  private calculateOffsetDifference(
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    avoid: [number, number, number, number]
  ) {
    const { width, height } = this.rect!.value;
    const { axisConfig, center } = this;

    // 计算中心点坐标
    const centerX = (maxX + minX) / 2;
    const centerY = (maxY + minY) / 2;
    const targetCenterPoint = this.getAxisPointByValue(centerX, centerY);

    const nowCenterValue = this.getAxisValueByPoint(
      (width / 2 - center.x) * axisConfig.x,
      (height / 2 - center.y) * axisConfig.y
    );
    const nowCenterPoint = this.getAxisPointByValue(
      nowCenterValue.xV,
      nowCenterValue.yV
    );

    return {
      x: Math.round(
        -(targetCenterPoint.x + (avoid[3] - avoid[1]) - nowCenterPoint.x) *
          axisConfig.x
      ),
      y: Math.round(
        -(targetCenterPoint.y + (avoid[0] - avoid[2]) - nowCenterPoint.y) *
          axisConfig.y
      ),
    };
  }
  /** 立即应用变换 */
  private applyTransformImmediately(
    targetScale: number,
    offsetDifference: { x: number; y: number }
  ) {
    this.offset = {
      x: this.offset.x + offsetDifference.x,
      y: this.offset.y + offsetDifference.y,
    };
    this.scale = targetScale;
    this.updateSize();
    this.redrawOnce();
  }
  /** 执行动画过渡 */
  private animateTransform(
    targetScale: number,
    offsetDifference: { x: number; y: number }
  ) {
    const initialScale = this.scale;
    const initialOffset = { ...this.offset };
    const duration = 300;
    this.isAuto = true;

    const finish = () => (this.isAuto = false);

    const animateScale = (onComplete?: () => void) =>
      this.animateScale(
        initialScale,
        targetScale,
        duration,
        onComplete || finish
      );
    const animateOffset = (onComplete?: () => void) =>
      this.animateOffset(
        initialOffset,
        offsetDifference,
        duration,
        onComplete || finish
      );

    animateOffset(animateScale);
  }
  /** 执行缩放动画 */
  private animateScale(
    initialScale: number,
    targetScale: number,
    duration: number,
    onComplete: () => void
  ) {
    const scaleDifference = targetScale - initialScale;
    let oldSchedule = 0;

    _Schedule((schedule) => {
      if (!this.isAuto || !this.canvas || this.lockDragAndResize) return;

      this.setScale("center", (schedule - oldSchedule) * scaleDifference);
      oldSchedule = schedule;
      this.redrawOnce();

      if (schedule === 1) onComplete();
    }, duration);
  }
  /** 执行偏移动画 */
  private animateOffset(
    initialOffset: { x: number; y: number },
    offsetDifference: { x: number; y: number },
    duration: number,
    onComplete: () => void
  ) {
    _Schedule((schedule) => {
      if (!this.isAuto || !this.canvas || this.lockDragAndResize) return;

      // 插值计算当前偏移量
      this.offset = {
        x: Number((initialOffset.x + offsetDifference.x * schedule).toFixed(0)),
        y: Number((initialOffset.y + offsetDifference.y * schedule).toFixed(0)),
      };

      this.redrawOnce();

      if (schedule === 1) onComplete();
    }, duration);
  }
  /** 回归初始位置 */
  returnToOrigin() {
    if (this.lockDragAndResize) return;

    if (this.scale == 1 && this.offset.x == 0 && this.offset.y == 0) return;

    const { rect, axisConfig } = this;

    const defaultCenter = this.getDefaultCenterLocation()!;

    // 计算中心点坐标
    const centerX = (rect!.value.width / 2 - defaultCenter.x) * axisConfig.x;
    const centerY = (rect!.value.height / 2 - defaultCenter.y) * axisConfig.y;
    const centerValue = this.getAxisValueByPoint(centerX, centerY, true);

    const canvasPoint = this.getMousePositionOnAxis({
      clientX: rect!.value.x + rect!.value.width / 2,
      clientY: rect!.value.y + rect!.value.height / 2,
    })!;
    const canvasValue = this.getAxisValueByPoint(canvasPoint.x, canvasPoint.y);

    const valuePx = axisConfig.size / this.getNowGridCount;
    const xDifference =
      (canvasValue.xV - centerValue.xV) * axisConfig.x * valuePx;
    const yDifference =
      (canvasValue.yV - centerValue.yV) * axisConfig.y * valuePx;

    this.animateTransform(1, {
      x: xDifference,
      y: yDifference,
    });
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
