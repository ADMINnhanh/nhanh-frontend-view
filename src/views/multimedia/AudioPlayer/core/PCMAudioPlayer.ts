import { _Utility_WaitForCondition } from "nhanh-pure-function";
import { Endianness } from "..";

/**
 * PCM 音频播放器
 * 支持播放 PCM 原始音频数据，可指定起始播放位置、播放时长和字节序
 */
export class PCMAudioPlayer {
  /** 音频上下文 */
  private audioContext?: AudioContext;
  /** 是否正在播放 */
  public isPlaying = false;
  /** 音频源节点 */
  private source?: AudioBufferSourceNode;
  /** 缓存音频缓冲区，方便重复播放 */
  public audioBuffer?: AudioBuffer;
  /** 增益节点（用于音量控制） */
  private gainNode?: GainNode;
  /** 当前音量（0~1，默认 1） */
  public currentVolume = 1;
  /** 播放开始位置（秒） */
  public startTime = 0;
  /** 播放时长（秒） */
  public duration = 0;
  /** 播放开始的AudioContext时间（用于计算已播放时长） */
  private playStartTime = 0;
  /** 暂停时记录的已播放时间（秒） */
  private offsetTime?: number;

  /** 音频参数配置 */
  public options: PCMPlayOptions = {
    sampleRate: 16000,
    channelCount: 1,
    bitDepth: 16,
    startTime: 0,
    duration: 0,
    endianness: Endianness.LE,
    volume: 1,
  };
  /** 获取音频总时长（秒） */
  public get totalDuration() {
    return this.audioBuffer ? this.audioBuffer.duration : 0;
  }
  /** 是否准备好 */
  public get ready() {
    return !!this.audioContext;
  }

  /**
   * 设置音量（实时生效，不中断播放）
   * @param volume 音量值（0~1，0=静音，1=最大音量）
   */
  public setVolume(volume: number): void {
    if (!this.gainNode) {
      console.warn("增益节点未初始化，请先调用 init()");
      return;
    }
    // 限制音量范围在 0~1 之间（避免音量过大失真）
    const clampedVolume = Math.max(0, Math.min(1, volume));
    this.currentVolume = clampedVolume;
    this.gainNode.gain.value = clampedVolume;
  }

  /** 初始化音频上下文（兼容不同浏览器） */
  public init(): void {
    if (!this.audioContext) {
      const AudioContextConstructor =
        window.AudioContext || (window as any).webkitAudioContext;
      this.audioContext = new AudioContextConstructor();
      // 创建增益节点（仅初始化一次）
      this.gainNode = this.audioContext.createGain();
      // 将增益节点连接到扬声器
      this.gainNode.connect(this.audioContext.destination);
      // 设置初始音量
      this.gainNode.gain.value = this.currentVolume;
    }
  }

  /**
   * 播放 PCM 音频数据（支持指定起始位置、字节序）
   * @param pcmData PCM 原始数据
   * @param options 音频参数配置
   * @returns Promise<void>
   */
  public async initPCM(
    pcmData: ArrayBuffer,
    options: Partial<PCMPlayOptions> = {}
  ): Promise<void> {
    // 确保音频上下文已初始化
    this.init();
    if (!this.audioContext) {
      console.error("音频上下文初始化失败");
      return;
    }

    Object.assign(this.options, options);
    // 默认参数（增加字节序默认值）
    const {
      sampleRate,
      channelCount,
      bitDepth,
      startTime,
      duration,
      endianness,
      volume,
    } = this.options;

    this.startTime = startTime;
    this.duration = duration;
    this.offsetTime = undefined;

    // 初始化后立即设置播放音量
    this.setVolume(volume);

    await this.stop();

    try {
      // 将 PCM 数据转换为 Float32Array（传入字节序参数）
      const audioData = this.convertPCMToFloat32(pcmData, bitDepth, endianness);

      // 创建 AudioBuffer
      this.audioBuffer = this.audioContext.createBuffer(
        channelCount,
        audioData.length / channelCount,
        sampleRate
      );

      // 将数据写入 AudioBuffer
      for (let channel = 0; channel < channelCount; channel++) {
        const channelData = this.audioBuffer.getChannelData(channel);
        // 单声道直接赋值，立体声按声道拆分
        for (let i = 0; i < channelData.length; i++) {
          channelData[i] = audioData[i * channelCount + channel];
        }
      }
    } catch (error) {
      console.error("播放 PCM 失败：", error);
    }
  }

