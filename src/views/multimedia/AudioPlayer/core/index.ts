/** 字节序枚举 */
export enum Endianness {
  /** 小端序（Little Endian）- 低字节在前，主流设备/音频格式默认 */
  LE = "le",
  /** 大端序（Big Endian）- 高字节在前，部分专业音频设备使用 */
  BE = "be",
  /** 小端序别名（兼容常见命名） */
  LittleEndian = "le",
  /** 大端序别名（兼容常见命名） */
  BigEndian = "be",
}

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
export interface PCMPlayOptions {
  /** 采样率（默认 16000） */
  sampleRate?: SampleRate;
  /** 位深（默认 16） */
  bitDepth?: 8 | 16 | 24 | 32;
  /** 声道数（默认 1） */
  channelCount?: number;
  /** 起始播放位置（秒，默认 0） */
  startTime?: number;
  /** 播放时长（秒，默认播放剩余全部） */
  duration?: number;
  /** 字节序（默认小端序 LE） */
  endianness?: Endianness;
  /** 音量（0~1，默认 1） */
  volume?: number;
}

/**
 * PCM 音频播放器（TypeScript 版本）
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
  private offsetTime = 0;

  /** 获取音频总时长（秒） */
  public get totalDuration() {
    return this.audioBuffer ? this.audioBuffer.duration : 0;
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
   * 设置音量（实时生效，不中断播放）
   * @param volume 音量值（0~1，0=静音，1=最大音量）
   */
  public setVolume(volume: number): void {
    if (!this.gainNode) {
      console.warn("增益节点未初始化，请先调用 init() 或 playPCM()");
      return;
    }
    // 限制音量范围在 0~1 之间（避免音量过大失真）
    const clampedVolume = Math.max(0, Math.min(1, volume));
    this.currentVolume = clampedVolume;
    this.gainNode.gain.value = clampedVolume;
  }

  /**
   * 播放 PCM 音频数据（支持指定起始位置、字节序）
   * @param pcmData PCM 原始数据
   * @param options 音频参数配置
   * @returns Promise<void>
   */
  public async initPCM(
    pcmData: ArrayBuffer,
    options: PCMPlayOptions = {}
  ): Promise<void> {
    // 确保音频上下文已初始化
    this.init();
    if (!this.audioContext) {
      console.error("音频上下文初始化失败");
      return;
    }

    // 默认参数（增加字节序默认值）
    const {
      sampleRate = 16000,
      channelCount = 1,
      bitDepth = 16,
      startTime = 0,
      duration = 0,
      endianness = Endianness.LE, // 默认小端序
      volume = 1, // 默认最大音量
    } = options;

    this.startTime = startTime;
    this.duration = duration;
    this.offsetTime = 0;

    // 初始化后立即设置播放音量
    this.setVolume(volume);

    this.stop();

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
   * 播放 PCM 音频数据（支持指定起始位置、字节序）
   * @param pcmData PCM 原始数据
   * @param options 音频参数配置
   * @returns Promise<void>
   */
  public async playPCM(): Promise<void>;
  public async playPCM(
    pcmData?: ArrayBuffer,
    options?: PCMPlayOptions
  ): Promise<void> {
    if (pcmData) {
      this.initPCM(pcmData, options);
    } else if (!this.audioBuffer) {
      console.error("请传入 PCM 音频数据");
      return;
    }

    if (!this.audioContext) return;

    this.offsetTime = 0;
    this.play();
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
  public playFromPosition(startTime: number = 0, duration: number = 0): void {
    if (!this.audioBuffer || !this.audioContext) {
      console.error("请先加载 PCM 数据");
      return;
    }

    // 停止之前的播放
    if (this.isPlaying) {
      this.stop();
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
      if (this.isPlaying) {
        this.isPlaying = false;
        this.offsetTime +=
          (this.audioContext?.currentTime || 0) - this.playStartTime;
      }
      this.onPlayCompleted?.();
    };
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
    endianness: Endianness = Endianness.LE
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
   * 播放进度更新回调函数类型定义
   * @param currentTime - 当前播放时间（秒，保留2位小数）
   * @param totalDuration - 音频总时长（秒，保留2位小数）
   * @param progressPercentage - 播放进度百分比（保留1位小数）
   */
  playProgressCallback?: (
    currentTime: string,
    totalDuration: string,
    progressPercentage: string
  ) => void;
  /**
   * 播放进度实时更新方法（替代原xxProgress）
   */
  updatePlayProgress() {
    // 解构赋值，变量名语义化重命名
    const {
      isPlaying, // 保持原命名（语义已清晰）
      audioContext, // 保持原命名（API固定名称）
      audioBuffer, // 保持原命名（API固定名称）
      offsetTime, // 保持原命名（播放偏移时间，语义清晰）
      playStartTime, // 保持原命名（播放开始时间戳，语义清晰）
      playProgressCallback, // 进度回调函数（替代原xxx）
    } = this;

    // 边界条件判断（保持逻辑不变，仅变量名优化）
    if (!isPlaying || !audioContext || !audioBuffer || !playProgressCallback)
      return;

    // 计算当前播放进度（秒）
    const currentPlayTime =
      offsetTime + (audioContext.currentTime - playStartTime);
    // 计算进度百分比
    const progressPercent = (currentPlayTime / audioBuffer.duration) * 100;

    // 格式化数值（变量名语义化）
    const formattedCurrentTime = currentPlayTime.toFixed(2);
    const formattedTotalDuration = audioBuffer.duration.toFixed(2);
    const formattedProgressPercent = progressPercent.toFixed(1);

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
  public play(): void {
    if (!this.isPlaying) {
      const { startTime, duration, offsetTime } = this;
      if (offsetTime + startTime >= this.totalDuration) {
        this.offsetTime = 0;
      }
      this.playFromPosition(startTime + this.offsetTime, duration);
      this.updatePlayProgress();
    }
  }
  /** 停止播放 */
  public stop(): void {
    if (this.source) {
      try {
        this.source.stop();
      } catch (e) {
        /* 忽略已停止的错误 */
      }
      this.source.disconnect();
      this.source = undefined;
      this.isPlaying = false;
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
