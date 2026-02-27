/**
 * ID3v2 帧ID映射表
 * 可通过帧ID快速查询对应的中文含义，适配不同ID3v2版本
 */
const FRAME_ID_MAP = {
  // ID3v2.2 版本 (3字符帧ID)
  2.2: {
    TT2: "标题", // 歌曲标题
    TP1: "艺术家", // 主唱/独奏者
    TAL: "专辑", // 专辑名
    TYE: "年份", // 发行年份
    COM: "评论", // 评论信息
    TRK: "音轨号", // 音轨号/碟中位置
    TCO: "流派", // 音乐流派
    PIC: "附加图片", // 专辑封面等附加图片
    TCM: "作曲家", // 作曲家
    TCR: "版权信息", // 版权声明
    TBP: "播放速度", // 每分钟节拍数(BPM)
    TLE: "时长", // 音频时长
    TLA: "语言", // 音频语言
    TPB: "发行商", // 发行商/出版商
  },

  // ID3v2.3 版本 (4字符帧ID)
  2.3: {
    TIT2: "标题", // 歌曲标题/内容描述
    TPE1: "艺术家", // 主唱/独奏者
    TALB: "专辑", // 专辑/电影/节目名称
    TYER: "年份", // 发行年份
    COMM: "评论", // 评论信息
    TRCK: "音轨号", // 音轨号/碟中位置
    TCON: "流派", // 内容类型(流派)
    APIC: "附加图片", // 附加图片(专辑封面等)
    TCOM: "作曲家", // 作曲家
    TCOP: "版权信息", // 版权声明
    TBPM: "播放速度", // 每分钟节拍数(BPM)
    TLEN: "时长", // 音频时长
    TLAN: "语言", // 音频语言
    TPUB: "发行商", // 发行商/出版商
    TIT3: "副标题", // 副标题/描述补充
    TPE2: "乐队", // 乐队/管弦乐队/伴奏
    TPE3: "指挥", // 指挥/表演者细化信息
    TPE4: "改编者", // 改编/混音/修改者
    TOPE: "原艺术家", // 原艺术家/表演者
    TOAL: "原专辑", // 原专辑名称
    TSRC: "ISRC码", // 国际标准录音代码
    TENC: "编码者", // 编码者信息
    TEXT: "歌词作者", // 作词人/文本作者
    TOWN: "文件所有者", // 文件所有者/被授权人
    TPOS: "音轨集位置", // 属于合集的哪一部分
    TRDA: "录制日期", // 录制日期
    TXXX: "用户自定义文本", // 用户自定义文本信息帧
    USLT: "非同步歌词", // 非同步歌词/文本转录
    SYLT: "同步歌词", // 同步歌词/文本
    UFID: "唯一文件标识", // 唯一文件标识符
    RBUF: "推荐缓冲区大小", // 推荐缓冲区大小
    RVAD: "相对音量调整", // 相对音量调整
    RVRB: "混响", // 混响效果
    ETCO: "事件定时码", // 事件定时码
    MLLT: "MPEG位置查找表", // MPEG位置查找表
    SYTC: "同步节奏码", // 同步节奏码
    IPLS: "参与人员列表", // 参与人员列表
    MCDI: "音乐CD标识符", // 音乐CD标识符
    GEOB: "通用封装对象", // 通用封装对象
    PCNT: "播放计数器", // 播放计数器
    POPM: "流行度计量", // 流行度计量
    AENC: "音频加密", // 音频加密
    LINK: "链接信息", // 链接信息
    POSS: "位置同步帧", // 位置同步帧
    USER: "使用条款", // 使用条款
    OWNE: "所有权帧", // 所有权帧
    ENCR: "加密方法注册", // 加密方法注册
    GRID: "组标识注册", // 组标识注册
    PRIV: "私有帧", // 私有帧
    COMR: "商业帧", // 商业帧
    EQUA: "均衡器", // 均衡器
    // URL类帧ID
    WCOM: "商业信息URL", // 商业信息URL
    WCOP: "版权信息URL", // 版权/法律信息URL
    WOAF: "官方音频文件URL", // 官方音频文件网页URL
    WOAR: "官方艺术家URL", // 官方艺术家/表演者网页URL
    WOAS: "官方音频源URL", // 官方音频源网页URL
    WORS: "官方电台URL", // 官方网络电台主页URL
    WPAY: "支付信息URL", // 支付信息URL
    WPUB: "官方发行商URL", // 发行商官方网页URL
    WXXX: "用户自定义URL", // 用户自定义URL链接帧
  },

  // ID3v2.4 版本 (4字符帧ID)
  2.4: {
    TIT2: "标题", // 歌曲标题/内容描述
    TPE1: "艺术家", // 主唱/独奏者
    TALB: "专辑", // 专辑/电影/节目名称
    TYER: "年份", // 发行年份 (注:2.4也常用TDRC表示录制时间)
    COMM: "评论", // 评论信息
    TRCK: "音轨号", // 音轨号/碟中位置
    TCON: "流派", // 内容类型(流派)
    APIC: "附加图片", // 附加图片(专辑封面等)
    TCOM: "作曲家", // 作曲家
    TCOP: "版权信息", // 版权声明
    TBPM: "播放速度", // 每分钟节拍数(BPM)
    TLEN: "时长", // 音频时长
    TLAN: "语言", // 音频语言
    TPUB: "发行商", // 发行商/出版商
    TIT3: "副标题", // 副标题/描述补充
    TPE2: "乐队", // 乐队/管弦乐队/伴奏
    TPE3: "指挥", // 指挥/表演者细化信息
    TPE4: "改编者", // 改编/混音/修改者
    TOPE: "原艺术家", // 原艺术家/表演者
    TOAL: "原专辑", // 原专辑名称
    TSRC: "ISRC码", // 国际标准录音代码
    TENC: "编码者", // 编码者信息
    TEXT: "歌词作者", // 作词人/文本作者
    TOWN: "文件所有者", // 文件所有者/被授权人
    TPOS: "音轨集位置", // 属于合集的哪一部分
    TRDA: "录制日期", // 录制日期 (2.4推荐用TDRC)
    TXXX: "用户自定义文本", // 用户自定义文本信息帧
    USLT: "非同步歌词", // 非同步歌词/文本转录
    SYLT: "同步歌词", // 同步歌词/文本
    UFID: "唯一文件标识", // 唯一文件标识符
    RBUF: "推荐缓冲区大小", // 推荐缓冲区大小
    RVAD: "相对音量调整", // 相对音量调整(2.4推荐用RVA2)
    RVRB: "混响", // 混响效果
    ETCO: "事件定时码", // 事件定时码
    MLLT: "MPEG位置查找表", // MPEG位置查找表
    SYTC: "同步节奏码", // 同步节奏码
    IPLS: "参与人员列表", // 参与人员列表(2.4推荐用TIPL)
    MCDI: "音乐CD标识符", // 音乐CD标识符
    GEOB: "通用封装对象", // 通用封装对象
    PCNT: "播放计数器", // 播放计数器
    POPM: "流行度计量", // 流行度计量
    AENC: "音频加密", // 音频加密
    LINK: "链接信息", // 链接信息
    POSS: "位置同步帧", // 位置同步帧
    USER: "使用条款", // 使用条款
    OWNE: "所有权帧", // 所有权帧
    ENCR: "加密方法注册", // 加密方法注册
    GRID: "组标识注册", // 组标识注册
    PRIV: "私有帧", // 私有帧
    COMR: "商业帧", // 商业帧
    EQUA: "均衡器", // 均衡器(2.4推荐用EQUS)
    // URL类帧ID
    WCOM: "商业信息URL", // 商业信息URL
    WCOP: "版权信息URL", // 版权/法律信息URL
    WOAF: "官方音频文件URL", // 官方音频文件网页URL
    WOAR: "官方艺术家URL", // 官方艺术家/表演者网页URL
    WOAS: "官方音频源URL", // 官方音频源网页URL
    WORS: "官方电台URL", // 官方网络电台主页URL
    WPAY: "支付信息URL", // 支付信息URL
    WPUB: "官方发行商URL", // 发行商官方网页URL
    WXXX: "用户自定义URL", // 用户自定义URL链接帧
  },
} as const;

