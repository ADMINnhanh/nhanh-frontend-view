/**
 * MPEG 音频帧头解析核心类
 * 功能隔离设计：
 * - MpegFrameHeaderParser: 单帧头解析（核心）
 * - MpegFrameFinder: 有效帧查找（辅助）
 * - MpegFrameCalculator: 帧参数计算（衍生）
 * - MpegAudioParser: 对外统一接口（整合）
 */

// MPEG 版本枚举
export enum MpegVersion {
  MPEG_VERSION_1 = "MPEG Version 1",
  MPEG_VERSION_2 = "MPEG Version 2",
  MPEG_VERSION_2_5 = "MPEG Version 2.5",
  MPEG_VERSION_UNKNOWN = "Unknown",
}

// MPEG 层枚举
export enum MpegLayer {
  LAYER_I = "Layer I",
  LAYER_II = "Layer II",
  LAYER_III = "Layer III",
  LAYER_UNKNOWN = "Unknown",
}

// 声道模式枚举
export enum MpegChannelMode {
  STEREO = "Stereo",
  JOINT_STEREO = "Joint Stereo",
  DUAL_CHANNEL = "Dual Channel",
  MONO = "Mono",
  UNKNOWN = "Unknown",
}

// 帧头解析结果类型
export interface MpegFrameHeader {
  // 基础信息
  offset: number; // 帧头在 buffer 中的偏移量
  isValid: boolean; // 是否为有效帧头
  syncWord: number; // 同步字 (11位，0xFFE)
  // 版本/层信息
  mpegVersion: MpegVersion;
  layer: MpegLayer;
  // 保护位 & CRC
  protectionBit: boolean; // false=有CRC校验, true=无CRC校验
  crcValid: boolean | null; // CRC校验结果 (无校验时为null)
  crcValue?: number; // CRC值 (存在时)
  // 比特率/采样率
  bitrateIndex: number;
  bitrate: number; // 实际比特率 (kbps)
  sampleRateIndex: number;
  sampleRate: number; // 实际采样率 (Hz)
  sampleRateExtension: boolean; // 是否启用采样率扩展
  bitrateExtension: boolean; // 是否启用比特率扩展
  // 帧结构
  paddingBit: boolean; // 填充位
  privateBit: boolean; // 私有位
  frameSize: number; // 帧总字节数 (含帧头+数据+CRC)
  frameDuration: number; // 帧时长 (ms)
  // 声道信息
  channelMode: MpegChannelMode;
  modeExtension: number; // 模式扩展 (仅Joint Stereo有效)
  copyright: boolean; // 版权位
  original: boolean; // 原版位
  emphasis: number; // 强调位 (0=无,1=50/15ms,2=保留,3=CCIT J.17)
}

// 空帧头常量（无效帧返回）
const EMPTY_FRAME_HEADER: MpegFrameHeader = {
  offset: -1,
  isValid: false,
  syncWord: 0,
  mpegVersion: MpegVersion.MPEG_VERSION_UNKNOWN,
  layer: MpegLayer.LAYER_UNKNOWN,
  protectionBit: false,
  crcValid: null,
  bitrateIndex: -1,
  bitrate: 0,
  sampleRateIndex: -1,
  sampleRate: 0,
  sampleRateExtension: false,
  bitrateExtension: false,
  paddingBit: false,
  privateBit: false,
  frameSize: 0,
  frameDuration: 0,
  channelMode: MpegChannelMode.UNKNOWN,
  modeExtension: -1,
  copyright: false,
  original: false,
  emphasis: -1,
};

/**
 * 核心：单帧头解析类
 * 负责解析单个帧头的所有字段，处理CRC校验
 */
class MpegFrameHeaderParser {
  private dataView: DataView;
  private static readonly SYNC_WORD_MASK = 0xffe00000; // 同步字掩码 (11位)
  private static readonly SYNC_WORD_VALUE = 0xffe00000; // 有效同步字值

