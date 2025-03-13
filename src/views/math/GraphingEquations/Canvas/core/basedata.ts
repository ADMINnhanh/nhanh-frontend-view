import type Axis from "../tool/axis";
import type Point from "../tool/point";
import type Line from "../tool/line";
import type Polygon from "../tool/polygon";

/** 基础数据 */
export default class BaseData {
  /** 画布元素 */
  canvas?: HTMLCanvasElement;
  /** 画布上下文 */
  ctx?: CanvasRenderingContext2D;
  /** 画布矩形 */
  rect?: DOMRect;
  /** 画布偏移量 */
  offset = { x: 0, y: 0 };
  /** 画布中心点 */
  center = { x: 0, y: 0 };
  /** 默认画布中心点 */
  defaultCenter: DefaultCenter = {
    top: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
  };
  /** 是否禁用拖拽和缩放 */
  lockDragAndResize = false;

  /** 缩放比例 */
  scale = 1;
  /** 百分比 */
  percentage = 1;
  /**
   * 网格大小设定规则：
   * 1. 基于 count 计算的网格，其内部会被均匀划分为 5 个子网格。
   * 2. 为确保网格在绘制时网格线正常显示，且在缩放操作时能实现平滑过渡，max 和 min 的取值需要满足以下两个条件：
   *    - 条件一：max 必须是 min 的 2 倍，即 max / min === 2。
   *    - 条件二：min 必须是 5 的整数倍，即 min % 5 === 0。
   */
  axisConfig = {
    /** 缩放比为 1 时单网格代表的数字 */
    count: 2,
    /** 网格最小尺寸 */
    min: 100,
    /** 网格最大尺寸 */
    max: 200,
    /** 网格当前大小 */
    size: 100,
    /** x 轴方向：1 右增左减，-1 左增右减 */
    x: 1 as 1 | -1,
    /** y 轴方向：1 下增上减，-1 上增下减 */
    y: 1 as 1 | -1,
  };
  /**
   * 滚动周期规则说明：
   * 1. 每滚动 10 次构成一个完整的滚动周期。
   * 2. 为保证与网格绘制相适配，滚动周期数值必须为 5 的整数倍。
   */
  cycle = 10;
  /** 滚轮滚动的值 */
  delta = 0.02;
  /** 是否在当前渲染帧进行重绘 */
  protected redrawInNextRenderFrame = false;
  /** 是否正在自动调整 */
  protected isAuto = false;

  /** 绘制坐标轴 */
  drawAxis: Axis = undefined as any;
  /** 绘制点 */
  drawPoint: Point = undefined as any;
  /** 绘制线 */
  drawLine: Line = undefined as any;
  /** 绘制面 */
  drawPolygon: Polygon = undefined as any;

