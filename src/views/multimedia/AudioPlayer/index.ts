import type { UploadFileInfo } from "naive-ui";
import {
  _Format_FileSize,
  _Format_MillisecondToReadable,
} from "nhanh-pure-function";

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

export type AudioFileList = (UploadFileInfo & { options: Partial<PCMPlayOptions> })[];

export type TargetFileConfig = Partial<PCMPlayOptions> & {
  name: string;
  type: string;
  size: string;
  totalDuration: string;
  /** 当前播放时间（秒，保留2位小数） */
  currentTime: string;
};

/** “补0到2位” */
const padZeroToTwoDigits = (numberToFormat: string | number) =>
  numberToFormat.toString().padStart(2, "0");
/** 格式化时间 */
export function FormatTime(seconds: number): string {
  const minutes = padZeroToTwoDigits(Math.floor(seconds / 60));
  return `${minutes}:${padZeroToTwoDigits((seconds % 60).toFixed(0))}`;
}
export function getTargetFileConfig(
  file: AudioFileList[number],
  totalDuration: number
): TargetFileConfig {
  const { options, name } = file;
  const lastIndex = name.lastIndexOf(".");
  const type = lastIndex > 0 ? name.substring(lastIndex + 1) : "异常！";

  const currentTime = FormatTime(options.startTime || 0);
  return {
    ...options,
    name,
    currentTime,
    totalDuration: FormatTime(totalDuration),
    size: _Format_FileSize(file.file!.size),
    type: type.toLocaleUpperCase(),
  };
}
