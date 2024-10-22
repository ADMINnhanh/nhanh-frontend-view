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
/** 坐标轴长度 */
let axisLength = 50;

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

/** 坐标轴的坐标 */
function axisPoint() {}
/** 绘画坐标轴 */
function drawAxis() {}

/** 初始化着色器程序 */
function initShader() {}

/** 初始化通用参数 */
function initCommonParams() {
  const dom = canvas.value as HTMLCanvasElement;
  const gl = dom.getContext("webgl");
  if (!dom || !gl) {
    window.$message.warning("初始化画布失败~");
    return;
  }

  const { clientWidth, clientHeight } = dom;
  dom.width = clientWidth;
  dom.height = clientHeight;

  const { x, y } = dom.getBoundingClientRect();

  return (commonParams = {
    dom,
    gl,
    clientWidth,
    clientHeight,
    x,
    y,
  });
}
/** 绘制汇总 */
export function drawFullList() {
  const newCommonParams = initCommonParams();
  if (!newCommonParams) return;
}
