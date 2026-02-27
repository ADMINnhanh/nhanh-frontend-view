import ID3v1Parser from "./ID3v1Parser";
import ID3v2Parser from "./ID3v2Parser";
import MpegAudioParser, {
  type MpegAudioBasicInfo,
} from "./MpegFrameHeaderParser";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

const ffmpeg = new FFmpeg();
ffmpeg.load();

/**
 * 将 MPEG 音频文件解码为 16 位小端（s16le）原始 PCM 数据
 * @param file 待转换的 MPEG 音频文件（如 MP3）
 * @param audioBasicInfo 音频基础信息（声道数、采样率）
 * @returns 原始 PCM 数据的 ArrayBuffer，转换失败返回 null
 */
async function decodeMpegToPcmS16le(
  file: File,
  audioBasicInfo: MpegAudioBasicInfo
): Promise<ArrayBuffer | null> {
  // 定义虚拟文件系统中的文件名，语义更清晰
  const inputVirtualFileName = file.name;
  const outputPcmVirtualFileName = "output_s16le.pcm";

  try {
    // 1. 将本地文件写入 FFmpeg 虚拟文件系统
    await ffmpeg.writeFile(inputVirtualFileName, await fetchFile(file));

    // 2. 执行 FFmpeg 命令：解码为 16 位小端 PCM 原始数据
    await ffmpeg.exec([
      "-i",
      inputVirtualFileName, // 输入文件
      "-f",
      "s16le", // 输出格式：16位小端原始 PCM
      "-acodec",
      "pcm_s16le", // 音频编码器：PCM s16le
      "-ac",
      audioBasicInfo.channelCount.toString(), // 声道数
      "-ar",
      audioBasicInfo.sampleRate.toString(), // 采样率
      outputPcmVirtualFileName, // 输出文件
    ]);

    // 3. 读取解码后的 PCM 文件数据
    const pcmFileData = await ffmpeg.readFile(outputPcmVirtualFileName);

    // 4. 校验数据类型，确保返回 ArrayBuffer
    if (typeof pcmFileData === "string") {
      console.warn("PCM 文件读取结果为字符串，转换失败");
      return null;
    }

    return pcmFileData.buffer;
  } catch (error) {
    // 新增异常捕获，避免转换失败时整个程序崩溃
    console.error("MPEG 转 PCM 失败：", error);
    return null;
  } finally {
    // 5. 无论成功失败，都清理虚拟文件（避免内存泄漏）
    try {
      await ffmpeg.deleteFile(inputVirtualFileName);
      await ffmpeg.deleteFile(outputPcmVirtualFileName);
    } catch (cleanupError) {
      console.warn("清理虚拟文件失败：", cleanupError);
    }
  }
}
export default async function MP3FileParser(file: File) {
  const buffer = await file.arrayBuffer();
  const fileSize = buffer.byteLength;

  // 解析 ID3v2 标签
  const id3v2Tag = ID3v2Parser(buffer);

  // 解析 ID3v1 标签
  const id3v1Tag = ID3v1Parser(buffer);

  // 计算音频数据大小
  const id3v1Size = id3v1Tag ? 128 : 0;
  const audioSize = id3v2Tag && fileSize - id3v2Tag["标签大小"] - id3v1Size;

  const mpegAudio =
    id3v2Tag &&
    new MpegAudioParser(
      buffer,
      id3v2Tag["标签大小"],
      !!id3v1Tag
    ).parseComplete();

  const defaultAudioBasicInfo = {
    bitDepth: 16,
    bitrate: 340,
    channelCount: 2,
    sampleRate: 44100,
    totalDuration: 0,
  };
  const audioBasicInfo = mpegAudio?.audioBasicInfo || defaultAudioBasicInfo;
  const pcm = await decodeMpegToPcmS16le(file, audioBasicInfo);
  if (!pcm) return null;

  return {
    id3v2: id3v2Tag,
    id3v1: id3v1Tag,
    audioSize,
    fileSize,
    mpegAudio,
    pcm,
    audioBasicInfo,
  };
}
