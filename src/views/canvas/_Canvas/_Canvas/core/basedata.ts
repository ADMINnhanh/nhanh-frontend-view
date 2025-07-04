import Axis from "./axis";
import LayerGroup from "../LayerGroup";
import Decimal from "decimal.js";
import EventController from "../public/eventController";

type ConstructorOption = ConstructorParameters<typeof EventController>[0] & {
  /** 画布 id */
  id: string;
  /** 轴配置 */
  axisConfig?: Parameters<BaseData["setAxis"]>[0];
  /** 默认中心点 */
  defaultCenter?: Parameters<BaseData["setDefaultCenter"]>[0];
  /** 偏移量 */
  offset?: BaseData["offset"];
  /**
   * 缩放比例，用于动态控制坐标轴上数字所对应的实际显示长度，以实现坐标轴显示效果的缩放调整。
   *
   * 默认情况下，scale 的初始值设定为 1，此时坐标轴上数值为 1 的刻度在界面上的实际显示长度为 50px。
   *
   * scale 的值依据特定的计算逻辑动态变化，其计算公式为：scale = 默认值 1 + 滚动周期 * 滚动值，其中滚动周期和滚动值均为可变参数。
   * 例如，当滚动周期为 10，滚动值为 0.02 时，scale 的计算结果为 1 + 10 * 0.02 = 1.2 。在此状态下，坐标轴上数值为 1 的刻度在界面上的实际显示长度会变为 100px。
   *
   * 一般而言，scale 的值越大，相同数值在坐标轴上显示的长度就越长，在视觉上呈现出放大效果；scale 的值越小，相同数值在坐标轴上显示的长度就越短，视觉上呈现出缩小效果。
   * 可通过调整滚动周期和滚动值来灵活改变 scale 的大小，进而满足不同的显示需求。
   */
  defaultScale?: number;
};

/** 基础数据 */
export default class BaseData extends EventController {
  /** 画布元素 */
  canvas: HTMLCanvasElement;
  /** 画布上下文 */
  ctx: CanvasRenderingContext2D;
  /** rect值是最新的吗 */
  private _rectValueIsUpdated = false;
  private _rect?: DOMRect;
  /** 画布矩形 */
  get rect(): DOMRect {
    if (this._rectValueIsUpdated && this._rect) return this._rect;
    this._rectValueIsUpdated = true;
    Promise.resolve().then(() => (this._rectValueIsUpdated = false));
    this._rect = this.canvas.getBoundingClientRect();
    return this._rect;
  }

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

  /** 精度 */
  accuracy = 5;

  /**
   * 缩放比例，用于动态控制坐标轴上数字所对应的实际显示长度，以实现坐标轴显示效果的缩放调整。
   *
   * 默认情况下，scale 的初始值设定为 1，此时坐标轴上数值为 1 的刻度在界面上的实际显示长度为 50px。
   *
   * scale 的值依据特定的计算逻辑动态变化，其计算公式为：scale = 默认值 1 + 滚动周期 * 滚动值，其中滚动周期和滚动值均为可变参数。
   * 例如，当滚动周期为 10，滚动值为 0.02 时，scale 的计算结果为 1 + 10 * 0.02 = 1.2 。在此状态下，坐标轴上数值为 1 的刻度在界面上的实际显示长度会变为 100px。
   *
   * 一般而言，scale 的值越大，相同数值在坐标轴上显示的长度就越长，在视觉上呈现出放大效果；scale 的值越小，相同数值在坐标轴上显示的长度就越短，视觉上呈现出缩小效果。
   * 可通过调整滚动周期和滚动值来灵活改变 scale 的大小，进而满足不同的显示需求。
   */
  scale = 1;
  /** 缩放比例 */
  defaultScale = 1;

