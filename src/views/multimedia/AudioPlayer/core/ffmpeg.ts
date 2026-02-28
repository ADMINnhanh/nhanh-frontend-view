import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

const ffmpeg = new FFmpeg();
ffmpeg.load();

/**
 * 将音频文件解码为原始 PCM 数据
 * @param file 待转换的 音频文件（如 MP3）
 * @param audioBasicInfo 音频基础信息（声道数、采样率）
 * @returns 原始 PCM 数据的 ArrayBuffer，转换失败返回 null
 */
export default async function decodeAudioToPcmS16le(
  file: File,
  audioBasicInfo: Partial<PCMPlayOptions>
): Promise<ArrayBuffer | null> {
  // 定义虚拟文件系统中的文件名，语义更清晰
  const inputVirtualFileName = file.name;
  const outputPcmVirtualFileName = "output_s16le.pcm";

  const {
    sampleRate = 44100,
    channelCount = 2,
    bitDepth = 16,
    endianness = "le",
  } = audioBasicInfo;
  const pcmFormat = `s${bitDepth}${endianness}`;
  const pcmCodecName = `pcm_${pcmFormat}`;

  try {
    // 1. 将本地文件写入 FFmpeg 虚拟文件系统
    await ffmpeg.writeFile(inputVirtualFileName, await fetchFile(file));

    // 2. 执行 FFmpeg 命令：解码为 16 位小端 PCM 原始数据
    await ffmpeg.exec([
      "-i",
      inputVirtualFileName, // 输入文件
      "-f",
      pcmFormat, // 输出格式：16位小端原始 PCM   ("s16le")
      "-acodec",
      pcmCodecName, // 音频编码器：PCM s16le ("pcm_s16le")
      "-ac",
      String(channelCount), // 声道数
      "-ar",
      String(sampleRate), // 采样率
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
    console.error("音频文件 转 PCM 失败：", error);
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