  // 比特率表 (kbps) [版本][层][索引]
  private static readonly BITRATE_TABLE: Record<
    string,
    Record<string, number[]>
  > = {
    [MpegVersion.MPEG_VERSION_1]: {
      [MpegLayer.LAYER_I]: [
        0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 0,
      ],
      [MpegLayer.LAYER_II]: [
        0, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256,
      ],
      [MpegLayer.LAYER_III]: [
        0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0,
      ],
    },
    [MpegVersion.MPEG_VERSION_2]: {
      [MpegLayer.LAYER_I]: [
        0, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256,
      ],
      [MpegLayer.LAYER_II]: [
        0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 88, 96, 112, 128, 144, 160,
      ],
      [MpegLayer.LAYER_III]: [
        0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 88, 96, 112, 128, 144, 160,
      ],
    },
    [MpegVersion.MPEG_VERSION_2_5]: {
      [MpegLayer.LAYER_I]: [
        0, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256,
      ],
      [MpegLayer.LAYER_II]: [
        0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 88, 96, 112, 128, 144, 160,
      ],
      [MpegLayer.LAYER_III]: [
        0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 88, 96, 112, 128, 144, 160,
      ],
    },
  };

  // 采样率表 (Hz) [版本][索引]
  private static readonly SAMPLE_RATE_TABLE: Record<MpegVersion, number[]> = {
    [MpegVersion.MPEG_VERSION_1]: [44100, 48000, 32000, 0],
    [MpegVersion.MPEG_VERSION_2]: [22050, 24000, 16000, 0],
    [MpegVersion.MPEG_VERSION_2_5]: [11025, 12000, 8000, 0],
    [MpegVersion.MPEG_VERSION_UNKNOWN]: [0, 0, 0, 0],
  };

  constructor(buffer: ArrayBuffer) {
    this.dataView = new DataView(buffer);
  }

  /**
   * 解析指定偏移量的单个帧头
   * @param offset 帧头起始偏移量
   * @returns 帧头信息（无效则返回EMPTY_FRAME_HEADER）
   */
  parseFrameHeader(offset: number): MpegFrameHeader {
    // 基础校验：偏移量越界/帧头不足4字节
    if (offset + 4 > this.dataView.byteLength) {
      return { ...EMPTY_FRAME_HEADER, offset };
    }

    // 读取帧头4字节 (big-endian)
    const headerBytes = this.readHeaderBytes(offset);
    if (headerBytes === null) {
      return { ...EMPTY_FRAME_HEADER, offset };
    }

    // 1. 同步字校验 (11位)
    const syncWord =
      (headerBytes & MpegFrameHeaderParser.SYNC_WORD_MASK) >>> 21;
    if (
      (headerBytes & MpegFrameHeaderParser.SYNC_WORD_VALUE) !==
      MpegFrameHeaderParser.SYNC_WORD_VALUE
    ) {
      return { ...EMPTY_FRAME_HEADER, offset, syncWord };
    }

    // 2. 解析基础字段
    const frameHeader: MpegFrameHeader = {
      ...EMPTY_FRAME_HEADER,
      offset,
      isValid: true,
      syncWord,
    };

    // MPEG版本 (2位)
    frameHeader.mpegVersion = this.parseMpegVersion((headerBytes >> 19) & 0x03);
    // 层 (2位)
    frameHeader.layer = this.parseLayer((headerBytes >> 17) & 0x03);
    // 保护位 (1位)
    frameHeader.protectionBit = ((headerBytes >> 16) & 0x01) === 1;
    // 比特率索引 (4位)
    frameHeader.bitrateIndex = (headerBytes >> 12) & 0x0f;
    // 采样率索引 (2位)
    frameHeader.sampleRateIndex = (headerBytes >> 10) & 0x03;
    // 填充位 (1位)
    frameHeader.paddingBit = ((headerBytes >> 9) & 0x01) === 1;
    // 私有位 (1位)
    frameHeader.privateBit = ((headerBytes >> 8) & 0x01) === 1;
    // 声道模式 (2位)
    frameHeader.channelMode = this.parseChannelMode((headerBytes >> 6) & 0x03);
    // 模式扩展 (2位)
    frameHeader.modeExtension = (headerBytes >> 4) & 0x03;
    // 版权位 (1位)
    frameHeader.copyright = ((headerBytes >> 3) & 0x01) === 1;
    // 原版位 (1位)
    frameHeader.original = ((headerBytes >> 2) & 0x01) === 1;
    // 强调位 (2位)
    frameHeader.emphasis = headerBytes & 0x03;

    // 3. 解析比特率（支持扩展）
    const bitrateInfo = this.parseBitrate(
      frameHeader.mpegVersion,
      frameHeader.layer,
      frameHeader.bitrateIndex
    );
    frameHeader.bitrate = bitrateInfo.bitrate;
    frameHeader.bitrateExtension = bitrateInfo.isExtended;

    // 4. 解析采样率（支持扩展）
    const sampleRateInfo = this.parseSampleRate(
      frameHeader.mpegVersion,
      frameHeader.sampleRateIndex
    );
    frameHeader.sampleRate = sampleRateInfo.sampleRate;
    frameHeader.sampleRateExtension = sampleRateInfo.isExtended;

    // 5. CRC校验（保护位为false时校验）
    if (!frameHeader.protectionBit) {
      const crcResult = this.validateCrc(offset, headerBytes);
      frameHeader.crcValid = crcResult.isValid;
      frameHeader.crcValue = crcResult.crcValue;
    } else {
      frameHeader.crcValid = null;
    }

    // 6. 计算帧参数（帧大小/时长）
    const frameCalculator = new MpegFrameCalculator();
    frameHeader.frameSize = frameCalculator.calculateFrameSize(frameHeader);
    frameHeader.frameDuration =
      frameCalculator.calculateFrameDuration(frameHeader);

    return frameHeader;
  }

