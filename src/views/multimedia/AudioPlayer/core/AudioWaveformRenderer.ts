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
    "#5470c6",
    "#91cc75",
    "#fac858",
    "#ee6666",
    "#73c0de",
    "#3ba272",
    "#fc8452",
    "#9a60b4",
    "#ea7ccc",
  ];
  /** 每个声道分配的渲染高度（像素） */
  private channelRenderHeight = 0;
  /** 预处理后的波形数据总长度 */
  private waveformDataLength = 0;

  /** 各声道的振幅数据缓存（预处理后的值，范围 [-1, 1]） */
  private channelAmplitudeData: Float32Array[] = [];
  /** 上一次渲染的起始数据索引（用于防抖，避免重复渲染） */
  private lastRenderedStartIndex?: number;

  /**
   * 初始化音频振幅可视化渲染器
   * @param config 渲染配置项，包含 Canvas、音频数据、声道数等核心参数
   */
  init(config: AudioVisualizationConfig): void {
    this.config = config;
    this.lastRenderedStartIndex = undefined; // 重置上一次渲染索引
    this.channelRenderHeight = Math.floor(
      config.canvasContext.canvas.height / config.channelCount
    );
    this.preprocessAudioData(); // 预处理音频振幅数据
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
   * @param progress 播放进度（百分比，0-100）
   */
  render(progress: number): void {
    const {
      waveformDataLength,
      channelRenderHeight,
      channelAmplitudeData,
      config,
      channelColors,
    } = this;

    // 校验必要参数，避免渲染异常
    if (!config || !channelAmplitudeData.length) return;

    const { channelCount, canvasContext } = config;
    const { width, height } = canvasContext.canvas;

    // 根据进度计算当前渲染的起始数据索引
    const currentStartIndex = Math.floor(
      ((waveformDataLength - width) * progress) / 100
    );

    // 防抖：如果起始索引未变化，不重复渲染
    if (this.lastRenderedStartIndex === currentStartIndex) return;
    this.lastRenderedStartIndex = currentStartIndex;

    // 清空画布，准备绘制新帧
    canvasContext.clearRect(0, 0, width, height);

    // 逐声道绘制波形
    for (let channelIndex = 0; channelIndex < channelCount; channelIndex++) {
      const color = channelColors[channelIndex % channelColors.length];
      canvasContext.fillStyle = color;
      // 计算当前声道的垂直中心 Y 坐标
      const channelCenterY =
        channelRenderHeight * channelIndex + channelRenderHeight / 2;

      // 逐像素绘制水平方向的波形点
      for (let x = 0; x < width; x++) {
        // 获取当前位置的振幅值（注意边界，避免越界）
        const amplitude =
          channelAmplitudeData[channelIndex][x + currentStartIndex] || 0;
        // 计算波形点的 Y 坐标（振幅越大，偏离中心越远）
        const waveformY = Math.floor(
          channelCenterY - (channelRenderHeight / 2) * amplitude
        );
        // 绘制单个像素点（构成波形）
        canvasContext.fillRect(x, waveformY, 1, 1);
      }
    }
  }

  /**
   * 预处理音频数据，计算各时间点的振幅值
   * 核心逻辑：
   * 1. 根据帧率和时长计算数据块数量
   * 2. 对音频样本数据分块求平均，得到简化的振幅数据
   * 3. 缓存各声道的振幅数据，提升渲染性能
   */
  private preprocessAudioData(): void {
    if (!this.config) return;
    const { canvasContext, audioBuffer, channelCount, fps, duration } =
      this.config;

    // 计算总数据块数量（帧率 * 时长）
    const totalDataBlocks = Math.floor(duration * fps);
    // 计算波形数据总长度（限制最大值，避免数据量过大）
    this.waveformDataLength = Math.min(
      audioBuffer.length,
      canvasContext.canvas.width * totalDataBlocks
    );
    // 计算每个数据块包含的音频样本数
    const sampleCountPerBlock = Math.floor(
      audioBuffer.length / this.waveformDataLength
    );

    // 初始化各声道的振幅数据缓存
    this.channelAmplitudeData = Array.from({ length: channelCount }).map(
      () => new Float32Array(this.waveformDataLength)
    );

    // 逐声道处理音频数据
    for (let channelIndex = 0; channelIndex < channelCount; channelIndex++) {
      // 获取当前声道的原始样本数据
      const channelRawData = audioBuffer.getChannelData(channelIndex);

      // 逐数据块计算平均振幅
      for (
        let blockIndex = 0;
        blockIndex < this.waveformDataLength;
        blockIndex++
      ) {
        const startSampleIndex = blockIndex * sampleCountPerBlock;
        // 截取当前数据块的样本数据
        const blockSamples = channelRawData.slice(
          startSampleIndex,
          startSampleIndex + sampleCountPerBlock
        );
        // 计算当前数据块的平均振幅（求和后取平均值）
        const averageAmplitude =
          blockSamples.reduce((sum, sample) => sum + sample, 0) /
          sampleCountPerBlock;

        // 缓存平均振幅值
        this.channelAmplitudeData[channelIndex][blockIndex] = averageAmplitude;
      }
    }
  }
}

export default AudioWaveformRenderer;
