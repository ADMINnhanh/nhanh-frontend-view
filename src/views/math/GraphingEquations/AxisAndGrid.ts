import { Settings } from "@/components/popups/components/Settings";
import { computed } from "vue";
import { baseData } from ".";

const color = computed(() => {
  const theme = Settings.value.theme;
  if (theme === "light")
    return {
      text: "#222",
      axis: "#222",
      grid: "#666",
      innerGrid: "#e5e5e5",
    };
  return {
    text: "#aeaeae",
    axis: "#aeaeae",
    grid: "#666",
    innerGrid: "#272727",
  };
});
/** 绘制网格 */
function DrawGrid() {
  const { ctx, width, height, centent, gridSize, scale } = baseData.value!;

  const grid_size = gridSize.size;
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
        : grid_size - (centent.x % grid_size);
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
        : grid_size - (centent.y % grid_size);
    for (let index = 0; index * grid_size + startY <= height; index++) {
      drawOuterGrid(
        [0, index * grid_size + startY],
        [width, index * grid_size + startY],
        color
      );
    }
  };
  /** 内网格x */
  drawX(inner_grid_size, color.value.innerGrid);
  /** 内网格y */
  drawY(inner_grid_size, color.value.innerGrid);
  /** 外网格x */
  drawX(grid_size, color.value.grid);
  /** 外网格y */
  drawY(grid_size, color.value.grid);
}

/** 坐标轴 - 文字 */
function DrawAxisText() {
  const { ctx, width, height, centent, gridSize, scale, delta, cycle } =
    baseData.value!;

  /** 文字宽 */
  const textWidth = (text: string) => Math.ceil(ctx.measureText(text).width);

  const textOffset = 2;
  const textSize = 12;
  ctx.fillStyle = color.value.text;
  ctx.font = textSize + `px 微软雅黑`;

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
      ctx.fillText(
        "0",
        centent.x - w - textOffset,
        centent.y + 12 + textOffset
      );
    }
  }

  const grid_size = (scale * gridSize.min) / (gridSize.max - gridSize.min);
  // console.log(scale, (scale - 1) / (cycle * delta));
}

/** 坐标轴 */
function DrawAxis() {
  const { ctx, width, height, centent } = baseData.value!;

  /** 绘制x和y轴 */
  const drawAxis = (moveTo: [number, number], lineTo: [number, number]) => {
    ctx.strokeStyle = color.value.axis;
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

export function DrawAxisAndGrid() {
  DrawGrid();
  DrawAxis();
  DrawAxisText();
}
