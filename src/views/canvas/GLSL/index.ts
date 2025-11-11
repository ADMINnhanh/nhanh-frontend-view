import { mat4 } from "gl-matrix";
/** @ts-ignore https://github.com/actarian/glsl-canvas */
import { Canvas } from "glsl-canvas-js";
import { _File_Read } from "nhanh-pure-function";

// 造型函数进阶
// https://thebookofshaders.com/05/?lan=ch

export default function main(id: string) {
  const canvas = document.getElementById(id) as HTMLCanvasElement;

  const options = {
    // vertexString: '...', // 顶点着色器代码字符串
    // fragmentString: '...', // 片段着色器代码字符串（将在下面通过glsl.load加载）
    backgroundColor: "rgba(0.0, 0.0, 0.0, 0.0)", // 画布背景颜色（黑色透明）
    alpha: true, // 启用透明度
    antialias: true, // 启用抗锯齿
    // depth: true, // 启用深度测试
    // desynchronized: false, // 是否与浏览器渲染同步
    // failIfMajorPerformanceCaveat: false, // 遇到性能问题时是否失败
    // powerPreference: 'default', // GPU性能偏好：'default'、'high-performance'、'low-power'
    // premultipliedAlpha: false, // 是否使用预乘alpha
    // preserveDrawingBuffer: false, // 是否保留绘图缓冲区
    // stencil: false, // 是否启用模板测试
    // doubleSided: false, // 是否渲染多边形两面
    extensions: ["EXT_shader_texture_lod"], // 启用的WebGL扩展
    // workpath: 'rootfolder', // 工作路径
    mode: "mesh", // 渲染模式：'mesh'、'points'、'lines'等
    // mesh: 'myfolder/myfile.obj', // 网格文件路径
  };

  const glsl = new Canvas(canvas, options);

  const fragment = new URL("./sun.glsl", import.meta.url).href;
  _File_Read(fragment).then((data) => {
    glsl.load(data);
  });
}