  /**
   * 读取帧头4字节（处理边界）
   * @param offset 起始偏移量
   * @returns 4字节拼接值（big-endian）
   */
  private readHeaderBytes(offset: number): number | null {
    try {
      // 读取4字节并拼接为32位整数 (big-endian)
      return this.dataView.getUint32(offset, false);
    } catch (e) {
      return null;
    }
  }

  /**
   * 解析MPEG版本
   * @param versionBits 版本位 (2位)
   * @returns MPEG版本枚举
   */
  private parseMpegVersion(versionBits: number): MpegVersion {
    switch (versionBits) {
      case 0b00:
        return MpegVersion.MPEG_VERSION_2_5;
      case 0b01:
        return MpegVersion.MPEG_VERSION_UNKNOWN;
      case 0b10:
        return MpegVersion.MPEG_VERSION_2;
      case 0b11:
        return MpegVersion.MPEG_VERSION_1;
      default:
        return MpegVersion.MPEG_VERSION_UNKNOWN;
    }
  }

  /**
   * 解析层
   * @param layerBits 层位 (2位)
   * @returns 层枚举
   */
  private parseLayer(layerBits: number): MpegLayer {
    switch (layerBits) {
      case 0b00:
        return MpegLayer.LAYER_UNKNOWN;
      case 0b01:
        return MpegLayer.LAYER_III;
      case 0b10:
        return MpegLayer.LAYER_II;
      case 0b11:
        return MpegLayer.LAYER_I;
      default:
        return MpegLayer.LAYER_UNKNOWN;
    }
  }

  /**
   * 解析声道模式
   * @param channelBits 声道位 (2位)
   * @returns 声道模式枚举
   */
  private parseChannelMode(channelBits: number): MpegChannelMode {
    switch (channelBits) {
      case 0b00:
        return MpegChannelMode.STEREO;
      case 0b01:
        return MpegChannelMode.JOINT_STEREO;
      case 0b10:
        return MpegChannelMode.DUAL_CHANNEL;
      case 0b11:
        return MpegChannelMode.MONO;
      default:
        return MpegChannelMode.UNKNOWN;
    }
  }

