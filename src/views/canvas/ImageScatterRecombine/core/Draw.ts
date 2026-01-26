import type { BlockData } from "..";

/** 绘制类 */
class Draw {
  /** 画布上下文 */
  ctx?: CanvasRenderingContext2D;
  draw(x: number, y: number, data: BlockData) {
    if (!this.ctx) return;

    for (y; ; y++) {
      const row = data[y];
      for (x; ; x++) {
        const [r, g, b, a] = row[x];
        this.ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
        this.ctx.fillRect(x, y, 1, 1);
      }
    }
  }
}

export default Draw;
