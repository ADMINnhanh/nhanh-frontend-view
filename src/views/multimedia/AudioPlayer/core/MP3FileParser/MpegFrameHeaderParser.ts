/** MPEG 版本枚举 */
export enum MpegVersion {
  MPEG_VERSION_1 = "MPEG Version 1",
  MPEG_VERSION_2 = "MPEG Version 2",
  MPEG_VERSION_2_5 = "MPEG Version 2.5",
  MPEG_VERSION_UNKNOWN = "Unknown",
}

/** MPEG 层枚举 */
export enum MpegLayer {
  LAYER_I = "Layer I",
  LAYER_II = "Layer II",
  LAYER_III = "Layer III",
  LAYER_UNKNOWN = "Unknown",
}

/** 声道模式枚举 */
export enum MpegChannelMode {
  STEREO = "Stereo",
  JOINT_STEREO = "Joint Stereo",
  DUAL_CHANNEL = "Dual Channel",
  MONO = "Mono",
  UNKNOWN = "Unknown",
}

/** 异常帧类型枚举 */
export enum MpegErrorFrameType {
  SYNC_WORD_INVALID = "同步字无效",
  BITRATE_SAMPLERATE_ZERO = "比特率/采样率为0",
  CRC_CHECK_FAILED = "CRC校验失败",
  FRAME_SIZE_INVALID = "帧大小计算异常",
  OFFSET_OUT_OF_BOUNDS = "偏移量越界",
  OTHER_PARSE_ERROR = "其他解析错误",
}

/** 异常帧详情接口 */
export type MpegErrorFrameDetail = {
  offset: number; // 异常帧偏移量
  errorType: MpegErrorFrameType; // 异常类型
  errorMsg?: string; // 异常描述
};

/** 音频基础信息接口 - 新增位深字段 */
export type MpegAudioBasicInfo = {
  bitrate: number; // 比特率 (kbps)
  sampleRate: number; // 采样率 (Hz)
  bitDepth: number; // 位深（默认16bit）
  channelCount: number; // 声道数 (1=单声道, 2=立体声)
  totalDuration: number; // 总时长 (ms)
};

/** 帧头解析结果类型 */
export type MpegFrameHeader = {
  offset: number; // 帧头在 buffer 中的偏移量
  isValid: boolean; // 是否为有效帧头
  syncWord: number; // 同步字 (11位，0xFFE)
  mpegVersion: MpegVersion; // MPEG版本
  layer: MpegLayer; // 音频层
  protectionBit: boolean; // false=有CRC校验, true=无CRC校验
  crcValid: boolean | null; // CRC校验结果 (无校验时为null)
  crcValue?: number; // CRC值 (存在时)
  bitrateIndex: number; // 比特率索引
  bitrate: number; // 实际比特率 (kbps)
  sampleRateIndex: number; // 采样率索引
  sampleRate: number; // 实际采样率 (Hz)
  sampleRateExtension: boolean; // 是否启用采样率扩展
  bitrateExtension: boolean; // 是否启用比特率扩展
  paddingBit: boolean; // 填充位
  privateBit: boolean; // 私有位
  frameSize: number; // 帧总字节数 (含帧头+数据+CRC)
  frameDuration: number; // 帧时长 (ms)
  channelMode: MpegChannelMode; // 声道模式
  modeExtension: number; // 模式扩展 (仅Joint Stereo有效)
  copyright: boolean; // 版权位
  original: boolean; // 原版位
  emphasis: number; // 强调位 (0=无,1=50/15ms,2=保留,3=CCIT J.17)
};

/** 最终解析结果接口 */
export type MpegAudioParseResult = {
  frameHeader: MpegFrameHeader; // 第一个有效帧的完整帧头
  frameCount: number; // 总检测帧数 (有效+异常)
  errorFrameCount: number; // 异常帧数量
  errorFrameDetails: MpegErrorFrameDetail[]; // 异常帧详情列表
  audioBasicInfo: MpegAudioBasicInfo; // 音频基础信息
};