  /**
   * 解析比特率（支持扩展）
   * @param version MPEG版本
   * @param layer 层
   * @param index 比特率索引
   * @returns 比特率+是否扩展
   */
  private parseBitrate(
    version: MpegVersion,
    layer: MpegLayer,
    index: number
  ): { bitrate: number; isExtended: boolean } {
    // 无效索引/版本/层
    if (
      version === MpegVersion.MPEG_VERSION_UNKNOWN ||
      layer === MpegLayer.LAYER_UNKNOWN ||
      index > 15 ||
      index < 0
    ) {
      return { bitrate: 0, isExtended: false };
    }

    // 基础比特率
    const baseBitrate =
      MpegFrameHeaderParser.BITRATE_TABLE[version]?.[layer]?.[index] || 0;
    // 比特率扩展（处理非标准扩展场景）
    const isExtended = baseBitrate === 0 && index !== 0;

    return {
      bitrate: baseBitrate || 0,
      isExtended,
    };
  }

  /**
   * 解析采样率（支持扩展）
   * @param version MPEG版本
   * @param index 采样率索引
   * @returns 采样率+是否扩展
   */
  private parseSampleRate(
    version: MpegVersion,
    index: number
  ): { sampleRate: number; isExtended: boolean } {
    // 无效索引/版本
    if (
      version === MpegVersion.MPEG_VERSION_UNKNOWN ||
      index > 3 ||
      index < 0
    ) {
      return { sampleRate: 0, isExtended: false };
    }

    // 基础采样率
    const baseSampleRate =
      MpegFrameHeaderParser.SAMPLE_RATE_TABLE[version]?.[index] || 0;
    // 采样率扩展（处理非标准扩展场景）
    const isExtended = baseSampleRate === 0 && index !== 3;

    return {
      sampleRate: baseSampleRate || 0,
      isExtended,
    };
  }

  /**
   * 验证CRC校验（保护位为false时）
   * @param offset 帧头偏移量
   * @param headerBytes 帧头4字节
   * @returns CRC校验结果
   */
  private validateCrc(
    offset: number,
    headerBytes: number
  ): { isValid: boolean; crcValue?: number } {
    try {
      // CRC值在帧头后2字节 (offset+4)
      const crcValue = this.dataView.getUint16(offset + 4, false);
      // 简化CRC校验（实际需根据MPEG标准计算，此处为示例逻辑）
      // 注：完整CRC校验需计算帧数据的CRC并对比，此处仅做存在性验证
      return {
        isValid: crcValue > 0,
        crcValue,
      };
    } catch (e) {
      return { isValid: false };
    }
  }
}

/**
 * 辅助：有效帧查找类
 * 负责跳过ID3标签、遍历查找有效帧头
 */
class MpegFrameFinder {
  private dataView: DataView;
  private frameParser: MpegFrameHeaderParser;
  private audioStartOffset: number; // 音频数据起始偏移（跳过ID3v2）
  private audioEndOffset: number; // 音频数据结束偏移（排除ID3v1）

  constructor(buffer: ArrayBuffer, tagSize: number, isId3v1: boolean) {
    this.dataView = new DataView(buffer);
    this.frameParser = new MpegFrameHeaderParser(buffer);

    // 计算音频数据范围
    this.audioStartOffset = Math.max(0, tagSize); // 跳过ID3v2
    this.audioEndOffset = this.dataView.byteLength - (isId3v1 ? 128 : 0); // 排除ID3v1
  }

  /**
   * 查找下一个有效帧头
   * @param startOffset 起始查找偏移量
   * @returns 有效帧头（无则返回EMPTY_FRAME_HEADER）
   */
  findNextFrame(startOffset: number): MpegFrameHeader {
    // 边界校验
    if (
      startOffset < this.audioStartOffset ||
      startOffset >= this.audioEndOffset
    ) {
      return { ...EMPTY_FRAME_HEADER, offset: startOffset };
    }

    // 逐字节查找（跳过无效帧头）
    for (let offset = startOffset; offset < this.audioEndOffset - 4; offset++) {
      const frameHeader = this.frameParser.parseFrameHeader(offset);
      // 有效帧头：同步字有效+比特率/采样率有效
      if (
        frameHeader.isValid &&
        frameHeader.bitrate > 0 &&
        frameHeader.sampleRate > 0
      ) {
        return frameHeader;
      }
    }

    return { ...EMPTY_FRAME_HEADER, offset: startOffset };
  }

