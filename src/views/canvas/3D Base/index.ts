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
  program: WebGLProgram;

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
function axisPoint() {
  return;
}
/** 绘画坐标轴 */
function drawAxis() {
  const { gl, program } = commonParams;

  // 定义线的两个端点坐标
  const lineVertices = [
    0,
    0,
    0, // 第一个端点
    1,
    1,
    1, // 第二个端点
  ];

  // 创建缓冲区并传入顶点数据
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(lineVertices),
    gl.STATIC_DRAW
  );

  // 获取顶点位置属性的位置
  const positionLocation = gl.getAttribLocation(program, "a_position");

  // 设置顶点属性指针
  gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(positionLocation);

  // 绘制线条
  gl.drawArrays(gl.LINES, 0, 2);
}

/** 初始化着色器 */
function initShader(gl: WebGLRenderingContext) {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);

  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  if (!vertexShader || !fragmentShader) {
    window.$message.warning("初始化着色器失败~");
    return;
  }

  /** 创建顶点着色器 */
  const vertexShaderSource = `
    attribute vec3 a_position;
    void main() {
      gl_Position = vec4(a_position, 1.0);
    }
  `;
  gl.shaderSource(vertexShader, vertexShaderSource);
  gl.compileShader(vertexShader);

  /** 创建片段着色器 */
  const fragmentShaderSource = `
      precision mediump float;
      void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 红色线条颜色
      }
    `;
  gl.shaderSource(fragmentShader, fragmentShaderSource);
  gl.compileShader(fragmentShader);

  // 创建着色器程序
  const program = gl.createProgram();
  if (!program) {
    window.$message.warning("初始化着色器失败~");
    return;
  }
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);

  return program;
}
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

  const program = initShader(gl);
  if (!program) return;

  return (commonParams = {
    dom,
    gl,
    program,
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

  drawAxis();
}