type ALL_FRAME_IDS =
  | (typeof FRAME_ID_MAP)[2.2][keyof (typeof FRAME_ID_MAP)[2.2]]
  | (typeof FRAME_ID_MAP)[2.3][keyof (typeof FRAME_ID_MAP)[2.3]]
  | (typeof FRAME_ID_MAP)[2.4][keyof (typeof FRAME_ID_MAP)[2.4]];

/** ID3v2 标签信息 */
type ID3v2Tag = {
  [key in ALL_FRAME_IDS]?: string | null;
} & {
  /** "2.2" | "2.3" | "2.4" */
  版本: string;
  /** 标签大小 (字节) */
  标签大小: number;
  /** 图片二进制 */
  audioCover?: { mime: string; data: ArrayBuffer } | null;
  [key: string]: any;
};

// ======================== ID3v2 基类 ========================
abstract class ID3v2ParserBase {
  protected buffer: ArrayBuffer;
  protected offset: number = 0;
  protected offsetBase: number = 0;

  protected version: string = "";
  protected frameIdMap: Record<string, string> = {};

  constructor(buffer: ArrayBuffer, offset = 0) {
    this.buffer = buffer;
    this.offsetBase = offset;
  }

  /**
   * 解析 ID3v2 标签主方法（抽象方法，由子类实现）
   */
  public abstract parse(): ID3v2Tag | null;

