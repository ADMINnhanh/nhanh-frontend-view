/**
 * 音频波形渲染器类
 * 核心功能：
 * 1. 预处理音频数据，计算各时间点的振幅值
 * 2. 根据播放进度动态渲染音频波形到 Canvas
 * 3. 适配多声道、高清屏显示
 */
class AudioWaveformRenderer {
  /** 渲染器配置项 */
  private config?: AudioVisualizationConfig;

  /** 各声道波形渲染的颜色集合（循环使用） */
  private channelColors = [
    "#91cc75",
    "#fac858",
    "#ee6666",
    "#73c0de",
    "#3ba272",
    "#fc8452",
    "#9a60b4",
    "#ea7ccc",
    "#5470c6",
  ];
  /** 每个声道分配的渲染高度（像素） */
  private channelRenderHeight = 0;
  /** 绘制压缩比例 */
  private compressionRatio = 1;
  /** 最大偏移下标 */
  private maxOffsetIndex = 0;
  /** 预期的绘制帧数（默认每秒30帧） */
  public fps = 60;

  /** 静音的声道 */
  public mutedChannels = new Set<number>();
  /**
   * 初始化音频振幅可视化渲染器
   * @param config 渲染配置项，包含 Canvas、音频数据、声道数等核心参数
   */
  init(config: AudioVisualizationConfig): void {
    this.config = config;

    const { canvasContext, channelCount, duration, audioBuffer } = config;
    const { width, height } = canvasContext.canvas;

    this.channelRenderHeight = Math.floor(height / channelCount);
    this.compressionRatio = Math.max(
      1,
      Math.floor(audioBuffer.length / (duration * this.fps * width))
    );
    this.maxOffsetIndex = Math.floor(
      audioBuffer.length / this.compressionRatio - width
    );

    this.renderChannelBaseLines(); // 绘制声道基准线（辅助可视化）
  }

  /**
   * 绘制各声道的基准线（辅助可视化，标识声道分隔）
   * 私有方法，仅初始化时调用
   */
  private renderChannelBaseLines(): void {
    const { config, channelColors, channelRenderHeight } = this;
    if (!config) return;

    const { channelCount, canvasContext } = config;
    const { width } = canvasContext.canvas;

    // 清空画布
    canvasContext.clearRect(0, 0, width, canvasContext.canvas.height);

    // 为每个声道绘制一条基准线
    for (let channelIndex = 0; channelIndex < channelCount; channelIndex++) {
      const color = channelColors[channelIndex % channelColors.length];
      canvasContext.fillStyle = color;
      // 计算当前声道基准线的 Y 坐标（声道区域垂直居中）
      const baseLineY =
        channelIndex * channelRenderHeight + channelRenderHeight / 2;
      // 绘制 1 像素宽的水平基准线
      canvasContext.fillRect(0, baseLineY, width, 1);
    }
  }

  /**
   * 根据播放进度绘制音频波形
   * @param progress 播放进度（0~1）
   */
  render(progress: number): void {
    const {
      channelRenderHeight,
      config,
      channelColors,
      compressionRatio,
      mutedChannels,
    } = this;

    // 校验必要参数，避免渲染异常
    if (!config) return;

    const { channelCount, canvasContext, audioBuffer } = config;
    const { width, height } = canvasContext.canvas;

    // 根据进度计算当前渲染的起始数据索引
    const currentStartIndex = Math.floor(this.maxOffsetIndex * progress);

    // 清空画布，准备绘制新帧
    canvasContext.clearRect(0, 0, width, height);

    // 逐声道绘制波形
    for (let channelIndex = 0; channelIndex < channelCount; channelIndex++) {
      const color = channelColors[channelIndex % channelColors.length];
      canvasContext.fillStyle = color;
      // 计算当前声道的垂直中心 Y 坐标
      const channelCenterY =
        channelRenderHeight * channelIndex + channelRenderHeight / 2;

      const channelRawData = audioBuffer.getChannelData(channelIndex);

      const muted = mutedChannels.has(channelIndex);

      // 逐像素绘制水平方向的波形点
      for (let x = 0; x < width; x++) {
        let waveformY = channelCenterY;
        if (!muted) {
          const start = (currentStartIndex + x) * compressionRatio;
          const end = start + compressionRatio;
          const amplitude =
            channelRawData
              .slice(start, end)
              .reduce((acc, cur) => acc + cur, 0) / compressionRatio;
          waveformY = Math.floor(
            channelCenterY - (channelRenderHeight / 2) * amplitude
          );
        }

        canvasContext.fillRect(x, waveformY, 1, 1);
      }
    }
  }
}

export default AudioWaveformRenderer;
