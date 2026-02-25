import AudioSpectrumRenderer from "./AudioSpectrumRenderer";
import AudioWaveformRenderer from "./AudioWaveformRenderer";
import PCMAudioPlayer from "./PCMAudioPlayer";
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

  /** 音频播放器实例 */
  private audioPlayer = new PCMAudioPlayer();
  /** 获取音频总时长（秒） */
  public get totalDuration() {
    return this.audioPlayer.totalDuration;
  }

  canvas?: HTMLCanvasElement;
  ctx?: CanvasRenderingContext2D | null;

  /** 播放完成回调函数（playFromPosition 播放结束时触发） */
  public onPlayCompleted: PCMAudioPlayer["onPlayCompleted"];
  /**
   * 播放进度更新回调函数类型定义
   * @param currentTime - 当前播放时间（秒，保留2位小数）
   * @param totalDuration - 音频总时长（秒，保留2位小数）
   * @param progressPercentage - 播放进度百分比（保留1位小数）
   */
  playProgressCallback: PCMAudioPlayer["playProgressCallback"];

  constructor() {
    this.audioPlayer.onPlayCompleted = () => {
      this.onPlayCompleted?.();
    };

    this.audioPlayer.playProgressCallback = (
      currentTime,
      totalDuration,
      progressPercentage
    ) => {
      const progress = Number(progressPercentage);
      this.render(progress);
      this.playProgressCallback?.(
        currentTime,
        totalDuration,
        progressPercentage
      );
    };
  }

  /** 初始化 */
  async init(config: AudioVisualizationManagerConfig) {
    await this.initPCM(config);
    if (!this.audioPlayer.ready) return;
    this.initCanvas(config);
  }
  private async initPCM(config: AudioVisualizationManagerConfig) {
    const { audioPlayer } = this;
    const { pcmData, pcmOptions } = config;
    await audioPlayer.initPCM(pcmData, pcmOptions);
  }
  /** 初始化音频可视化 */
  private initCanvas(config: AudioVisualizationManagerConfig) {
    const {
      audioPlayer,
      audioSpectrumCanvas,
      audioSpectrumCtx,
      audioWaveformCanvas,
      audioWaveformCtx,
    } = this;

    const { canvas } = config;
    const channelCount = audioPlayer.options.channelCount;
    const audioBuffer = audioPlayer.audioBuffer!;
    const duration = audioPlayer.totalDuration;

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

    const audioVisualizationConfig = {
      channelCount,
      audioBuffer,
      duration,
      fps,
    };
    this.audioWaveform.init({
      ...audioVisualizationConfig,
      canvasContext: audioWaveformCtx,
    });
    this.audioSpectrum.init({
      ...audioVisualizationConfig,
      canvasContext: audioSpectrumCtx,
    });
    this.ctx.drawImage(audioWaveformCanvas, 0, 0);
    this.ctx.drawImage(audioSpectrumCanvas, 0, audioWaveformCanvas.height);
  }
  /** 渲染音频可视化 */
  private render(progress: number) {
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
  /**
   * 设置音量（实时生效，不中断播放）
   * @param volume 音量值（0~1，0=静音，1=最大音量）
   */
  setVolume(volume: number) {
    this.audioPlayer.setVolume(volume);
  }
  play(startTime?: number) {
    return this.audioPlayer.play(startTime);
  }
  stop() {
    this.audioPlayer.stop();
  }
  clear() {
    this.audioPlayer.clear();
    this.audioSpectrum.clear();
    this.audioWaveform.clear();

    const { ctx, canvas } = this;
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
}

export default AudioVisualizationManager;
