import type { Draw } from ".";

/** 样式管理器 */
class Style {
  theme: KnownStyleKeys = "light";
  style: GridStyleType = {
    light: {
      axis: "#222",
      grid: "#666",
      innerGrid: "#e5e5e5",
    },
    dark: {
      axis: "#aeaeae",
      grid: "#666",
      innerGrid: "#272727",
    },
  };

  /** 添加样式 */
  addStyle(style: GridStyleType) {
    this.style = { ...this.style, ...style };
  }
}

export class Grid extends Style {
  drawAxisAndGrid(canvas: Draw) {
    this.drawGrid(canvas);
    this.drawAxis(canvas);
    this.drawAxisText(canvas);
  }
  /** 绘制网格 */
  private drawGrid(canvas: Draw) {
    const { ctx, width, height, centent, gridConfig } = canvas;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    const color = this.style[this.theme];

    const grid_size = gridConfig.size;
    const inner_grid_size = grid_size / 5;

    /** 绘制外网格线 */
    const drawOuterGrid = (
      moveTo: [number, number],
      lineTo: [number, number],
      color: string
    ) => {
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(...moveTo);
      ctx.lineTo(...lineTo);
      ctx.stroke();
    };

    const drawX = (grid_size: number, color: string) => {
      /** 起始位置 */
      const startX =
        centent.x % grid_size > 0
          ? centent.x % grid_size
          : grid_size + (centent.x % grid_size);

      for (let index = 0; index * grid_size + startX <= width; index++) {
        drawOuterGrid(
          [index * grid_size + startX, 0],
          [index * grid_size + startX, height],
          color
        );
      }
    };
    const drawY = (grid_size: number, color: string) => {
      /** 起始位置 */
      const startY =
        centent.y % grid_size > 0
          ? centent.y % grid_size
          : grid_size + (centent.y % grid_size);

      for (let index = 0; index * grid_size + startY <= height; index++) {
        drawOuterGrid(
          [0, index * grid_size + startY],
          [width, index * grid_size + startY],
          color
        );
      }
    };
    /** 内网格x */
    drawX(inner_grid_size, color.innerGrid);
    /** 内网格y */
    drawY(inner_grid_size, color.innerGrid);
    /** 外网格x */
    drawX(grid_size, color.grid);
    /** 外网格y */
    drawY(grid_size, color.grid);
  }

  /** 坐标轴 */
  private drawAxis(canvas: Draw) {
    const { ctx, width, height, centent } = canvas;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    const color = this.style[this.theme];

    /** 绘制x和y轴 */
    const drawAxis = (moveTo: [number, number], lineTo: [number, number]) => {
      ctx.strokeStyle = color.axis;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(...moveTo);
      ctx.lineTo(...lineTo);
      ctx.stroke();
    };

    const drawX = () => {
      if (centent.y >= 0 && centent.y <= height) {
        drawAxis([0, centent.y], [width, centent.y]);
      }
    };
    const drawY = () => {
      if (centent.x >= 0 && centent.x <= width) {
        drawAxis([centent.x, 0], [centent.x, height]);
      }
    };

    drawX();
    drawY();
  }

  /** 坐标轴 - 文字 */
  private drawAxisText(canvas: Draw) {
    const { ctx, width, height, centent, gridConfig, style } = canvas;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    /** 文字宽 */
    const textWidth = (text: string) => Math.ceil(ctx.measureText(text).width);

    const textOffset = 4;
    const textSize = style[this.theme].text.size;

    /** 0 */ {
      const w = textWidth("0");
      /** x 轴方向溢出？ */
      const isXAxisOverflowing =
        centent.x < textOffset || centent.x > width + w + textOffset;
      /** y 轴方向溢出？ */
      const isYAxisOverflowing =
        centent.y < -(textOffset + textSize) ||
        centent.y > height + textSize + textOffset;

      if (!isXAxisOverflowing && !isYAxisOverflowing) {
        canvas.drawText(
          "0",
          centent.x - w - textOffset,
          centent.y + textSize + textOffset
        );
      }
    }

    const count = canvas.getGridCount();

    const grid_size = gridConfig.size;

    /** x 轴的文字 */ {
      let y = centent.y + textSize + textOffset;
      y = Math.max(Math.min(y, height - textOffset), textOffset + textSize);

      const isSecondary = centent.y > height || centent.y < 0;

      /** 起始位置 */
      let x =
        centent.x > 0
          ? centent.x % grid_size
          : centent.x < 0
          ? grid_size + (centent.x % grid_size)
          : 0;

      /** 起始值 */
      let v = canvas.getAxisPointValue(x - centent.x, 0).xV;

      while (x <= width) {
        const textW = textWidth(String(v));
        v !== 0 && canvas.drawText(String(v), x - textW / 2, y, isSecondary);
        x += grid_size;
        v += count;
      }
    }

    /** y 轴的文字 */ {
      const isSecondary = centent.x > width || centent.x < 0;

      /** 起始位置 */
      let y =
        centent.y > 0
          ? centent.y % grid_size
          : centent.y < 0
          ? grid_size + (centent.y % grid_size)
          : 0;

      /** 起始值 */
      let v = canvas.getAxisPointValue(0, y - centent.y).yV;

      while (y <= height) {
        const textW = textWidth(String(v));
        let x = centent.x - textW - textOffset;
        x = Math.max(Math.min(x, width - textW - textOffset), textOffset);

        v !== 0 && canvas.drawText(String(v), x, y + textSize / 2, isSecondary);
        y += grid_size;
        v += count;
      }
    }
  }
}
