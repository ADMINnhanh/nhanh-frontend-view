import { readChunkId } from "./main";

// sGroupID	4	char[4]	“fmt”	表示格式块定义如下。请注意末尾的单个空格，以凑足此处所需的 4 个字节。
// dwChunkSize	32	无符号整数	变化	此数据块剩余部分的长度（以字节为单位）（不包括 sGroupID 或 dwChunkSize）。
// wFormatTag	16	ushort	1	对于 WAV 文件，此值始终为 1，表示PCM格式。
// wChannels	16	ushort	变化	表示音频中的声道数。1 表示单声道，2 表示立体声，以此类推。
// dwSamplesPerSec	32	无符号整数	变化	音频采样率（例如 44100、8000、96000，具体取决于您的需求）。
// dwAvgBytesPerSec	32	无符号整数	采样率 * 块对齐	每秒多声道音频帧数。用于估算播放文件所需的内存量。
// wBlockAlign	16	ushort	w通道数 * (dwBitsPerSample / 8)	多声道音频帧中的字节数。
// dwBitsPerSample dwBits	32	无符号整数	变化	音频的位深度（每个样本的位数）。通常为 8、16 或 32 位。

export default function fmtParser(buffer: ArrayBuffer) {
  const dataView = new DataView(buffer);
  const fmt = readChunkId(dataView, 12, 4);
  if (fmt != "fmt ") return false;
  const dwChunkSize = dataView.getUint32(16, true);
  const wFormatTag = dataView.getUint16(20, true);
  const wChannels = dataView.getUint16(22, true);
  const dwSamplesPerSec = dataView.getUint32(24, true);
  const dwAvgBytesPerSec = dataView.getUint32(28, true);
  const wBlockAlign = dataView.getUint16(32, true);
  const dwBitsPerSample = dataView.getUint16(34, true);

  return {
    /** fmt 标识 */
    fmt,
    /** 数据块剩余部分长度 */
    dwChunkSize,
    /** 对于 WAV 文件，此值始终为 1，表示PCM格式 */
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
  };
}