/** 空帧头常量（无效帧返回） */
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
  /** 同步字掩码 (11位) */
  private static readonly SYNC_WORD_MASK = 0xffe00000;
  /** 有效同步字值 */
  private static readonly SYNC_WORD_VALUE = 0xffe00000;

  /**
   * 比特率表 (kbps) [版本][层][索引]
   * 遵循MPEG标准定义的比特率映射关系
   */
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

  /**
   * 采样率表 (Hz) [版本][索引]
   * 遵循MPEG标准定义的采样率映射关系
   */
  private static readonly SAMPLE_RATE_TABLE: Record<MpegVersion, number[]> = {
    [MpegVersion.MPEG_VERSION_1]: [44100, 48000, 32000, 0],
    [MpegVersion.MPEG_VERSION_2]: [22050, 24000, 16000, 0],
    [MpegVersion.MPEG_VERSION_2_5]: [11025, 12000, 8000, 0],
    [MpegVersion.MPEG_VERSION_UNKNOWN]: [0, 0, 0, 0],
  };

  /**
   * 构造函数
   * @param buffer 音频数据缓冲区
   */
  constructor(buffer: ArrayBuffer) {
    this.dataView = new DataView(buffer);
  }

  /**
   * 解析指定偏移量的单个帧头（含异常判定）
   * @param offset 帧头起始偏移量
   * @returns {frameHeader: 帧头信息, errorDetail: 异常详情(无则为null)}
   */
  parseFrameHeaderWithError(offset: number): {
    frameHeader: MpegFrameHeader;
    errorDetail: MpegErrorFrameDetail | null;
  } {
    // 1. 偏移量越界校验
    if (offset + 4 > this.dataView.byteLength) {
      const errorDetail: MpegErrorFrameDetail = {
        offset,
        errorType: MpegErrorFrameType.OFFSET_OUT_OF_BOUNDS,
        errorMsg: `偏移量${offset}超出buffer范围（总长度${this.dataView.byteLength}）`,
      };
      return {
        frameHeader: { ...EMPTY_FRAME_HEADER, offset },
        errorDetail,
      };
    }

    // 2. 读取帧头4字节
    const headerBytes = this.readHeaderBytes(offset);

    if (headerBytes === null) {
      const errorDetail: MpegErrorFrameDetail = {
        offset,
        errorType: MpegErrorFrameType.OTHER_PARSE_ERROR,
        errorMsg: "读取帧头4字节失败",
      };
      return {
        frameHeader: { ...EMPTY_FRAME_HEADER, offset },
        errorDetail,
      };
    }

    // 3. 同步字校验
    const syncWord =
      (headerBytes & MpegFrameHeaderParser.SYNC_WORD_MASK) >>> 20;

    if (
      (headerBytes & MpegFrameHeaderParser.SYNC_WORD_VALUE) >>> 0 !==
      MpegFrameHeaderParser.SYNC_WORD_VALUE
    ) {
      const errorDetail: MpegErrorFrameDetail = {
        offset,
        errorType: MpegErrorFrameType.SYNC_WORD_INVALID,
        errorMsg: `同步字${syncWord.toString(16)}无效，预期0xFFE`,
      };

      return {
        frameHeader: { ...EMPTY_FRAME_HEADER, offset, syncWord },
        errorDetail,
      };
    }

    // 4. 解析基础字段
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

    // 5. 解析比特率（支持扩展）
    const bitrateInfo = this.parseBitrate(
      frameHeader.mpegVersion,
      frameHeader.layer,
      frameHeader.bitrateIndex
    );
    frameHeader.bitrate = bitrateInfo.bitrate;
    frameHeader.bitrateExtension = bitrateInfo.isExtended;

    // 6. 解析采样率（支持扩展）
    const sampleRateInfo = this.parseSampleRate(
      frameHeader.mpegVersion,
      frameHeader.sampleRateIndex
    );
    frameHeader.sampleRate = sampleRateInfo.sampleRate;
    frameHeader.sampleRateExtension = sampleRateInfo.isExtended;

    // 7. 比特率/采样率为0校验
    if (frameHeader.bitrate === 0 || frameHeader.sampleRate === 0) {
      const errorDetail: MpegErrorFrameDetail = {
        offset,
        errorType: MpegErrorFrameType.BITRATE_SAMPLERATE_ZERO,
        errorMsg: `比特率${frameHeader.bitrate}kbps/采样率${frameHeader.sampleRate}Hz无效`,
      };
      frameHeader.isValid = false;
      return { frameHeader, errorDetail };
    }

    // 8. CRC校验（保护位为false时校验）
    if (!frameHeader.protectionBit) {
      const crcResult = this.validateCrc(offset, headerBytes);
      frameHeader.crcValid = crcResult.isValid;
      frameHeader.crcValue = crcResult.crcValue;
      if (!crcResult.isValid) {
        const errorDetail: MpegErrorFrameDetail = {
          offset,
          errorType: MpegErrorFrameType.CRC_CHECK_FAILED,
          errorMsg: `CRC校验失败，实际值${
            crcResult.crcValue?.toString(16) || "未知"
          }，计算值${crcResult.calculatedCrc?.toString(16) || "未知"}`,
        };
        frameHeader.isValid = false;
        return { frameHeader, errorDetail };
      }
    } else {
      frameHeader.crcValid = null;
    }

    // 9. 计算帧参数（帧大小/时长）
    const frameCalculator = new MpegFrameCalculator();
    frameHeader.frameSize = frameCalculator.calculateFrameSize(frameHeader);
    frameHeader.frameDuration =
      frameCalculator.calculateFrameDuration(frameHeader);

    // 10. 帧大小异常校验
    if (
      frameHeader.frameSize <= 0 ||
      frameHeader.frameSize > this.dataView.byteLength - offset
    ) {
      const errorDetail: MpegErrorFrameDetail = {
        offset,
        errorType: MpegErrorFrameType.FRAME_SIZE_INVALID,
        errorMsg: `帧大小${frameHeader.frameSize}字节无效（超出剩余buffer长度）`,
      };
      frameHeader.isValid = false;
      return { frameHeader, errorDetail };
    }

    // 无异常
    return { frameHeader, errorDetail: null };
  }

  /**
   * 读取帧头4字节（处理边界）
   * @param offset 起始偏移量
   * @returns 4字节拼接值（big-endian）
   */
  private readHeaderBytes(offset: number): number | null {
    try {
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
    if (
      version === MpegVersion.MPEG_VERSION_UNKNOWN ||
      layer === MpegLayer.LAYER_UNKNOWN ||
      index > 15 ||
      index < 0
    ) {
      return { bitrate: 0, isExtended: false };
    }

    const baseBitrate =
      MpegFrameHeaderParser.BITRATE_TABLE[version]?.[layer]?.[index] || 0;
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
    if (
      version === MpegVersion.MPEG_VERSION_UNKNOWN ||
      index > 3 ||
      index < 0
    ) {
      return { sampleRate: 0, isExtended: false };
    }

    const baseSampleRate =
      MpegFrameHeaderParser.SAMPLE_RATE_TABLE[version]?.[index] || 0;
    const isExtended = baseSampleRate === 0 && index !== 3;

    return {
      sampleRate: baseSampleRate || 0,
      isExtended,
    };
  }

  /**
   * 修复后的CRC校验方法（符合MPEG标准的CRC-16/CCITT校验）
   * @param offset 帧头偏移量
   * @param headerBytes 帧头4字节原始值
   * @returns CRC校验结果（包含实际值、计算值、是否有效）
   */
  private validateCrc(
    offset: number,
    headerBytes: number
  ): { isValid: boolean; crcValue?: number; calculatedCrc?: number } {
    try {
      // 1. 读取帧头后2字节的CRC值（存储的校验值）
      const crcValue = this.dataView.getUint16(offset + 4, false);

      // 2. 准备CRC计算的原始数据（帧头前4字节去掉最后2位 + 帧数据）
      //    MPEG标准：CRC计算不包含帧头的最后2位（emphasis）
      const headerForCrc = headerBytes & 0xfffffffc; // 清除最后2位
      const headerBytesArray = new Uint8Array(4);
      headerBytesArray[0] = (headerForCrc >> 24) & 0xff;
      headerBytesArray[1] = (headerForCrc >> 16) & 0xff;
      headerBytesArray[2] = (headerForCrc >> 8) & 0xff;
      headerBytesArray[3] = headerForCrc & 0xff;

      // 3. 计算帧数据长度（帧总大小 - 帧头4字节 - CRC2字节）
      const frameSize = new MpegFrameCalculator().calculateFrameSize({
        ...EMPTY_FRAME_HEADER,
        mpegVersion: this.parseMpegVersion((headerBytes >> 19) & 0x03),
        layer: this.parseLayer((headerBytes >> 17) & 0x03),
        bitrate: this.parseBitrate(
          this.parseMpegVersion((headerBytes >> 19) & 0x03),
          this.parseLayer((headerBytes >> 17) & 0x03),
          (headerBytes >> 12) & 0x0f
        ).bitrate,
        sampleRate: this.parseSampleRate(
          this.parseMpegVersion((headerBytes >> 19) & 0x03),
          (headerBytes >> 10) & 0x03
        ).sampleRate,
        paddingBit: ((headerBytes >> 9) & 0x01) === 1,
        isValid: true,
      });

      const dataLength = frameSize - 6; // 4字节头 + 2字节CRC = 6字节
      if (
        dataLength <= 0 ||
        offset + 6 + dataLength > this.dataView.byteLength
      ) {
        return { isValid: false, crcValue };
      }

      // 4. 读取帧数据（帧头+CRC之后的部分）
      const frameData = new Uint8Array(
        this.dataView.buffer,
        offset + 6,
        dataLength
      );

      // 5. 拼接CRC计算的完整数据（处理后的帧头 + 帧数据）
      const crcInput = new Uint8Array(4 + frameData.length);
      crcInput.set(headerBytesArray, 0);
      crcInput.set(frameData, 4);

      // 6. 计算CRC值（符合MPEG标准的CRC-16/CCITT）
      const calculatedCrc = this.calculateCrc16(crcInput);

      // 7. 对比校验值（MPEG存储的是CRC补码，需要取反后对比）
      const isCrcValid = (calculatedCrc ^ 0xffff) === crcValue;

      return {
        isValid: isCrcValid,
        crcValue,
        calculatedCrc,
      };
    } catch (e) {
      console.error("CRC校验计算失败:", e);
      return { isValid: false };
    }
  }

  /**
   * CRC-16/CCITT 校验计算（严格遵循MPEG标准）
   * @param data 待校验数据
   * @returns 计算后的CRC值
   */
  private calculateCrc16(data: Uint8Array): number {
    let crc = 0xffff; // 初始值
    const polynomial = 0x1021; // CCITT多项式

    for (let i = 0; i < data.length; i++) {
      crc ^= (data[i] << 8) & 0xff00; // 左移8位，与CRC高8位异或

      for (let j = 0; j < 8; j++) {
        if (crc & 0x8000) {
          // 最高位为1
          crc = (crc << 1) ^ polynomial;
        } else {
          crc <<= 1;
        }
        crc &= 0xffff; // 保持16位
      }
    }

    return crc;
  }
}