  /**
   * 查找所有有效帧头
   * @returns 所有有效帧头列表
   */
  findAllFrames(): MpegFrameHeader[] {
    const frames: MpegFrameHeader[] = [];
    let currentOffset = this.audioStartOffset;

    // 循环查找直到音频结束
    while (currentOffset < this.audioEndOffset - 4) {
      const frame = this.findNextFrame(currentOffset);
      if (!frame.isValid) {
        break;
      }

      frames.push(frame);
      // 移动到下一帧（按帧大小偏移）
      currentOffset += frame.frameSize || 1;
    }

    return frames;
  }
}

/**
 * 衍生：帧参数计算类
 * 负责计算帧大小、帧时长等衍生参数
 */
class MpegFrameCalculator {
  /**
   * 计算帧总字节数
   * @param frameHeader 帧头信息
   * @returns 帧大小（字节）
   */
  calculateFrameSize(frameHeader: MpegFrameHeader): number {
    if (
      !frameHeader.isValid ||
      frameHeader.bitrate === 0 ||
      frameHeader.sampleRate === 0
    ) {
      return 0;
    }

    // MPEG帧大小公式：
    // Layer I: (12 * bitrate * 1000 / sampleRate) + paddingBit * 4
    // Layer II/III: (144 * bitrate * 1000 / sampleRate) + paddingBit
    const bitrateKbps = frameHeader.bitrate;
    const sampleRateHz = frameHeader.sampleRate;
    const padding = frameHeader.paddingBit ? 1 : 0;

    switch (frameHeader.layer) {
      case MpegLayer.LAYER_I:
        return Math.floor(
          (12 * bitrateKbps * 1000) / sampleRateHz + padding * 4
        );
      case MpegLayer.LAYER_II:
      case MpegLayer.LAYER_III:
        return Math.floor((144 * bitrateKbps * 1000) / sampleRateHz + padding);
      default:
        return 0;
    }
  }

  /**
   * 计算帧时长（ms）
   * @param frameHeader 帧头信息
   * @returns 帧时长（ms）
   */
  calculateFrameDuration(frameHeader: MpegFrameHeader): number {
    if (!frameHeader.isValid || frameHeader.sampleRate === 0) {
      return 0;
    }

    // 每帧样本数
    let samplesPerFrame = 0;
    switch (frameHeader.layer) {
      case MpegLayer.LAYER_I:
        samplesPerFrame = 384;
        break;
      case MpegLayer.LAYER_II:
        samplesPerFrame = 1152;
        break;
      case MpegLayer.LAYER_III:
        samplesPerFrame =
          frameHeader.mpegVersion === MpegVersion.MPEG_VERSION_1 ? 1152 : 576;
        break;
      default:
        return 0;
    }

    // 帧时长 = 样本数 / 采样率 * 1000 (ms)
    return (samplesPerFrame / frameHeader.sampleRate) * 1000;
  }
}

/**
 * 对外统一接口：MPEG音频解析器
 * 整合所有功能，提供简洁的对外API
 */
export class MpegAudioParser {
  private frameFinder: MpegFrameFinder;
  private frameParser: MpegFrameHeaderParser;

  /**
   * 构造函数
   * @param buffer 音频数据ArrayBuffer
   * @param tagSize ID3v2标签大小（字节）
   * @param isId3v1 是否包含ID3v1标签
   */
  constructor(buffer: ArrayBuffer, tagSize: number, isId3v1: boolean) {
    this.frameParser = new MpegFrameHeaderParser(buffer);
    this.frameFinder = new MpegFrameFinder(buffer, tagSize, isId3v1);
  }

  /**
   * 解析单个帧头（指定偏移量）
   * @param offset 帧头偏移量
   * @returns 帧头信息
   */
  parseSingleFrame(offset: number): MpegFrameHeader {
    return this.frameParser.parseFrameHeader(offset);
  }

  /**
   * 查找并解析第一个有效帧头
   * @returns 第一个有效帧头
   */
  parseFirstFrame(): MpegFrameHeader {
    return this.frameFinder.findNextFrame(this.frameFinder["audioStartOffset"]);
  }

  /**
   * 解析所有有效帧头
   * @returns 所有有效帧头列表
   */
  parseAllFrames(): MpegFrameHeader[] {
    return this.frameFinder.findAllFrames();
  }
}
