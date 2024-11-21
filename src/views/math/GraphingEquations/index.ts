import { DrawAxisAndGrid } from "./AxisAndGrid";
import { shallowRef, watch } from "vue";
import { Settings } from "@/components/popups/components/Settings";
import { _Schedule, _Throttle } from "nhanh-pure-function";
import { mousePosition } from "./Event";

class BaseData {
  /** 画布元素 */
  canvas = {} as HTMLCanvasElement;
  /** 画布上下文 */
  ctx = {} as CanvasRenderingContext2D;
  /** 画布宽度 */
  width = 0;
  /** 画布高度 */
  height = 0;
  /** 画布偏移量 */
  offset = { x: 0, y: 0 };
  /** 画布中心点 */
  centent = { x: 0, y: 0 };
  /** 缩放比例 */
  scale = 1;
  /** 网格大小 */
  gridSize = { count: 2, min: 75, max: 150, size: 75 };
  /** 滚动10次一个周期 */
  cycle = 10;
  /** 滚轮滚动的值 */
  delta = 0.02;
  /** 是否在下一个渲染帧进行重绘 */
  redrawInNextRenderFrame = false;
  /** 是否正在自动调整 */
  isAuto = false;
}

class Style extends BaseData {
  style = {
    light: {
      background: "#fff",
      text: {
        color: "#222",
        secondary: "#909399",
        size: 12,
        family: "微软雅黑",
        bold: true,
      },
    },
    dark: {
      background: "#000",
      text: {
        color: "#aeaeae",
        secondary: "#A3A6AD",
        size: 12,
        family: "微软雅黑",
        bold: true,
      },
    },
  };

  initStyle() {
    const { ctx } = this;
    const theme = Settings.value.theme;
    const style = this.style[theme];

    ctx.font = `${style.text.bold ? "bold" : ""} ${style.text.size}px ${
      style.text.family
    }`;
  }
  clearScreen() {
    const { ctx, width, height } = this;
    const theme = Settings.value.theme;

    ctx.fillStyle = this.style[theme].background;
    ctx.fillRect(0, 0, width, height);
  }

  drawText(text: string, x: number, y: number, secondary?: boolean) {
    const { ctx } = this;
    const theme = Settings.value.theme;

    const style = this.style[theme];
    const { background } = style;

    ctx.font = `${style.text.bold ? "bold" : ""} ${style.text.size}px ${
      style.text.family
    }`;

    ctx.strokeStyle = background;
    ctx.strokeText(text, x, y);
    ctx.fillStyle = style.text[secondary ? "secondary" : "color"];
    ctx.fillText(text, x, y);
  }
}

class DataGather extends Style {
  drawOnCanvas() {
    const { width, height, offset } = this;

    this.clearScreen();

    this.centent = {
      x: width / 2 + offset.x,
      y: height / 2 + offset.y,
    };

    DrawAxisAndGrid();
  }
  redraw() {
    if (!this.redrawInNextRenderFrame) {
      this.redrawInNextRenderFrame = true;
      requestAnimationFrame(() => {
        this.drawOnCanvas();
        this.redrawInNextRenderFrame = false;
      });
    }
  }
}

class UpdateData extends DataGather {
  /** 监听元素大小 */
  resizeObserver = new ResizeObserver(
    _Throttle(() => this.updateCanvasSize(), 300)
  );
  updateCanvasSize() {
    const { canvas } = this;
    const { clientWidth, clientHeight } = canvas;
    canvas.width = clientWidth;
    canvas.height = clientHeight;
    this.width = clientWidth;
    this.height = clientHeight;

    this.initStyle();
    this.redraw();
  }

  updateScale(scaleOffset: number | boolean, isReset?: boolean) {
    if (!isReset && this.isAuto) this.isAuto = false;

    const { cycle, delta, gridSize, scale } = this;

    if (typeof scaleOffset === "boolean")
      scaleOffset = scaleOffset ? delta : -delta;
    this.scale += scaleOffset;

    let size = (Math.abs(this.scale - 1) % (cycle * delta)) / delta;
    size = Math.round(this.scale < 1 ? cycle - size : size);

    gridSize.size =
      (size / cycle) * (gridSize.max - gridSize.min) + gridSize.min;

    this.redraw();
  }

  updateOffset(offset: { x: number; y: number }, isReset?: boolean) {
    if (!isReset && this.isAuto) this.isAuto = false;

    this.offset.x += offset.x;
    this.offset.y += offset.y;
    this.redraw();
  }

  destroy() {
    this.resizeObserver.disconnect();
  }
}

class QuickMethod extends UpdateData {
  reset() {
    this.isAuto = true;
    const time = 1000;
    const waitResetData = {
      offset: { ...this.offset },
      scale: this.scale - 1,
    };

    _Schedule((schedule) => {
      if (!this.isAuto) return;

      if (schedule === 1) {
        this.offset = { x: 0, y: 0 };
        this.scale = 1;
        this.updateScale(0);
        this.isAuto = false;
      } else if (schedule > 0) {
        schedule = 1 - schedule;
        this.offset = {
          x: waitResetData.offset.x * schedule,
          y: waitResetData.offset.y * schedule,
        };
        this.scale = 1 + waitResetData.scale * schedule;
        this.updateScale(0, true);
      }
    }, time);
  }
}

class GraphingEquations extends QuickMethod {
  constructor(id: string) {
    super();
    const canvas = document.getElementById(id) as HTMLCanvasElement;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.resizeObserver.observe(canvas);
  }
  destroy() {
    super.destroy();
  }
}

export const graphingEquations = shallowRef<GraphingEquations>();

export function Init(id: string) {
  graphingEquations.value = new GraphingEquations(id);
  graphingEquations.value.updateCanvasSize();
}

watch(
  () => Settings.value.theme,
  () => graphingEquations.value?.redraw()
);