  /**
   * 将不同位深、不同字节序的 PCM 转换为 Float32Array（范围 -1 ~ 1）
   * @param pcmData PCM 原始数据
   * @param bitDepth 位深（8/16/24/32）
   * @param endianness 字节序（默认小端序）
   * @returns Float32Array 转换后的音频数据
   */
  private convertPCMToFloat32(
    pcmData: ArrayBuffer,
    bitDepth: 8 | 16 | 24 | 32,
    endianness: PCMPlayOptions["endianness"] = Endianness.LE
  ): Float32Array {
    const dataView = new DataView(pcmData);
    const bytesPerSample = bitDepth / 8;
    const isLittleEndian = endianness === Endianness.LE;

    // 计算实际安全的样本数（考虑对齐）
    const actualSampleCount = Math.floor(pcmData.byteLength / bytesPerSample);

    const float32Array = new Float32Array(actualSampleCount);

    // 处理每个位深
    for (let i = 0; i < actualSampleCount; i++) {
      const byteOffset = i * bytesPerSample;

      switch (bitDepth) {
        case 8:
          float32Array[i] = (dataView.getUint8(byteOffset) - 128) / 128;
          break;

        case 16:
          float32Array[i] =
            dataView.getInt16(byteOffset, isLittleEndian) / 32768;
          break;

        case 24:
          let value24: number;
          if (isLittleEndian) {
            value24 =
              dataView.getUint8(byteOffset) |
              (dataView.getUint8(byteOffset + 1) << 8) |
              (dataView.getUint8(byteOffset + 2) << 16);
          } else {
            value24 =
              (dataView.getUint8(byteOffset) << 16) |
              (dataView.getUint8(byteOffset + 1) << 8) |
              dataView.getUint8(byteOffset + 2);
          }
          // 符号扩展
          if (value24 & 0x800000) {
            value24 |= 0xff000000;
          }
          float32Array[i] = value24 / 8388608;
          break;

        case 32:
          float32Array[i] =
            dataView.getInt32(byteOffset, isLittleEndian) / 2147483648;
          break;
      }
    }

    return float32Array;
  }

  /**
   * 播放完成回调函数（playFromPosition 播放结束时触发）
   */
  public onPlayCompleted?: () => void;
  /**
   * 从指定位置重新播放已加载的 PCM（无需重新解析数据）
   * @param startTime 起始播放位置（秒）
   * @param duration 播放时长（秒，可选）
   */
  public async playFromPosition(startTime: number = 0, duration: number = 0) {
    if (!this.audioBuffer || !this.audioContext) {
      console.error("请先加载 PCM 数据");
      return;
    }

    // 停止之前的播放
    if (this.isPlaying) {
      await this.stop();
    }

    // 校验参数
    const totalDuration = this.audioBuffer.duration;
    const playOffset = Math.max(0, Math.min(startTime, totalDuration));
    const playDuration =
      duration > 0 ? Math.min(duration, totalDuration - playOffset) : undefined;

    // 创建新的音频源播放
    this.source = this.audioContext.createBufferSource();
    this.source.buffer = this.audioBuffer;
    this.source.connect(this.gainNode!);
    this.source.start(0, playOffset, playDuration);

    this.isPlaying = true;
    this.playStartTime = this.audioContext.currentTime;

    this.source.onended = () => {
      // console.log("播放完成");
      this.updatePlayProgress();

      this.isPlaying = false;
      if (typeof this.offsetTime === "number") {
        this.offsetTime +=
          (this.audioContext?.currentTime || 0) - this.playStartTime;
      }
      this.onPlayCompleted?.();
    };
  }

  /**
   * 播放进度更新回调函数类型定义
   * @param currentTime - 当前播放时间（秒，保留2位小数）
   * @param totalDuration - 音频总时长（秒，保留2位小数）
   * @param progressPercentage - 播放进度（保留6位小数）
   */
  playProgressCallback?: (
    currentTime: string,
    totalDuration: string,
    progressPercentage: string
  ) => void;
  /** 播放进度实时更新方法 */
  private updatePlayProgress() {
    // 解构赋值，变量名语义化重命名
    const {
      isPlaying, // 保持原命名（语义已清晰）
      audioContext, // 保持原命名（API固定名称）
      audioBuffer, // 保持原命名（API固定名称）
      offsetTime, // 保持原命名（播放偏移时间，语义清晰）
      playStartTime, // 保持原命名（播放开始时间戳，语义清晰）
      playProgressCallback, // 进度回调函数（替代原xxx）
    } = this;

    if (!isPlaying || !audioContext || !audioBuffer || !playProgressCallback)
      return;

    // 计算当前播放进度（秒）
    const currentPlayTime =
      (offsetTime || 0) + (audioContext.currentTime - playStartTime);
    // 计算进度百分比
    const progressPercent = currentPlayTime / audioBuffer.duration;

    // 格式化数值（变量名语义化）
    const formattedCurrentTime = currentPlayTime.toFixed(2);
    const formattedTotalDuration = audioBuffer.duration.toFixed(2);
    const formattedProgressPercent = Math.min(1, progressPercent).toFixed(6);

    // 执行回调（传递格式化后的进度数据）
    playProgressCallback(
      formattedCurrentTime,
      formattedTotalDuration,
      formattedProgressPercent
    );

    // 递归调用，保持实时更新
    requestAnimationFrame(() => this.updatePlayProgress());
  }
  /** 播放 */
  public async play(startTime?: number) {
    if (typeof startTime === "number") {
      await this.stop();
      this.offsetTime = startTime;
    } else {
      if (this.isPlaying) return;
      const { startTime, offsetTime } = this;
      if (!offsetTime || offsetTime + startTime >= this.totalDuration) {
        this.offsetTime = 0;
      }
    }

    this.playFromPosition(this.startTime + this.offsetTime!, this.duration);
    this.updatePlayProgress();
  }
  /** 停止播放 */
  public async stop() {
    if (this.source) {
      // console.log("stop");
      this.source.stop();
      this.source.disconnect();
      this.source = undefined;

      await _Utility_WaitForCondition(() => !this.isPlaying, 500);
    }
  }

  /** 清理 */
  public clear(): void {
    this.stop();
    this.isPlaying = false;
    this.audioBuffer = undefined;
  }
}

export default PCMAudioPlayer;
