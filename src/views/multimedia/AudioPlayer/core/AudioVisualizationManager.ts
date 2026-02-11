import AudioSpectrumRenderer from "./AudioSpectrumRenderer";
import AudioWaveformRenderer from "./AudioWaveformRenderer";
import { _Browser_GetFrameRate } from "nhanh-pure-function";

// 初始帧率默认值（60FPS）
let fps = 60;
_Browser_GetFrameRate((targetFrameRate) => (fps = targetFrameRate), 60);

/** 音频可视化管理器 */
class AudioVisualizationManager {
  /** 音频频谱渲染器实例 */
  private audioSpectrum = new AudioSpectrumRenderer();
  private audioSpectrumCanvas = document.createElement("canvas");
  private audioSpectrumCtx = this.audioSpectrumCanvas.getContext("2d");

  /** 音频波形渲染器实例 */
  private audioWaveform = new AudioWaveformRenderer();
  private audioWaveformCanvas = document.createElement("canvas");
  private audioWaveformCtx = this.audioWaveformCanvas.getContext("2d");

  canvas?: HTMLCanvasElement;
  ctx?: CanvasRenderingContext2D | null;
  /** 初始化音频可视化 */
  init(config: AudioVisualizationManagerConfig) {
    const {
      audioSpectrumCanvas,
      audioSpectrumCtx,
      audioWaveformCanvas,
      audioWaveformCtx,
    } = this;

    const { canvas, channelCount } = config;
    const width = Math.floor(canvas.getBoundingClientRect().width);
    canvas.width = width;
    canvas.height = 100 * (channelCount + 1);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    if (!this.ctx || !audioSpectrumCtx || !audioWaveformCtx) {
      console.error("Canvas 上下文不可用。");
      return;
    }

    audioSpectrumCanvas.width = width;
    audioSpectrumCanvas.height = 100;

    audioWaveformCanvas.width = width;
    audioWaveformCanvas.height = 100 * channelCount;

    this.audioWaveform.init({
      ...config,
      fps,
      canvasContext: audioWaveformCtx,
    });
    this.audioSpectrum.init({
      ...config,
      fps,
      canvasContext: audioSpectrumCtx,
    });
    this.ctx.drawImage(audioWaveformCanvas, 0, 0);
    this.ctx.drawImage(audioSpectrumCanvas, 0, audioWaveformCanvas.height);
  }
  /** 渲染音频可视化 */
  render(progress: number) {
    const {
      canvas,
      ctx,
      audioSpectrum,
      audioSpectrumCanvas,
      audioWaveform,
      audioWaveformCanvas,
    } = this;

    if (!canvas || !ctx) {
      console.error("Canvas 不可用。");
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    audioSpectrum.render(progress);
    audioWaveform.render(progress);

    ctx.drawImage(audioWaveformCanvas, 0, 0);
    ctx.drawImage(audioSpectrumCanvas, 0, audioWaveformCanvas.height);
  }
}

export default AudioVisualizationManager;
