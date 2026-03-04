import { readChunkId } from "./main";

// sGroupID	4	char[4]	“fmt”	表示格式块定义如下。请注意末尾的单个空格，以凑足此处所需的 4 个字节。
// dwChunkSize	32	无符号整数	变化	此数据块剩余部分的长度（以字节为单位）（不包括 sGroupID 或 dwChunkSize）。
// wFormatTag	16	ushort	1	对于 WAV 文件，此值始终为 1，表示PCM格式。
// wChannels	16	ushort	变化	表示音频中的声道数。1 表示单声道，2 表示立体声，以此类推。
// dwSamplesPerSec	32	无符号整数	变化	音频采样率（例如 44100、8000、96000，具体取决于您的需求）。
// dwAvgBytesPerSec	32	无符号整数	采样率 * 块对齐	每秒多声道音频帧数。用于估算播放文件所需的内存量。
// wBlockAlign	16	ushort	w通道数 * (dwBitsPerSample / 8)	多声道音频帧中的字节数。
// dwBitsPerSample dwBits	32	无符号整数	变化	音频的位深度（每个样本的位数）。通常为 8、16 或 32 位。
// cbSize	2	扩展码大小（0 或 22）
// wValidBitsPerSample	2	有效位数
// dwChannelMask	4	扬声器位置掩码
// SubFormat	16	GUID，包括数据格式代码

/** WAV 音频格式映射表  */
const WAVE_FORMAT_LIST = [
  {
    /** 最常用的无损音频格式 */
    tagHex: 0x0001,
    name: "WAVE_FORMAT_PCM",
    description: "脉冲编码调制",
  },
  {
    /** 有损压缩 */
    tagHex: 0x0002,
    name: "WAVE_FORMAT_ADPCM",
    description: "自适应差分脉冲编码调制",
  },
  {
    /** 32/64位浮点格式 */
    tagHex: 0x0003,
    name: "WAVE_FORMAT_IEEE_FLOAT",
    description: "IEEE 浮点型音频",
  },
  {
    /** 欧洲/电信领域常用 */
    tagHex: 0x0006,
    name: "WAVE_FORMAT_ALAW",
    description: "A-law 压缩",
  },
  {
    /** 北美/电信领域常用 */
    tagHex: 0x0007,
    name: "WAVE_FORMAT_MULAW",
    description: "μ-law 压缩",
  },
  {
    /** 容器格式，需读取 SubFormat 确定实际格式 */
    tagHex: 0xfffe,
    name: "WAVE_FORMAT_EXTENSIBLE",
    description: "扩展格式",
  },
  {
    tagHex: 0x0011,
    name: "WAVE_FORMAT_OKI_ADPCM",
    description: "OKI 公司 ADPCM 格式",
  },
  {
    tagHex: 0x0016,
    name: "WAVE_FORMAT_DIGISTD",
    description: "Dialogic 公司 STD 格式",
  },
  {
    tagHex: 0x0017,
    name: "WAVE_FORMAT_DIGIFIX",
    description: "Dialogic 公司 FIX 格式",
  },
  {
    tagHex: 0x0020,
    name: "WAVE_FORMAT_DVI_ADPCM",
    description: "DVI 公司 ADPCM 格式",
  },
];

/**
 * 读取 WAV 文件 fmt 扩展子块的 SubFormat 16字节，格式化为 "xx xx xx xx - xx xx ..." 样式
 * @param {DataView} dataView - 包含 WAV 数据的 DataView 对象
 * @param {number} subFormatOffset - SubFormat 字段的起始偏移（通常是 44 字节位置）
 * @returns {string} 带空格/短横线分隔的16进制字符串（如 "01 00 00 00 - 00 00 - 10 00 - 80 00 - 00 AA 00 38 9B 71"）
 */
