/**
 * ID3v1 解析结果类型
 */
type ID3v1Tag = {
  title: string; // 歌曲名
  artist: string; // 艺术家
  album: string; // 专辑
  year: string; // 年份
  comment: string; // 评论
  track: number; // 音轨号（v1.1 有效，v1.0 为 0）
  genre: string; // 流派
  isID3v1_1: boolean; // 是否为 v1.1（仅用于标识，非标准字段）
};

/** 流派表（简化版，可扩展） */
const GENRE_TABLE = [
  "Blues",
  "Classic Rock",
  "Country",
  "Dance",
  "Disco",
  "Funk",
  "Grunge",
  "Hip-Hop",
  "Jazz",
  "Metal",
  "New Age",
  "Oldies",
  "Other",
  "Pop",
  "R&B",
  "Rap",
  "Reggae",
  "Rock",
  "Techno",
  "Industrial",
  "Alternative",
  "Ska",
  "Death Metal",
  "Pranks",
  "Soundtrack",
  "Euro-Techno",
  "Ambient",
  "Trip-Hop",
  "Vocal",
  "Jazz+Funk",
  "Fusion",
];

/**
 * 提取字符串（过滤 NULL/空格填充符）
 * @param buffer 数据源
 * @param start 起始偏移
 * @param end 结束偏移（不包含）
 */
function extractString(buffer: Uint8Array, start: number, end: number): string {
  // 截取指定范围的字节
  const bytes = buffer.subarray(start, end);
  // 找到第一个 NULL 字符的位置
  const nullIndex = bytes.findIndex((b) => b === 0x00);
  const validBytes = nullIndex === -1 ? bytes : bytes.subarray(0, nullIndex);
  // 过滤空格，转为字符串
  const str = new TextDecoder("ascii").decode(validBytes).trim();
  return str === "" ? "-" : str;
}

/**
 * 解析流派
 */
function getGenre(genreCode: number): string {
  return genreCode < GENRE_TABLE.length ? GENRE_TABLE[genreCode] : "Unknown";
}

/**
 * 严格按 ID3v1 规范解析标签（解决评论末尾为 0x00 的误判问题）
 * @param arrayBuffer 音频文件的 ArrayBuffer 数据
 * @returns ID3v1 信息 | null（无标签/解析失败）
 */
export default function ID3v1Parser(arrayBuffer: ArrayBuffer): ID3v1Tag | null {
  const buffer = new Uint8Array(arrayBuffer);

  // 1. 检查文件大小是否足够（至少128字节）
  if (buffer.length < 128) return null;

  // 2. 取最后128字节（ID3v1 固定在文件末尾）
  const tagBuffer = buffer.subarray(buffer.length - 128);

  // 3. 检查 TAG 标识符（0-2字节必须是 T/A/G）
  if (tagBuffer[0] !== 0x54 || tagBuffer[1] !== 0x41 || tagBuffer[2] !== 0x47) {
    return null;
  }

  // 4. 核心：判断是否为 ID3v1.1（解决评论末尾是 0x00 的误判）
  const offset125 = tagBuffer[125];
  const offset126 = tagBuffer[126];
  let isID3v1_1 = offset125 === 0x00;

  // 兜底判断1：如果 126 字节不是有效音轨号，按 v1.0 解析
  if (isID3v1_1) {
    // 有效音轨号范围：1~99（行业通用判定）
    if (offset126 < 1 || offset126 > 99) {
      isID3v1_1 = false;
    }
  }

  // 兜底判断2：如果 97~124 字节全是空，126 字节有内容，按 v1.0 解析
  if (isID3v1_1) {
    const commentBytes = tagBuffer.subarray(97, 125);
    const isCommentEmpty = Array.from(commentBytes).every(
      (b) => b === 0x00 || b === 0x20
    );
    if (isCommentEmpty && offset126 !== 0x00 && offset126 !== 0x20) {
      isID3v1_1 = false;
    }
  }

  // 5. 解析评论和音轨号
  let comment: string;
  let track: number;
  if (isID3v1_1) {
    // ID3v1.1：评论 97~124，126 是音轨号
    comment = extractString(tagBuffer, 97, 125);
    track = offset126;
  } else {
    // ID3v1.0：评论 97~126，无音轨号
    comment = extractString(tagBuffer, 97, 127);
    track = 0;
  }

  // 6. 解析其他字段并返回结果
  return {
    title: extractString(tagBuffer, 3, 33), // 3~32 标题
    artist: extractString(tagBuffer, 33, 63), // 33~62 艺术家
    album: extractString(tagBuffer, 63, 93), // 63~92 专辑
    year: extractString(tagBuffer, 93, 97), // 93~96 年份
    comment: comment,
    track: track,
    genre: getGenre(tagBuffer[127]), // 127 流派
    isID3v1_1: isID3v1_1, // 仅用于标识，非标准字段
  };
}
