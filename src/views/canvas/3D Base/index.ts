import { ref } from "vue";

/** 偏移 */
const Offset = {
  x: 0,
  y: 0,
};
/** 旋转 */
const Rotation = {
  x: 0,
  y: 0,
  z: 0,
};
/** 缩放 */
let scale = 1;
/** 缩放步进 */
let scaleStep = 0.1;
/** 最大缩放 */
let maxScale = 4;
/** 最小缩放 */
let minScale = scaleStep;

/** 通用参数 */
let commonParams: {
  dom: HTMLCanvasElement;
  gl: WebGLRenderingContext;

  /** dom clientWidth */
  clientWidth: number;
  /** dom clientHeight */
  clientHeight: number;
  /** dom x */
  x: number;
  /** dom y */
  y: number;
};

/** 画布 */
export const canvas = ref<HTMLCanvasElement>();

/** 绘画线 */
function drawLine() {}
/** 绘画圆锥 */
function drawCone() {}
/** 绘画坐标轴 */
function drawAxis() {}

/** 绘制汇总 */
function drawFullList() {
  const dom = canvas.value as HTMLCanvasElement;
  const gl = dom.getContext("webgl");
  if (!dom || !gl) return window.$message.warning("初始化画布失败~");

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);

  const { clientWidth, clientHeight } = dom;
  dom.width = clientWidth;
  dom.height = clientHeight;

  const { x, y } = dom.getBoundingClientRect();

  commonParams = {
    dom,
    gl,
    clientWidth,
    clientHeight,
    x,
    y,
  };

  drawAxis();
}