/**
 * 辅助：帧参数计算类
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

    return (samplesPerFrame / frameHeader.sampleRate) * 1000;
  }
}

/**
 * 辅助：有效帧查找类
 * 支持总帧数/异常帧统计，定位有效MPEG帧
 */
class MpegFrameFinder {
  dataView: DataView;
  private frameParser: MpegFrameHeaderParser;
  private audioStartOffset: number;
  private audioEndOffset: number;

  /**
   * 构造函数
   * @param buffer 音频数据缓冲区
   * @param tagSize ID3v2标签大小（字节）
   * @param isId3v1 是否包含ID3v1标签
   */
  constructor(buffer: ArrayBuffer, tagSize: number, isId3v1: boolean) {
    this.dataView = new DataView(buffer);
    this.frameParser = new MpegFrameHeaderParser(buffer);
    this.audioStartOffset = Math.max(0, tagSize);
    this.audioEndOffset = this.dataView.byteLength - (isId3v1 ? 128 : 0);
  }

  /**
   * 查找所有帧（含有效/异常），统计总帧数&异常帧
   * @returns 帧统计结果
   */
  findAllFramesWithError(): {
    validFrames: MpegFrameHeader[];
    totalFrameCount: number;
    errorFrameDetails: MpegErrorFrameDetail[];
  } {
    const validFrames: MpegFrameHeader[] = [];
    const errorFrameDetails: MpegErrorFrameDetail[] = [];
    let currentOffset = this.audioStartOffset;
    let totalFrameCount = 0;

    while (currentOffset < this.audioEndOffset - 4) {
      totalFrameCount++;
      const { frameHeader, errorDetail } =
        this.frameParser.parseFrameHeaderWithError(currentOffset);

      if (errorDetail) {
        errorFrameDetails.push(errorDetail);
        currentOffset += 1; // 异常帧逐字节偏移
      } else {
        validFrames.push(frameHeader);
        currentOffset += frameHeader.frameSize || 1; // 有效帧按帧大小偏移
      }
    }

    return {
      validFrames,
      totalFrameCount,
      errorFrameDetails,
    };
  }
}

