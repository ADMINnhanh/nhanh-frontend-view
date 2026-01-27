import BlockAnimationManager from "./BlockAnimation";
import BlockManager from "./BlockManager";
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

  /** 配置 */
  readonly config: Partial<ImageScatterConfig> = {};

  /** 开始 */
  async start(config?: Partial<ImageScatterConfig>) {
    if (config) {
      this.pause();

      await this.updateConfig(config);

      const data = this.blockManager.blockCoordinates[0];
      console.log(data);
      // this.canvasProcessor.rendering(data);
    } else {
    }
    this.status = "running";
  }
  /** 暂停 */
  pause() {
    this.status = "static";
  }

  /** 更新配置 */
  async updateConfig(config: Partial<ImageScatterConfig>) {
    if (this.status == "running") {
      this.start(config);
      return false;
    }

    Object.assign(this.config, config);

    this.canvasProcessor.update();

    await this.imageProcessor.update();

    this.calculateOrigin();

    this.blockManager.update();
  }

  /** 计算原点 */
  private calculateOrigin() {
    if (!this.config.origin) {
      const { imageWidth, imageHeight } = this.imageProcessor.export;
      const { canvasWidth, canvasHeight } = this.canvasProcessor.export;
      this.config.origin = {
        x: Math.round((canvasWidth - imageWidth) / 2),
        y: Math.round((canvasHeight - imageHeight) / 2),
      };
    }
  }
}

export default ImageScatterRecombine;
