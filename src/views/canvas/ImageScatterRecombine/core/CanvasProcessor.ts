import type ImageScatterRecombine from ".";

/** 绘制类 */
class CanvasProcessor {
  /** 画布 */
  private id?: string;

  /** 用户最终画布上下文（合成结果） */
  private userCtx?: CanvasRenderingContext2D;
  /** 固定内容画布上下文（基础层） */
  private fixedCtx = document.createElement("canvas").getContext("2d")!;
  /** 动态内容画布上下文（叠加层） */
  private dynamicCtx = document.createElement("canvas").getContext("2d")!;

  /** 暴露一些属性 */
  get export() {
    return {
      canvasWidth: this.userCtx?.canvas.width || 0,
      canvasHeight: this.userCtx?.canvas.height || 0,
    };
  }

  /** 主类 */
  main: ImageScatterRecombine;
  constructor(main: ImageScatterRecombine) {
    this.main = main;
  }

  /** 更新配置 */
  update() {
    const { id } = this.main.config;
    const idChanged = id && id !== this.id;

    if (idChanged) {
      this.id = id;
      const canvas = document.getElementById(id) as HTMLCanvasElement;
      if (canvas) {
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        this.userCtx = canvas.getContext("2d")!;

        this.updateCanvasSize();
      }
    }
  }
  /** 更新画布大小 */
  updateCanvasSize() {
    if (!this.userCtx) return;

    const { width, height } = this.userCtx.canvas;
    this.fixedCtx.canvas.width = width;
    this.fixedCtx.canvas.height = height;
    this.dynamicCtx.canvas.width = width;
    this.dynamicCtx.canvas.height = height;
  }

  /** 渲染 */
  rendering(blockCoordinate: BlockCoordinate) {
    if (!this.userCtx) return;

    const { blockXIndex, blockYIndex, currentX, currentY } = blockCoordinate;
    const data = this.main.imageProcessor.getBlockPixelData(
      blockXIndex,
      blockYIndex
    );

    for (let y = 0; y < data.length; y++) {
      const row = data[y];
      for (let x = 0; x < data[0].length; x++) {
        const [r, g, b, a] = row[x];
        this.userCtx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
        this.userCtx.fillRect(currentX + x, currentY + y, 1, 1);
      }
    }
  }
}

export default CanvasProcessor;
