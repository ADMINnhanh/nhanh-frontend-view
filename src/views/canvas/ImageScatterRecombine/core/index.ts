import BlockAnimationManager from "./BlockAnimation";
import BlockManager from "./BlockManager";
import BlockThrowGenerator from "./BlockThrowGenerator";
import CanvasProcessor from "./CanvasProcessor";
import ImageProcessor from "./ImageProcessor";

/** 打散图像并重组 */
class ImageScatterRecombine {
  /** 状态 "静止" | "运行" */
  private status: "static" | "running" = "static";
  /** 图片 */
  readonly imageProcessor = new ImageProcessor(this);
  /** 绘制类 */
  readonly canvasProcessor = new CanvasProcessor(this);
  /** 区块管理器 */
  readonly blockManager = new BlockManager(this);
  /** 区块动画管理器 */
  readonly animationManager = new BlockAnimationManager(this);
  /** 抛块管理器 */
  readonly throwManager = new BlockThrowGenerator(this);

  /** 配置 */
  readonly config: Partial<ImageScatterConfig> = {};

  /** 循环检测时间戳 */
  private lastTimestamp?: number;
  /** 开始 */
  async start(config?: Partial<ImageScatterConfig>) {
    if (config) {
      this.pause();
      await this.updateConfig(config);
    }

    this.status = "running";

    this.loopCheck();
    if (this.config.throw?.type == "auto") this.throwManager.autoThrow();
  }
  /** 暂停 */
  pause() {
    this.status = "static";

    this.throwManager.stopAutoThrow();
    this.lastTimestamp = undefined;
  }
  /** 手动抛块 */
  throwBlock(count?: number) {
    this.throwManager.throw(count);
    if (this.status != "running") {
      this.status = "running";
      this.loopCheck();
    }
  }
  /** 重置 */
  reset() {
    this.blockManager.reset();
    this.canvasProcessor.reset();
    this.throwManager.reset();
  }

  /** 开始循环检测 */
  private loopCheck(timestamp?: number): void {
    const next = () => {
      requestAnimationFrame((timestamp) => this.loopCheck(timestamp));
    };

    if (this.status != "running") return;
    if (!timestamp) return next();

    /** 更新区块进度 */
    if (this.lastTimestamp) {
      const delta = timestamp - this.lastTimestamp;

      this.throwManager.updateBlockProgress(delta);
      this.animationManager.calculateBlockPosition();
      this.canvasProcessor.renderCanvas();
    }

    /** 检测是否完成 */ {
      if (this.throwManager.isFinished) {
        this.reset();
        return this.pause();
      } else if (this.config.throw?.type == "manual") {
        if (this.throwManager.runningBlocks.length == 0) {
          return this.pause();
        }
      }
    }

    /** 准备下一次 检测 */ {
      this.lastTimestamp = timestamp;
      next();
    }
  }

  /** 更新配置 */
  async updateConfig(config: Partial<ImageScatterConfig>) {
    /** 数据验证 */
    if (!this.validationConfig(config)) return Promise.reject("Invalid config");

    if (this.status == "running") {
      this.start(config);
      return Promise.reject("可忽略");
    }

    Object.assign(this.config, config);

    const canvasChange = this.canvasProcessor.update();

    const imageChange = await this.imageProcessor.update(canvasChange);

    const blockChange = this.blockManager.update(imageChange);

    this.animationManager.update();

    this.throwManager.update();

    if (imageChange || blockChange) this.reset();
  }
  /** 验证配置 */
  private validationConfig(config: Partial<ImageScatterConfig>) {
    let isValid = true;

    const { renderSize, blockSize } = config;
    [renderSize, blockSize].forEach((item) => {
      if (item && !this.validateMinIntegerValues(item)) isValid = false;
    });

    return isValid;
  }

  /**
   * 校验对象的所有属性值是否为指定最小值以上的整数（默认最小值为1）
   * @param obj 待校验的键值对对象，值为数字类型
   * @param min 数值最小值（默认1），最终校验规则：值 ≥ min 且为整数
   * @returns 校验结果：true-全部符合要求，false-存在不符合项
   */
  private validateMinIntegerValues(
    obj: Record<string, number>,
    min: number = 1 // 新增可传入的最小值参数，默认1
  ): boolean {
    // 1. 前置校验：空值/非对象/数组
    if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
      console.warn("Input must be a non-array object");
      return false;
    }

    // 2. 前置校验：min参数本身是否为整数（避免传入非整数最小值）
    if (!Number.isInteger(min)) {
      console.warn(
        `Minimum value must be an integer (got ${min}), fallback to 1`
      );
      min = 1; // 回退到默认值1
    }

    let isValid = true;

    // 3. 遍历校验每个属性值
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        const valueType = typeof value;

        // 校验值类型是否为数字
        if (valueType !== "number") {
          console.warn(`[${key}] Value must be a number, got ${valueType}`);
          isValid = false;
          continue;
        }

        // 校验是否为整数
        if (!Number.isInteger(value)) {
          console.warn(`[${key}] Value must be an integer (got ${value})`);
          isValid = false;
        }
        // 校验是否≥指定最小值
        else if (value < min) {
          console.warn(`[${key}] Value must be ≥ ${min} (got ${value})`);
          isValid = false;
        }
      }
    }

    return isValid;
  }
}

export default ImageScatterRecombine;