  /**
   * 初始化版本和帧ID映射
   */
  protected initVersion(versionByte: number): boolean {
    this.version = `2.${versionByte}`;
    this.frameIdMap =
      FRAME_ID_MAP[this.version as unknown as keyof typeof FRAME_ID_MAP];
    return !!this.frameIdMap;
  }

  /**
   * 计算同步安全整数（ID3v2 特有的整数编码方式）
   */
  protected syncSafeInteger(bytes: number[]): number {
    return (bytes[0] << 21) | (bytes[1] << 14) | (bytes[2] << 7) | bytes[3];
  }

  /**
   * 清理字符串（去除空字符、BOM 等）
   */
  protected cleanString(str: string): string {
    return str.replace(/\0/g, "").trim();
  }

  /**
   * 解析 ID3v2 帧的字符串（兼容 ISO-8859-1/UTF-16/UTF-8）
   * @param offset 帧数据起始偏移
   * @param length 帧数据长度
   * @returns 解码后的纯字符串
   */
  protected readID3String(offset: number, length: number): string {
    if (length <= 0) return "";

    const uint8 = new Uint8Array(this.buffer, offset, length);
    let str = "";

    // ID3v2 字符串编码前缀规则
    switch (uint8[0]) {
      // 0x01: UTF-16 (带 BOM)
      case 0x01:
        if (length >= 2) {
          try {
            const decoder = new TextDecoder("utf-16", { ignoreBOM: true });
            str = decoder.decode(uint8.subarray(1));
          } catch (e) {
            str = this.readIso88591String(offset + 1, length - 1);
          }
        }
        break;

      // 0x02: UTF-16BE (无 BOM)
      case 0x02:
        if (length >= 2) {
          try {
            const decoder = new TextDecoder("utf-16be");
            str = decoder.decode(uint8.subarray(1));
          } catch (e) {
            str = this.readIso88591String(offset + 1, length - 1);
          }
        }
        break;

      // 0x03: UTF-8 (ID3v2.4 新增)
      case 0x03:
        if (length >= 2) {
          try {
            const decoder = new TextDecoder("utf-8");
            str = decoder.decode(uint8.subarray(1));
          } catch (e) {
            str = this.readIso88591String(offset + 1, length - 1);
          }
        }
        break;

      // 0x00: ISO-8859-1 (Latin-1)，或无前缀（兼容老版本）
      case 0x00:
        str = this.readIso88591String(offset + 1, length - 1);
        break;

      // 无前缀场景：优先尝试 UTF-8，失败则回退到 ISO-8859-1
      default:
        try {
          const decoder = new TextDecoder("utf-8", { fatal: true });
          str = decoder.decode(uint8);
        } catch (e) {
          str = this.readIso88591String(offset, length);
        }
        break;
    }

    // 清理所有控制字符和首尾空白
    return this.cleanString(str);
  }

  /**
   * 解析 ISO-8859-1 (Latin-1) 字符串（ID3v2 基础编码）
   */
  protected readIso88591String(offset: number, length: number): string {
    const uint8 = new Uint8Array(this.buffer, offset, length);
    return Array.from(uint8)
      .map((byte) => String.fromCharCode(byte))
      .join("");
  }

