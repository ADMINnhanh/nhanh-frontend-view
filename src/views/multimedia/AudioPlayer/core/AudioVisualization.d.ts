/**
 * 音频振幅可视化绘制器
 * 负责将 AudioBuffer 的振幅数据渲染到 Canvas 上，实现音频波形的动态可视化
 */
type AudioVisualizationConfig = {
  /**  Canvas 2D 渲染上下文 */
  canvasContext: CanvasRenderingContext2D;
  /** 音频总时长（秒） */
  duration: number;
  /** 包含音频样本数据的 AudioBuffer 对象 */
  audioBuffer: AudioBuffer;
  /** 音频声道数量 */
  channelCount: number;
  /** 目标帧率（每秒绘制次数） */
  fps: number;
};

type AudioVisualizationManagerConfig = Omit<
  AudioVisualizationConfig,
  "canvasContext" | "fps"
> & {
  /** 用于渲染波形的 Canvas 元素 */
  canvas: HTMLCanvasElement;
};
