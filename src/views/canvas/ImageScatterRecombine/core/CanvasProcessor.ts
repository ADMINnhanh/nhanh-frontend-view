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

  /** 画布宽度 */
  private canvasWidth = 0;
  /** 画布高度 */
  private canvasHeight = 0;
  /** 暴露一些属性 */
  get export() {
    return {
      canvasWidth: this.canvasWidth,
      canvasHeight: this.canvasHeight,
    };
  }

  /** 主类 */
  private main: ImageScatterRecombine;
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
      if (canvas) this.userCtx = canvas.getContext("2d")!;
      else console.error("canvas not found");
    }

    const { width, height } =
      this.userCtx?.canvas.getBoundingClientRect() || {};
    const sizeChange = width != this.canvasWidth || height != this.canvasHeight;
    if (sizeChange && width && height) this.updateCanvasSize(width, height);

    return !!(idChanged && sizeChange);
  }
  /** 更新画布大小 */
  updateCanvasSize(width: number, height: number) {
    if (!this.userCtx) return;

    this.canvasWidth = width;
    this.canvasHeight = height;
    this.userCtx.canvas.width = width;
    this.userCtx.canvas.height = height;
    this.fixedCtx.canvas.width = width;
    this.fixedCtx.canvas.height = height;
    this.dynamicCtx.canvas.width = width;
    this.dynamicCtx.canvas.height = height;
  }

  /** 已完成动画的区块数量（用于判断是否需要重绘固定层） */
  private finishedBlockCount = 0;
  /** 渲染画布（整合固定层和动态层） */
  renderCanvas() {
    // 若无用户画布上下文，直接返回
    if (!this.userCtx) return;

    const { runningBlocks, finishedBlocks } = this.main.throwManager;

    this.clearCtx(this.userCtx);
    this.clearCtx(this.dynamicCtx);

    // 仅当已完成动画的区块数量变化时，重绘固定层画布
    if (this.finishedBlockCount !== finishedBlocks.length) {
      this.clearCtx(this.fixedCtx);
      this.renderBlocks(this.fixedCtx, finishedBlocks);
      this.finishedBlockCount = finishedBlocks.length;
    }

    /** 每次都重绘动态层画布（运行中的动画区块） */
    this.renderBlocks(this.dynamicCtx, runningBlocks);

    // 将固定层和动态层画布绘制到用户可见的画布上
    this.userCtx.drawImage(this.fixedCtx.canvas, 0, 0);
    this.userCtx.drawImage(this.dynamicCtx.canvas, 0, 0);
  }

  /**
   * 渲染指定区块到目标画布
   * @param ctx 目标画布的2D上下文
   * @param blocks 待渲染的区块坐标数据数组
   */
  private renderBlocks(
    ctx: CanvasRenderingContext2D,
    blocks: BlockCoordinate[]
  ) {
    blocks.forEach((block) => {
      const { blockXIndex, blockYIndex, currentX, currentY } = block;
      // 获取当前区块的像素数据
      const blockPixelData = this.main.imageProcessor.getBlockPixelData(
        blockXIndex,
        blockYIndex
      );

      if (blockPixelData) ctx.putImageData(blockPixelData, currentX, currentY);
    });
  }

  /** 清理画布 */
  private clearCtx(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
  /** 重置 */
  reset() {
    this.clearCtx(this.fixedCtx);
    this.clearCtx(this.dynamicCtx);
  }
}

export default CanvasProcessor;