  /**
   * 从 ArrayBuffer 中读取指定范围的 ASCII 字符串
   */
  protected readAsciiString(offset: number, length: number): string {
    const uint8 = new Uint8Array(this.buffer, offset, length);
    return Array.from(uint8)
      .map((byte) => (byte === 0 ? "" : String.fromCharCode(byte)))
      .join("");
  }

  /**
   * 读取无符号大端序 3 字节整数（ID3v2.2 专用）
   */
  protected readUInt24BE(offset: number): number {
    const uint8 = new Uint8Array(this.buffer);
    return (uint8[offset] << 16) | (uint8[offset + 1] << 8) | uint8[offset + 2];
  }

  /**
   * 读取无符号大端序 4 字节整数
   */
  protected readUInt32BE(offset: number): number {
    const dataView = new DataView(this.buffer);
    return dataView.getUint32(offset, false); // false = 大端序
  }

  /**
   * 解析 ID3v2 APIC/PIC 帧（提取图片二进制）
   * @param offset 帧数据起始偏移
   * @param length 帧数据长度
   * @returns { mime: 图片MIME类型, data: 图片二进制ArrayBuffer } | null
   */
  protected parseAPICFrame(
    offset: number,
    length: number
  ): { mime: string; data: ArrayBuffer } | null {
    if (length <= 0) return null;
    const uint8 = new Uint8Array(this.buffer, offset, length);
    let ptr = 0;

    // 区分 ID3v2.2 (PIC) 和 v2.3+/4 (APIC)：v2.2 无编码前缀
    if (this.version !== "2.2") {
      // ID3v2.3+/4 APIC 帧有 1 字节编码前缀，跳过
      ptr += 1;
      if (ptr >= length) return null;
    }

    // 读取 MIME 类型（\0 结尾的 ASCII 字符串）
    const mimeEnd = uint8.subarray(ptr).findIndex((byte) => byte === 0);
    if (mimeEnd === -1) return null;
    let mime = this.readAsciiString(offset + ptr, mimeEnd);
    ptr += mimeEnd + 1;
    if (ptr >= length) return null;

    // 兼容 ID3v2.2 PIC 帧的 MIME 简写（如 JPG → image/jpeg）
    if (mime === "JPG" || mime === "JPEG") mime = "image/jpeg";
    else if (mime === "PNG") mime = "image/png";
    else if (mime === "GIF") mime = "image/gif";

    // 跳过图片类型（1 字节）
    ptr += 1;
    if (ptr >= length) return null;

    // 读取描述字段（\0 结尾，编码同帧前缀）
    const descEnd = uint8.subarray(ptr).findIndex((byte) => byte === 0);
    if (descEnd === -1) return null;
    ptr += descEnd + 1;
    if (ptr >= length) return null;

    // 提取图片二进制（剩余字节）
    return {
      mime,
      data: this.buffer.slice(offset + ptr, offset + length),
    };
  }

  /**
   * 通用帧解析逻辑
   */
  protected parseFrame(
    tag: ID3v2Tag,
    frameId: string,
    frameOffset: number,
    frameSize: number
  ): void {
    // 解析帧数据
    const frameValue = this.readID3String(frameOffset, frameSize);

    const key = this.frameIdMap[frameId] || frameId;
    let value: any = frameValue;

    if (frameId == "TRCK") {
      value = parseInt(frameValue) || 0;
    } else if (frameId == "APIC") {
      value = this.parseAPICFrame(frameOffset, frameSize);
      tag.audioCover = value;
    }

    tag[key] = value;
  }

  /**
   * 验证 ID3 标识
   */
  protected validateTagId(): boolean {
    const tagId = this.readAsciiString(this.offset, 3);
    return tagId === "ID3";
  }

  /**
   * 获取 ID3v2 版本号（先验版本，用于选择解析器）
   */
  protected getVersion(): string | null {
    this.offset = this.offsetBase;
    // 验证基础长度和标识
    if (this.buffer.byteLength < this.offset + 10 || !this.validateTagId()) {
      return null;
    }
    const uint8 = new Uint8Array(this.buffer);
    const versionByte = uint8[this.offset + 3];
    const version = `2.${versionByte}`;
    // 验证版本是否支持
    return FRAME_ID_MAP[version as unknown as keyof typeof FRAME_ID_MAP]
      ? version
      : null;
  }

