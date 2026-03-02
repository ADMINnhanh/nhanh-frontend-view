import decodeAudioToPcm from "../ffmpeg";
import fmtParser from "./fmtParser";
import OtherChunkParser from "./OtherChunkParser";
import RIFFParser from "./RIFFParser";

/**
 * 从 DataView 指定偏移量读取指定长度的字节，转换为 ASCII 字符串（适配 WAV chunk 标识解析）
 * @param dataView - 数据源 DataView
 * @param offset - 读取起始偏移量（字节）
 * @param length - 要读取的字节长度
 * @returns 转换后的 ASCII 字符串
 */
export function readChunkId(
  dataView: DataView,
  offset: number,
  length: number
): string {
  let str = "";
  for (let i = 0; i < length; i++) {
    str += String.fromCharCode(dataView.getUint8(offset + i));
  }
  return str;
}

export default async function WAVFileParser(file: File) {
  const buffer = await file.arrayBuffer();
  const fileSize = buffer.byteLength;

  const dataView = new DataView(buffer);

  const RIFF = RIFFParser(dataView);
  if (!RIFF) return null;
  const fmt = fmtParser(dataView);
  if (!fmt) return null;

  const otherChunk = OtherChunkParser(dataView);

  const pcm = await decodeAudioToPcm(file, {
    sampleRate: fmt.dwSamplesPerSec as any,
    channelCount: fmt.wChannels,
    bitDepth: fmt.dwBitsPerSample as any,
    endianness: "le",
  });

  if (!pcm) return null;

  return {
    fileSize,
    pcm,
    fmt,
    otherChunk,
  };
}
