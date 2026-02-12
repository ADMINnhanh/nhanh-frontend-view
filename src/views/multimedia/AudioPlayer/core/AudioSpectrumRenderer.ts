/** 音频频谱渲染器 */
class AudioSpectrumRenderer {
  /** 配置项 */
  private config?: AudioVisualizationConfig;
  /** 振幅柱宽度 */
  private barWidth = 2;
  /** 振幅柱间距 */
  private barGap = 2;
  /** 振幅柱总数 */
  private barCount = 0;
  /** 振幅柱颜色 */
  private barColor = "#2080f0";

  /** 振幅数据缓存 */
  private amplitudeValues: number[] = [];
  /** 存储所有振幅柱的位置/尺寸信息（Metrics：度量/尺寸） */
  private amplitudeBarMetrics: Record<"x" | "y" | "height", number>[] = [];

  private lastTimelineX?: number;
  /**
   * 初始化音频振幅可视化图形
   * @param config 绘制配置（Canvas、音频数据、声道数）
   */
  init(config: AudioVisualizationConfig): void {
    this.config = config;
    this.lastTimelineX = undefined;
    this.calculateAmplitudeData();
    this.calculateAmplitudeBarMetrics();
    this.render(0);
  }
  /** 绘制音频振幅可视化图形 */
  render(progress: number): void {
    if (!this.config) return;
    const { canvasContext } = this.config;

    const { amplitudeBarMetrics, barColor, barWidth } = this;
    const { width, height } = canvasContext.canvas;

    const timelineX = Math.floor(((width - 2) * progress) / 100);

    if (this.lastTimelineX == timelineX) return;
    this.lastTimelineX = timelineX;

    canvasContext.clearRect(0, 0, width, height);

    canvasContext.fillStyle = barColor;
    amplitudeBarMetrics.forEach(({ x, y, height }) => {
      if (timelineX <= x) canvasContext!.fillStyle = "#B1B1B1FF";
      canvasContext.fillRect(x, y, barWidth, height);
    });

    canvasContext.fillStyle = barColor;
    canvasContext.fillRect(timelineX, 0, 2, height);
  }

  /**
   * 计算音频数据的振幅值（按柱数均分音频数据，取各声道最大振幅）
   */
  private calculateAmplitudeData(): void {
    if (!this.config) return;
    const { canvasContext, audioBuffer, channelCount } = this.config;
    const { barWidth, barGap } = this;

    // 计算振幅柱总数和最大高度
    this.barCount = Math.ceil(canvasContext.canvas.width / (barWidth + barGap));

    // 提取各声道的音频数据
    const audioDataLength = audioBuffer.length;
    const channelDataList = Array.from(
      { length: channelCount },
      (_, channelIndex) => audioBuffer.getChannelData(channelIndex)
    );
    const dataBlockSize = Math.floor(audioDataLength / this.barCount);

    // 计算每个振幅柱对应的平均振幅（取各声道最大值）
    this.amplitudeValues = [];
    for (let barIndex = 0; barIndex < this.barCount; barIndex++) {
      const startIndex = barIndex * dataBlockSize;
      const maxAmplitude = channelDataList.reduce((maxValue, channelData) => {
        // 计算当前数据块的均方根振幅（更贴合人耳听觉）
        const sumOfSquares = channelData
          .slice(startIndex, startIndex + dataBlockSize)
          .reduce((sum, sample) => sum + sample ** 2, 0);
        const rmsAmplitude = Math.sqrt(sumOfSquares / dataBlockSize);
        return Math.max(maxValue, rmsAmplitude);
      }, 0);
      this.amplitudeValues.push(maxAmplitude);
    }
  }
  /**
   * 计算所有振幅柱的位置和尺寸信息
   * 核心逻辑：基于音频振幅数据，计算每个可视化柱形的 x/y 坐标、宽高
   */
  private calculateAmplitudeBarMetrics(): void {
    const canvas = this.config?.canvasContext.canvas;
    if (!canvas) return;

    const { barWidth, barGap, barCount, amplitudeValues } = this;

    // 画布相关常量（振幅柱的最大高度为画布整体高度）
    const canvasFullHeight = canvas.height;
    const canvasVerticalCenterY = canvas.height / 2; // 画布垂直中心Y坐标
    let currentBarStartX = 0; // 当前振幅柱的起始X坐标

    this.amplitudeBarMetrics = [];

    // 遍历计算每个振幅柱的具体位置和尺寸
    for (let barIndex = 0; barIndex < barCount; barIndex++) {
      // 计算当前振幅柱的实际高度（振幅值 * 画布总高度）
      const currentBarHeight = canvasFullHeight * amplitudeValues[barIndex];

      // 存储当前振幅柱的完整度量信息（居中绘制：Y坐标 = 中心Y - 柱高/2）
      this.amplitudeBarMetrics.push({
        x: currentBarStartX,
        y: canvasVerticalCenterY - currentBarHeight / 2,
        height: currentBarHeight,
      });

      // 更新下一个振幅柱的起始X坐标（当前X + 柱宽 + 间距）
      currentBarStartX += barWidth + barGap;
    }
  }

  /** 清理 */
  clear() {
    this.amplitudeValues = [];
    this.amplitudeBarMetrics = [];
  }
}

export default AudioSpectrumRenderer;