  /**
   * 通用解析入口（子类调用）
   */
  protected commonParse(
    frameIdLength: number,
    frameHeaderLength: number,
    readFrameSize: (offset: number) => number
  ): ID3v2Tag | null {
    this.offset = this.offsetBase;

    try {
      // 验证基础长度和标识
      if (this.buffer.byteLength < this.offset + 10 || !this.validateTagId()) {
        return null;
      }

      const uint8 = new Uint8Array(this.buffer);
      const versionByte = uint8[this.offset + 3];

      // 初始化版本和帧ID映射
      if (!this.initVersion(versionByte)) return null;

      // 计算标签大小
      const tagSize = this.calculateTagSize(uint8);
      const tag: ID3v2Tag = { 版本: this.version, 标签大小: tagSize + 10 };

      // 帧解析循环
      let frameOffset = this.offset + 10;
      const tagEndOffset = this.offset + 10 + tagSize;

      while (
        frameOffset + frameHeaderLength <= tagEndOffset &&
        frameOffset + frameHeaderLength <= this.buffer.byteLength
      ) {
        // 读取帧ID
        const frameId = this.readAsciiString(frameOffset, frameIdLength);

        if (!frameId || frameId.replace(/\0/g, "") === "") break;

        // 读取帧大小
        const frameSize = readFrameSize(frameOffset + frameIdLength);
        if (
          frameSize <= 0 ||
          frameOffset + frameHeaderLength + frameSize > this.buffer.byteLength
        ) {
          frameOffset += frameHeaderLength + frameSize;
          continue;
        }

        // 解析帧
        this.parseFrame(
          tag,
          frameId,
          frameOffset + frameHeaderLength,
          frameSize
        );

        // 移动到下一帧
        frameOffset += frameHeaderLength + frameSize;
      }

      return tag;
    } catch (e) {
      console.error(`ID3v${this.version} 解析失败:`, e);
      return null;
    }
  }

  /**
   * 计算标签大小（不同版本通用）
   */
  protected calculateTagSize(uint8: Uint8Array): number {
    if (this.version === "2.2") {
      return this.readUInt24BE(this.offset + 6);
    } else {
      const sizeBytes = [
        uint8[this.offset + 6],
        uint8[this.offset + 7],
        uint8[this.offset + 8],
        uint8[this.offset + 9],
      ];
      return this.syncSafeInteger(sizeBytes);
    }
  }
}

class ID3v2Parser extends ID3v2ParserBase {
  private ID3v22Parser(): ID3v2Tag | null {
    return this.commonParse(
      3, // 帧ID长度
      6, // 帧头长度（3ID + 3Size）
      (offset) => this.readUInt24BE(offset) // 读取帧大小
    );
  }
  private ID3v23Parser(): ID3v2Tag | null {
    return this.commonParse(
      4, // 帧ID长度
      10, // 帧头长度（4ID + 4Size + 2Flags）
      (offset) => this.readUInt32BE(offset) // 读取帧大小
    );
  }
  private ID3v24Parser(): ID3v2Tag | null {
    return this.commonParse(
      4, // 帧ID长度
      10, // 帧头长度（4ID + 4Size + 2Flags）
      (offset) => this.readUInt32BE(offset)
    );
  }

  public parse(): ID3v2Tag | null {
    // 第一步：先获取实际的 ID3v2 版本号
    const version = this.getVersion();

    if (!version) return null;

    // 第二步：根据版本号调用对应解析器（精准匹配）
    switch (version) {
      case "2.4":
        return this.ID3v24Parser();
      case "2.3":
        return this.ID3v23Parser();
      case "2.2":
        return this.ID3v22Parser();
      default:
        return null;
    }
  }
}

/**
 * ID3v2 解析入口函数（适配 ArrayBuffer）
 * @param buffer ArrayBuffer 类型的音频文件二进制数据
 * @returns ID3v2Tag | null
 */
export default function (buffer: ArrayBuffer) {
  const parsers = new ID3v2Parser(buffer);
  return parsers.parse();
}
