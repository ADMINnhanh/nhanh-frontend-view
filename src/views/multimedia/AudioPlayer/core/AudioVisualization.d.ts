/** 音频采样率联合类型 */
type SampleRate =
  /** 低质量语音（如早期电话），大部分浏览器支持 */
  | 8000
  /** 语音通话/语音识别（如讯飞、百度语音），通用支持 */
  | 16000
  /** 低音质音乐，通用支持 */
  | 22050
  /** 中等质量语音/低码率音频（播客/短视频），大部分现代浏览器支持 */
  | 24000
  /** 标准CD音质、大部分音频文件，所有浏览器都支持 */
  | 44100
  /** 专业音频、视频配套音频，所有现代浏览器支持 */
  | 48000
  /** 高解析音频（Hi-Res），仅部分现代浏览器/设备支持 */
  | 96000
  /** 超高解析音频（Hi-Res），仅部分现代浏览器/设备支持 */
  | 192000;

/** PCM 播放配置项类型定义 */
interface PCMPlayOptions {
  /** 采样率（默认 16000） */
  sampleRate: SampleRate;
  /** 位深（默认 16） */
  bitDepth: 8 | 16 | 24 | 32 | 64;
  /** 声道数（默认 1） */
  channelCount: number;
  /** 起始播放位置（秒，默认 0） */
  startTime: number;
  /** 播放时长（秒，默认播放剩余全部） */
  duration: number;
  /** 字节序（默认小端序 LE） */
  endianness: "le" | "be";
  /** 音量（0~1，默认 1） */
  volume: number;
}
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
};

type AudioVisualizationManagerConfig = {
  /** 用于渲染波形的 Canvas 元素 */
  canvas: HTMLCanvasElement;
  /** 音频数据 */
  pcmData: ArrayBuffer;
  /** 音频配置项 */
  pcmOptions?: Partial<PCMPlayOptions>;
};