  constructor(id: string) {
    const canvas = document.getElementById(id);
    if (canvas instanceof HTMLCanvasElement) {
      if (canvas.getContext) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;
        this.rect = canvas.getBoundingClientRect();

        const { clientWidth, clientHeight } = canvas;
        [canvas.width, canvas.height] = [clientWidth, clientHeight];
      } else {
        console.error("canvas-unsupported code here");
      }
    } else console.error("canvas is not HTMLCanvasElement");
  }

  /** 更新中心点 */
  updateCenter() {
    const { canvas, rect, offset, defaultCenter } = this;
    if (!canvas) return console.error("canvas is not HTMLCanvasElement");

    const { width, height } = rect!;
    const { top, bottom, left, right } = defaultCenter;

    // 值解析策略
    const valueParsers = {
      /* 垂直方向解析 */
      vertical: (value: string | number, max: number) => {
        if (value == Infinity || value == -Infinity) return undefined;
        if (typeof value === "number") return value;
        if (["top", "left"].includes(value)) return 0;
        if (["bottom", "right"].includes(value)) return max;
        if (["middle", "center"].includes(value)) return max / 2;
        const percent = value.match(/^(\d+)%*$/)?.[1];
        return (
          (percent ? (max * Number(percent)) / 100 : Number(value)) || undefined
        );
      },

      /* 反向解析 (bottom/right) */
      reverse: (value: string | number, max: number) => {
        if (value == Infinity || value == -Infinity) return undefined;
        if (typeof value === "number") return max - value;
        const parsed = valueParsers.vertical(value, max);
        return parsed ? max - parsed : undefined;
      },
    };

    // 坐标计算器
    const calculateCoordinate = (
      primary: string | number | undefined,
      secondary: string | number | undefined,
      max: number
    ) => {
      if (primary !== undefined) {
        const v = valueParsers.vertical(primary, max);
        if (v !== undefined) return v;
      }
      if (secondary !== undefined) {
        const v = valueParsers.reverse(secondary, max);
        if (v !== undefined) return v;
      }
      return max / 2;
    };

    // 计算坐标
    const y = calculateCoordinate(top, bottom, height);
    const x = calculateCoordinate(left, right, width);

    this.center = {
      x: Math.floor(x + offset.x),
      y: Math.floor(y + offset.y),
    };
  }
  /** 更新网格大小 */
  updateSize() {
    const { scale, cycle, delta, axisConfig } = this;

    let size = (Math.abs(scale - 1) % (cycle * delta)) / delta;
    size = Math.round(scale < 1 ? cycle - size : size);

    axisConfig.size =
      (size / cycle) * (axisConfig.max - axisConfig.min) + axisConfig.min;

    this.percentage =
      this.getAxisPointByValue(axisConfig.count, 0).x / axisConfig.min;
  }

  /** 设置缩放 */
  setScale(
    event: "center" | { clientX: number; clientY: number },
    delta: number
  ) {
    const { canvas, rect, lockDragAndResize, axisConfig } = this;

    if (lockDragAndResize) return;
    if (!canvas || !rect)
      return console.error("canvas is not HTMLCanvasElement");

    let clientX, clientY;
    if (event === "center") {
      clientX = rect.left + rect.width / 2;
      clientY = rect.top + rect.height / 2;
    } else {
      [clientX, clientY] = [event.clientX, event.clientY];
    }

    const mousePoint = this.getMousePositionOnAxis({ clientX, clientY })!;
    const mouseValue = this.getAxisValueByPoint(mousePoint.x, mousePoint.y);

    this.scale += delta;

    this.updateSize();

    const newMousePoint = this.getAxisPointByValue(
      mouseValue.xV,
      mouseValue.yV
    );

    this.offset.x -= (newMousePoint.x - mousePoint.x) * axisConfig.x;
    this.offset.y -= (newMousePoint.y - mousePoint.y) * axisConfig.y;
  }
  /** 设置坐标轴 */
  setAxis(config: Partial<BaseData["axisConfig"]>) {
    // 1. 合并配置并转换为数值类型
    const mergedConfig = { ...this.axisConfig, ...config };
    const numericConfig = Object.fromEntries(
      Object.entries(mergedConfig).map(([key, value]) => [key, Number(value)])
    ) as typeof this.axisConfig;

    // 2. 解构需要验证的字段
    const { x, y, count, min, max, size } = numericConfig;

    // 3. 验证条件拆分（带明确变量名）
    const isValidX = [1, -1].includes(x);
    const isValidY = [1, -1].includes(y);
    const isValidCount = count > 0;
    const isValidRange = min > 0 && min < max;
    const isValidSize = size >= min && size <= max;

    // 4. 条件组合与提前返回
    if (
      !isValidX ||
      !isValidY ||
      !isValidCount ||
      !isValidRange ||
      !isValidSize
    ) {
      console.warn("Invalid axis configuration:", {
        x,
        y,
        count,
        min,
        max,
        size,
      });
      return;
    }

    // 5. 通过所有验证后更新配置
    this.axisConfig = numericConfig;
  }
  /** 设置默认中心 */
  setDefaultCenter(center: Partial<BaseData["defaultCenter"]>) {
    Object.assign(this.defaultCenter, center);
  }

  /** 获取每个网格表示的数字 */
  getGridCount() {
    const { axisConfig, scale, cycle, delta } = this;

    let count = axisConfig.count;
    if (scale > 1) {
      count /= Math.pow(2, Math.floor((scale - 1) / (cycle * delta)));
    } else if (scale < 1) {
      count *= Math.pow(2, Math.ceil(Math.abs(scale - 1) / (cycle * delta)));
    }

    return count;
  }
  /** 获取鼠标在坐标轴上的位置 */
  getMousePositionOnAxis(event: { clientX: number; clientY: number }) {
    const { canvas, center, rect, axisConfig } = this;
    if (!canvas) return console.error("canvas is not HTMLCanvasElement");

    const { clientX, clientY } = event;
    const { left, top } = rect!;

    const x = (clientX - left - center.x) * axisConfig.x;
    const y = (clientY - top - center.y) * axisConfig.y;
    return { x, y };
  }

  /** 通过坐标轴上的点 获取坐标轴上的值 */
  getAxisValueByPoint(x: number, y: number) {
    const { axisConfig } = this;
    const count = this.getGridCount();
    const xV = (x / axisConfig.size) * count;
    const yV = (y / axisConfig.size) * count;
    return { xV, yV };
  }
  /** 通过坐标轴上的值 获取坐标轴上的点 */
  getAxisPointByValue(xV: number, yV: number) {
    const { axisConfig } = this;
    const count = this.getGridCount();
    const x = (xV / count) * axisConfig.size;
    const y = (yV / count) * axisConfig.size;
    return { x, y };
  }

  /** 获取最大/小的 值 */
  getMaxMinValue(rect?: {
    left: number;
    top: number;
    right: number;
    bottom: number;
  }) {
    rect = rect || this.rect!;
    const { x: minX, y: minY } = this.getMousePositionOnAxis({
      clientX: rect.left,
      clientY: rect.top,
    })!;
    const { xV: minXV, yV: minYV } = this.getAxisValueByPoint(minX, minY);

    const { x: maxX, y: maxY } = this.getMousePositionOnAxis({
      clientX: rect.right,
      clientY: rect.bottom,
    })!;
    const { xV: maxXV, yV: maxYV } = this.getAxisValueByPoint(maxX, maxY);

    return {
      minXV: minXV * this.axisConfig.x,
      maxXV: maxXV * this.axisConfig.x,
      minYV: minYV * this.axisConfig.y,
      maxYV: maxYV * this.axisConfig.y,
    };
  }

  destroy() {
    this.canvas = undefined;
    this.ctx = undefined;
  }
}
