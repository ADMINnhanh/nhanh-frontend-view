import type Canvas from "..";

/** 样式管理器 */
class Style {
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

export default class Grid extends Style {
  /** 画布 */
  canvas?: Canvas;

  /** 网格开关 */
  show = {
    grid: {
      main: true,
      secondary: true,
    },
    axis: true,
    axisText: true,
  };

  constructor(canvas: Canvas) {
    super();
    this.canvas = canvas;
  }

  drawAxisAndGrid() {
    if (!this.canvas) return;
    if (this.show.grid.main || this.show.grid.secondary) this.drawGrid();
    if (this.show.axis) this.drawAxis();
    if (this.show.axisText) this.drawAxisText();
  }
  /** 绘制网格 */
  private drawGrid() {
    const canvas = this.canvas!;
    const { ctx, rect, center, gridConfig, theme } = canvas;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    const { width, height } = rect!;
    const color = this.style[theme] || this.style.light;

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
        center.x % grid_size > 0
          ? center.x % grid_size
          : grid_size + (center.x % grid_size);

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
        center.y % grid_size > 0
          ? center.y % grid_size
          : grid_size + (center.y % grid_size);

      for (let index = 0; index * grid_size + startY <= height; index++) {
        drawOuterGrid(
          [0, index * grid_size + startY],
          [width, index * grid_size + startY],
          color
        );
      }
    };

    if (this.show.grid.secondary) {
      /** 内网格x */
      drawX(inner_grid_size, color.innerGrid);
      /** 内网格y */
      drawY(inner_grid_size, color.innerGrid);
    }
    if (this.show.grid.main) {
      /** 外网格x */
      drawX(grid_size, color.grid);
      /** 外网格y */
      drawY(grid_size, color.grid);
    }
  }

  /** 坐标轴 */
  private drawAxis() {
    const canvas = this.canvas!;
    const { ctx, rect, center, theme } = canvas;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    const { width, height } = rect!;

    const color = this.style[theme] || this.style.light;

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
      if (center.y >= 0 && center.y <= height) {
        drawAxis([0, center.y], [width, center.y]);
      }
    };
    const drawY = () => {
      if (center.x >= 0 && center.x <= width) {
        drawAxis([center.x, 0], [center.x, height]);
      }
    };

    drawX();
    drawY();
  }

  /** 坐标轴 - 文字 */
  private drawAxisText() {
    const canvas = this.canvas!;
    const { ctx, rect, center, gridConfig, style, theme } = canvas;
    if (!ctx) return console.error("ctx is not CanvasRenderingContext2D");

    const { width, height } = rect!;

    /** 文字宽 */
    const textWidth = (text: string) => Math.ceil(ctx.measureText(text).width);

    const textOffset = 4;
    const textSize = style[theme].text.size;

    /** 0 */ {
      const w = textWidth("0");
      /** x 轴方向溢出？ */
      const isXAxisOverflowing =
        center.x < textOffset || center.x > width + w + textOffset;
      /** y 轴方向溢出？ */
      const isYAxisOverflowing =
        center.y < -(textOffset + textSize) ||
        center.y > height + textSize + textOffset;

      if (!isXAxisOverflowing && !isYAxisOverflowing) {
        canvas.drawText(
          "0",
          center.x - w - textOffset,
          center.y + textSize + textOffset
        );
      }
    }

    const count = canvas.getGridCount();

    const grid_size = gridConfig.size;

    /** x 轴的文字 */ {
      let y = center.y + textSize + textOffset;
      y = Math.max(Math.min(y, height - textOffset), textOffset + textSize);

      const isSecondary = center.y > height || center.y < 0;

      /** 起始位置 */
      let x =
        center.x > 0
          ? center.x % grid_size
          : center.x < 0
          ? grid_size + (center.x % grid_size)
          : 0;

      /** 起始值 */
      let v = canvas.getAxisValueByPoint(x - center.x, 0).xV;

      while (x <= width) {
        const textW = textWidth(String(v));
        v !== 0 && canvas.drawText(String(v), x - textW / 2, y, isSecondary);
        x += grid_size;
        v += count;
      }
    }

    /** y 轴的文字 */ {
      const isSecondary = center.x > width || center.x < 0;

      /** 起始位置 */
      let y =
        center.y > 0
          ? center.y % grid_size
          : center.y < 0
          ? grid_size + (center.y % grid_size)
          : 0;

      /** 起始值 */
      let v = canvas.getAxisValueByPoint(0, y - center.y).yV;

      while (y <= height) {
        const textW = textWidth(String(v));
        let x = center.x - textW - textOffset;
        x = Math.max(Math.min(x, width - textW - textOffset), textOffset);

        v !== 0 && canvas.drawText(String(v), x, y + textSize / 2, isSecondary);
        y += grid_size;
        v += count;
      }
    }
  }
}
