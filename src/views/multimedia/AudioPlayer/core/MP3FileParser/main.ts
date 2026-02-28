import decodeAudioToPcmS16le from "../ffmpeg";
import ID3v1Parser from "./ID3v1Parser";
import ID3v2Parser from "./ID3v2Parser";
import MpegAudioParser, {
  type MpegAudioBasicInfo,
} from "./MpegFrameHeaderParser";

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

  const mpegAudio = new MpegAudioParser(
    buffer,
    id3v2Tag?.["标签大小"] || 0,
    !!id3v1Tag
  ).parseComplete();

  const defaultAudioBasicInfo: MpegAudioBasicInfo = {
    bitDepth: 16,
    bitrate: 340,
    channelCount: 2,
    sampleRate: 44100,
    totalDuration: 0,
  };
  const audioBasicInfo = mpegAudio.frameHeader.isValid
    ? mpegAudio.audioBasicInfo
    : defaultAudioBasicInfo;

  const pcm = await decodeAudioToPcmS16le(file, audioBasicInfo);
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
