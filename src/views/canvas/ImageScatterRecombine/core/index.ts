import type { ImageScatterAnimationType } from "..";
import Draw from "./draw";
import ImageProcessor from "./ImageProcessor";

// // 获取Canvas并转移控制权
// const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
// const offscreen: OffscreenCanvas = canvas.transferControlToOffscreen();

// // 创建Worker并传递OffscreenCanvas（使用transferToFixedArray避免拷贝）
// const worker = new Worker("worker.js");
// worker.postMessage({ type: "init", canvas: offscreen }, [offscreen]);

/** 图像打散重组配置项 */
type ImageScatterConfig = {
  /** 画布上下文 */
  ctx?: CanvasRenderingContext2D;
  /** 图片 */
  url: string | Blob | URL;
  /** 数据块大小 */
  blockSize: number;
  /** 动画类型 */
  animation: ImageScatterAnimationType;
};

/** 打散图像并重组 */
class ImageScatterRecombine {
  // /** 状态 “待处理” | “运行中” | “已完成” */
  // private status: "pending" | "running" | "finished" = "pending";

  /** 图片 */
  private imageProcessor = new ImageProcessor();
  /** 绘制类 */
  draw = new Draw();
  /** 动画类型 */
  private animation: ImageScatterAnimationType = "像素块依次飞入";
  /** 数据块大小 */
  private blockSize: number = 6;

  /** 开始 */
  async start(config: Partial<ImageScatterConfig>) {
    this.pause();

    await this.initConfig(config);

    console.log(this.imageProcessor.getBlockData(0, 0, this.blockSize));
  }
  /** 暂停 */
  pause() {}

  /** 初始化参数 */
  private async initConfig(config: Partial<ImageScatterConfig>) {
    if (config.ctx) this.draw.ctx = config.ctx;

    if (config.animation) this.animation = config.animation;

    if (config.blockSize) this.blockSize = Math.max(1, config.blockSize);

    await this.imageProcessor.update(config.url);
  }
}

export default ImageScatterRecombine;