  /** 百分比 */
  percentage = 1;
  /**
   * 网格大小设定规则：
   * 1. 基于 count 计算的网格，其内部会被均匀划分为 5 个子网格。
   * 2. 为确保网格在绘制时网格线正常显示，且在缩放操作时能实现平滑过渡
   *    min 必须是 5 的整数倍，即 min % 5 === 0。
   */
  axisConfig = {
    /** 滚轮滚动周期为 0 时单网格代表的数字 */
    count: 2,
    /** 网格最小尺寸 */
    min: 100,
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
  private _redrawInNextRenderFrame = false;
  /** 是否在当前渲染帧进行重绘 */
  get redrawInNextRenderFrame() {
    return this._redrawInNextRenderFrame;
  }
  protected set redrawInNextRenderFrame(value: boolean) {
    this._redrawInNextRenderFrame = value;
  }
  /** 是否正在自动调整 */
  protected isAuto = false;
  /** 是否正在绘制 */
  protected isRendering = false;

  /** 绘制坐标轴 */
  drawAxis: Axis = undefined as any;

  /** 图层群组 集合 */
  protected layerGroups = new Map<string, LayerGroup>();

  constructor(option: ConstructorOption) {
    super(option);

    const { id, axisConfig, defaultCenter, offset, defaultScale } = option;

    const canvas = document.getElementById(id);
    if (canvas instanceof HTMLCanvasElement) {
      if (canvas.getContext) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;
        const { clientWidth, clientHeight } = canvas;
        [canvas.width, canvas.height] = [clientWidth, clientHeight];
      } else throw new Error("canvas-unsupported code here");
    } else throw new Error("canvas is not HTMLCanvasElement");

    if (axisConfig) this.setAxis(axisConfig);
    if (offset) {
      this.offset.x = offset.x || 0;
      this.offset.y = offset.y || 0;
    }
    if (defaultCenter) this.setDefaultCenter(defaultCenter);
    if (defaultScale) {
      this.updateCenter();
      this.setScale("center", defaultScale - 1);
      this.defaultScale = defaultScale;
    }
  }

  setNotifyReload(notifyReload?: () => void): void {
    this.notifyReload = notifyReload;
  }

