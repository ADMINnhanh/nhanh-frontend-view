import ID3v1Parser, { type ID3v1Tag } from "./ID3v1Parser";
import ID3v2Parser, { type ID3v2Tag } from "./ID3v2Parser";

/** MP3 文件解析结果 */
interface MP3ParseResult {
  id3v2: ID3v2Tag;
  id3v1: ID3v1Tag | null;
  audioOffset: number; // 音频数据起始位置
  audioSize: number; // 音频数据大小
}

export default function MP3FileParser(
  buffer: ArrayBuffer
): MP3ParseResult | null {
  const fileSize = buffer.byteLength;

  // 解析 ID3v2 标签
  const id3v2Tag = ID3v2Parser(buffer);

  if (!id3v2Tag) return null;

  // 解析 ID3v1 标签
  const id3v1Tag = ID3v1Parser(buffer);

  // 计算音频数据大小
  const id3v1Size = id3v1Tag ? 128 : 0;
  const audioSize = fileSize - id3v2Tag.tagSize - id3v1Size;

  return {
    id3v2: id3v2Tag,
    id3v1: id3v1Tag,
    audioOffset: id3v2Tag.tagSize,
    audioSize: audioSize,
  };
}