function readSubFormatAsBytesString(dataView: DataView, subFormatOffset = 44) {
  try {
    // 1. 逐字节读取 SubFormat 的 16 个字节
    const subFormatBytes = [];
    for (let i = 0; i < 16; i++) {
      // 读取单个字节，转16进制并补前导零，大写
      const byteHex = dataView
        .getUint8(subFormatOffset + i)
        .toString(16)
        .padStart(2, "0")
        .toUpperCase();
      subFormatBytes.push(byteHex);
    }

    // 2. 按 Data1/Data2/Data3/Data4 分段，用 " - " 分隔，段内用空格分隔
    const part1 = subFormatBytes.slice(0, 4).join(" "); // Data1: 前4字节
    const part2 = subFormatBytes.slice(4, 6).join(" "); // Data2: 第5-6字节
    const part3 = subFormatBytes.slice(6, 8).join(" "); // Data3: 第7-8字节
    const part4_1 = subFormatBytes.slice(8, 10).join(" "); // Data4前2字节: 第9-10字节
    const part4_2 = subFormatBytes.slice(10, 16).join(" "); // Data4后6字节: 第11-16字节

    // 3. 拼接成最终格式（xx xx xx xx - xx xx - xx xx - xx xx - xx xx xx xx xx xx）
    const result = `${part1} - ${part2} - ${part3} - ${part4_1} - ${part4_2}`;
    return result;
  } catch (error) {
    console.error("读取 SubFormat 字节失败:", error);
    return "";
  }
}

export default function fmtParser(dataView: DataView) {
  const fmt = readChunkId(dataView, 12, 4);
  if (fmt != "fmt ") return false;
  const dwChunkSize = dataView.getUint32(16, true);
  const wFormatTag = dataView.getUint16(20, true);
  const wChannels = dataView.getUint16(22, true);
  const dwSamplesPerSec = dataView.getUint32(24, true);
  const dwAvgBytesPerSec = dataView.getUint32(28, true);
  const wBlockAlign = dataView.getUint16(32, true);
  const dwBitsPerSample = dataView.getUint16(34, true);

  let cbSize: number | undefined,
    wValidBitsPerSample: number | undefined,
    dwChannelMask: number | undefined,
    SubFormat: string | undefined,
    waveFormat: (typeof WAVE_FORMAT_LIST)[number] | undefined;

  if (dwChunkSize == 18) cbSize = dataView.getUint16(36, true);
  if (dwChunkSize == 40) {
    cbSize = dataView.getUint16(36, true);
    wValidBitsPerSample = dataView.getUint16(38, true);
    dwChannelMask = dataView.getUint32(40, true);

    /** 数据格式代码 */ {
      SubFormat = readSubFormatAsBytesString(dataView);
      const tag = dataView.getUint32(44, true);
      waveFormat = WAVE_FORMAT_LIST.find((v) => v.tagHex == tag);
    }
  }

  return {
    /** fmt 标识 */
    fmt,
    /** 数据块剩余部分长度 */
    dwChunkSize,
    /**
     * wFormatTag 字段（WAV文件fmt块核心标识）
     * 字段位置：fmt块中偏移8-9字节（2字节，小端序）
     * 取值说明：
     *  1 = PCM (Integer) - 整数PCM格式（最常见，8/16/24/32位整数）
     *  3 = IEEE Float - 浮点PCM格式（专业音频，32/64位浮点）
     *  6 = ALAW - A律压缩（电话音频，整数）
     *  7 = MULAW - μ律压缩（电话音频，整数）
     *  0xFFFE = Extensible - 扩展格式（需解析扩展字段判断整数/浮点）
     * 注意：仅整数PCM的wFormatTag=1，并非所有WAV都为1
     */
    wFormatTag,
    /** 音频中的声道数 */
    wChannels,
    /** 音频采样率 */
    dwSamplesPerSec,
    /** 每秒多声道音频帧数 */
    dwAvgBytesPerSec,
    /** 多声道音频帧中的字节数 */
    wBlockAlign,
    /** 音频的位深度 */
    dwBitsPerSample,
    /** 扩展码大小（0 或 22） */
    cbSize,
    /** 有效位数 */
    wValidBitsPerSample,
    /** 扬声器位置掩码 */
    dwChannelMask,
    /** 数据格式代码 */
    SubFormat,
    /** 数据格式 */
    waveFormat,
  };
}