/**
 * 对外统一接口：MPEG音频解析器
 * 整合所有功能，提供最终解析结果
 */
export default class MpegAudioParser {
  private frameFinder: MpegFrameFinder;
  private static readonly DEFAULT_BIT_DEPTH = 16; // 默认位深16bit

  /**
   * 构造函数
   * @param buffer 音频数据ArrayBuffer
   * @param tagSize ID3v2标签大小（字节）
   * @param isId3v1 是否包含ID3v1标签
   */
  constructor(buffer: ArrayBuffer, tagSize: number, isId3v1: boolean) {
    this.frameFinder = new MpegFrameFinder(buffer, tagSize, isId3v1);
  }

  /**
   * 完整解析MPEG音频（核心API）
   * @returns 最终解析结果
   */
  parseComplete(): MpegAudioParseResult {
    // 1. 查找所有帧（含有效/异常）
    const { validFrames, totalFrameCount, errorFrameDetails } =
      this.frameFinder.findAllFramesWithError();

    // 2. 获取第一个有效帧头
    const firstValidFrame =
      validFrames.find((frame) => frame.isValid) || EMPTY_FRAME_HEADER;

    // 3. 计算音频基础信息（新增bitDepth字段）
    const audioBasicInfo: MpegAudioBasicInfo = {
      sampleRate: firstValidFrame.sampleRate,
      bitrate: firstValidFrame.bitrate,
      channelCount:
        firstValidFrame.channelMode === MpegChannelMode.MONO ? 1 : 2,
      totalDuration: validFrames.reduce(
        (sum, frame) => sum + frame.frameDuration,
        0
      ),
      bitDepth: MpegAudioParser.DEFAULT_BIT_DEPTH, // 默认16位深
    };

    // 5. 组装最终结果
    return {
      frameHeader: firstValidFrame,
      frameCount: totalFrameCount,
      errorFrameCount: errorFrameDetails.length,
      errorFrameDetails,
      audioBasicInfo,
    };
  }
}
