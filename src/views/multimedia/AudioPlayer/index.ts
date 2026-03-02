import {
  _Format_FileSize,
  _Format_MillisecondToReadable,
} from "nhanh-pure-function";
import type MP3FileParser from "./core/MP3FileParser/main";
import type WAVFileParser from "./core/WAVFileParser/main";

/** 字节序枚举 */
export enum Endianness {
  /** 小端序（Little Endian）- 低字节在前，主流设备/音频格式默认 */
  LE = "le",
  /** 大端序（Big Endian）- 高字节在前，部分专业音频设备使用 */
  BE = "be",
  /** 小端序别名（兼容常见命名） */
  LittleEndian = "le",
  /** 大端序别名（兼容常见命名） */
  BigEndian = "be",
}

export type AudioOptions = {
  fileName: string;
  fileSize: number;
  audioBasicInfo: Partial<PCMPlayOptions>;
  pcm: ArrayBuffer;
  mp3?: Exclude<Awaited<ReturnType<typeof MP3FileParser>>, null>;
  wav?: Exclude<Awaited<ReturnType<typeof WAVFileParser>>, null>;
};

export type TargetFileConfig = Partial<PCMPlayOptions> & {
  name: string;
  type: string;
  size: string;
  totalDuration: string;
  /** 当前播放时间（秒，保留2位小数） */
  currentTime: string;
};

/** 格式化时间 */
export function FormatTime(seconds: number): string {
  const padZero = (number: number) => number.toString().padStart(2, "0");
  const minutes = padZero(Math.floor(seconds / 60));
  return `${minutes}:${padZero(Math.floor(seconds % 60))}`;
}
export function getTargetFileConfig(
  options: AudioOptions,
  totalDuration: number
): TargetFileConfig {
  const { audioBasicInfo, fileSize, fileName } = options;
  const lastIndex = fileName.lastIndexOf(".");
  const type = lastIndex > 0 ? fileName.substring(lastIndex + 1) : "异常！";

  const currentTime = FormatTime(audioBasicInfo.startTime || 0);
  return {
    ...audioBasicInfo,
    name: fileName,
    currentTime,
    totalDuration: FormatTime(totalDuration),
    size: _Format_FileSize(fileSize),
    type: type.toLocaleUpperCase(),
  };
}