  /** 获取默认中心点位置 */
  getDefaultCenterLocation() {
    const { canvas, rect, defaultCenter } = this;
    if (!canvas) return console.error("canvas is not HTMLCanvasElement");

    const { width, height } = rect;
    const { top, bottom, left, right } = defaultCenter;

    // 值解析策略
    const valueParsers = {
      /* 垂直方向解析 */
      vertical: (value: string | number, max: number) => {
        if ([0, "0", "0%"].includes(value)) return 0;
        if (value == Infinity || value == -Infinity) return undefined;
        if (typeof value === "number") return value;
        if (["top", "left"].includes(value)) return 0;
        if (["bottom", "right"].includes(value)) return max;
        if (["middle", "center"].includes(value)) return max / 2;

        if (/^(-?\d+)%$/.test(value)) {
          value = value.match(/^(-?\d+)%$/)![1];
          return (max * Number(value)) / 100;
        }
        return Number(value) || undefined;
      },

      /* 反向解析 (bottom/right) */
      reverse: (value: string | number, max: number) => {
        if ([0, "0", "0%"].includes(value)) return max;
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

    return { x, y };
  }
  /** 更新中心点 */
  updateCenter() {
    const data = this.getDefaultCenterLocation();
    if (!data) return;
    const { x, y } = data;

    this.center = {
      x: Math.floor(x + this.offset.x),
      y: Math.floor(y + this.offset.y),
    };
  }
  /** 更新网格大小 */
  updateSize() {
    const { scale, axisConfig } = this;

    axisConfig.size = this.getGridSize(scale);

    this.percentage =
      this.getAxisPointByValue(axisConfig.count, 0).x / axisConfig.min;
  }

  /** 缩放比例是否更新 */
  isScaleUpdated = false;
  /** 设置缩放 */
  setScale(
    event: "center" | { clientX: number; clientY: number },
    delta: number
  ) {
    const { canvas, isWheelable, axisConfig, rect } = this;

    if (!isWheelable || !canvas)
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

    this.scale = new Decimal(this.scale).add(delta).toNumber();
    this.isScaleUpdated = true;

    this.updateSize();

    const newMousePoint = this.getAxisPointByValue(
      mouseValue.xV,
      mouseValue.yV
    );

    this.offset.x -= (newMousePoint.x - mousePoint.x) * axisConfig.x;
    this.offset.y -= (newMousePoint.y - mousePoint.y) * axisConfig.y;
    this.offset.x = Number(this.offset.x.toFixed(0));
    this.offset.y = Number(this.offset.y.toFixed(0));
  }
  /** 设置坐标轴 */
  setAxis(config: Partial<BaseData["axisConfig"]>) {
    // 1. 合并配置并转换为数值类型
    const mergedConfig = { ...this.axisConfig, ...config };
    const numericConfig = Object.fromEntries(
      Object.entries(mergedConfig).map(([key, value]) => [key, Number(value)])
    ) as typeof this.axisConfig;

    // 2. 解构需要验证的字段
    const { x, y, count, min, size } = numericConfig;

    // 3. 验证条件拆分（带明确变量名）
    const isValidX = [1, -1].includes(x);
    const isValidY = [1, -1].includes(y);
    const isValidCount = count > 0;
    const isValidRange = min > 0;
    const isValidSize = size >= min && size <= min * 2;

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
    this.updateCenter();
  }

  /**
   * 计算当前缩放级别下的网格尺寸
   * @param scale - 当前缩放比例
   * @returns 计算得到的网格尺寸（像素单位）
   */
  getGridSize(scale: number) {
    const { cycle, delta, axisConfig } = this;

    // let size =
    //   (this.preservePrecision(Math.abs(scale - 1) * 100) %
    //     (cycle * delta * 100)) /
    //   (delta * 100);
    let size = new Decimal(scale)
      .sub(1)
      .abs()
      .mod(cycle * delta)
      .div(delta)
      .toNumber();

    // size = Math.round(scale < 1 && size != 0 ? cycle - size : size);
    size = scale < 1 && size != 0 ? cycle - size : size;

    return Number(((size / cycle + 1) * axisConfig.min).toFixed(0));
  }
  /**
   * 计算当前缩放级别下显示的网格值
   * @param scale - 当前缩放比例
   * @returns 计算得到的网格数量
   */
  getGridCount(scale: number) {
    const { axisConfig, cycle, delta } = this;
    const baseCount = axisConfig.count;
    const scaleFactor = cycle * delta;

    // 基准比例直接返回配置数量
    if (scale === 1) return baseCount;
    // 处理放大情况（scale > 1，网格数量减少）
    if (scale > 1) {
      // this.nowGridCount =
      //   count /
      //   Math.pow(
      //     2,
      //     Math.floor(
      //       this.preservePrecision(
      //         this.preservePrecision(scale - 1) / scaleFactor
      //       )
      //     )

      //   );
      const zoomLevel = new Decimal(scale).sub(1).div(scaleFactor).floor();
      return new Decimal(baseCount)
        .div(new Decimal(2).pow(zoomLevel))
        .toNumber();
    }
    // 处理缩小情况（scale < 1，网格数量增加）
    else {
      // const exponent = (1 - scale) / scaleFactor;
      // this.nowGridCount =
      //   count *
      //   Math.pow(
      //     2,
      //     Number.isInteger(exponent) ? exponent + 1 : Math.ceil(exponent)
      //   );
      const shrinkLevel = new Decimal(1).sub(scale).div(scaleFactor).ceil();
      return new Decimal(baseCount)
        .mul(new Decimal(2).pow(shrinkLevel))
        .toNumber();
    }
  }
  /** 现在网格计数 */
  private nowGridCount?: number;
  /** 获取每个网格表示的数字 */
  get getNowGridCount() {
    const { scale, nowGridCount, isRendering } = this;

    if (nowGridCount && isRendering) return nowGridCount;

    this.nowGridCount = this.getGridCount(scale);

    if (isRendering)
      Promise.resolve().then(() => (this.nowGridCount = undefined));

    return this.nowGridCount;
  }
  /** 获取鼠标在坐标轴上的位置 */
  getMousePositionOnAxis(event: { clientX: number; clientY: number }) {
    const { canvas, center, rect, axisConfig } = this;
    if (!canvas) return console.error("canvas is not HTMLCanvasElement");

    const { clientX, clientY } = event;
    const { left, top } = rect;

    const x = (clientX - left - center.x) * axisConfig.x;
    const y = (clientY - top - center.y) * axisConfig.y;
    return { x, y };
  }

  /** 通过坐标轴上的点 获取坐标轴上的值 */
  getAxisValueByPoint(x: number, y: number, returnInitialScaleValue?: boolean) {
    const { axisConfig } = this;

    if (returnInitialScaleValue)
      return {
        xV: (x / axisConfig.min) * axisConfig.count,
        yV: (y / axisConfig.min) * axisConfig.count,
      };

    const count = this.getNowGridCount;
    // const xV = this.preservePrecision((x / axisConfig.size) * count);
    // const yV = this.preservePrecision((y / axisConfig.size) * count);

    const xV = new Decimal(x).div(axisConfig.size).mul(count).toFixed(8);
    const yV = new Decimal(y).div(axisConfig.size).mul(count).toFixed(8);

    return { xV: Number(xV), yV: Number(yV) };
  }
  /** 通过坐标轴上的值 获取坐标轴上的点 */
  getAxisPointByValue(
    xV: number,
    yV: number,
    returnInitialScaleValue?: boolean
  ) {
    const { axisConfig } = this;

    if (returnInitialScaleValue)
      return {
        x: (xV / axisConfig.count) * axisConfig.min,
        y: (yV / axisConfig.count) * axisConfig.min,
      };

    const count = this.getNowGridCount;
    // const x = this.preservePrecision((xV / count) * axisConfig.size, 3);
    // const y = this.preservePrecision((yV / count) * axisConfig.size, 3);

    const x = new Decimal(xV).div(count).mul(axisConfig.size).toFixed(3);
    const y = new Decimal(yV).div(count).mul(axisConfig.size).toFixed(3);

    return { x: Number(x), y: Number(y) };
  }

  /** 获取最大/小的 值 */
  getMaxMinValue(rect?: {
    left: number;
    top: number;
    right: number;
    bottom: number;
  }) {
    rect = rect || this.rect;

    const { left, top, right, bottom } = rect;
    const { axisConfig } = this;

    const { x: minX, y: minY } = this.getMousePositionOnAxis({
      clientX: axisConfig.x == 1 ? left : right,
      clientY: axisConfig.y == 1 ? top : bottom,
    })!;
    const { xV: minXV, yV: minYV } = this.getAxisValueByPoint(minX, minY);

    const { x: maxX, y: maxY } = this.getMousePositionOnAxis({
      clientX: axisConfig.x == 1 ? right : left,
      clientY: axisConfig.y == 1 ? bottom : top,
    })!;
    const { xV: maxXV, yV: maxYV } = this.getAxisValueByPoint(maxX, maxY);

    return {
      minXV,
      maxXV,
      minYV,
      maxYV,
    };
  }

  /** 变换坐标 */
  transformPosition(positions: [number, number]): [number, number];
  transformPosition(positions: [number, number][]): [number, number][];
  transformPosition(positions: [number, number] | [number, number][]) {
    const { center, percentage, axisConfig } = this;

    const xt = percentage * axisConfig.x;
    const yt = percentage * axisConfig.y;
    const transform = (position: [number, number]) => [
      center.x + position[0] * xt,
      center.y + position[1] * yt,
    ];

    if (Array.isArray(positions[0])) {
      return (positions as [number, number][]).map((position) =>
        transform(position)
      );
    }

    return transform(positions as [number, number]);
  }
}
