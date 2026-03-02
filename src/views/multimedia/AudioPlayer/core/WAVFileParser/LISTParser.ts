import { readChunkId } from "./main";

type LIST_TYPE = "INFO" | "adtl" | "labl" | "note" | "unknown";
/** INFO 块的ID与中文名称映射表（ID3v2.3/2.4 标准） */
const INFO_ID_MAP = {
  IARL: "档案位置",
  IART: "艺术家/表演者",
  ICMS: "委托制作方",
  ICMT: "注释/备注",
  ICOP: "版权声明",
  ICRD: "创作/录制日期",
  IENG: "录音工程师",
  IGNR: "音乐流派",
  IKEY: "关键词",
  IMED: "介质类型",
  INAM: "作品名称",

  ISFT: "制作/编码软件",
  ISRC: "标准录音代码",
  IPRD: "发行商",
  IPUB: "出版方/唱片公司",
  IREC: "录制时间",
  ITIT: "副标题",
  IYER: "发行年份",
  IARR: "编曲者",
  IWRI: "作词者",
  ILNG: "语言",
} as const;

function INFO(dataView: DataView, offset: number, length: number) {
  const end = offset + length;
  const info: Record<string, string> = {};
  while (offset < end) {
    const chunkId = readChunkId(dataView, offset, 4);
    const chunkSize = dataView.getUint32(offset + 4, true);
    const chunkData = readChunkId(dataView, offset + 8, chunkSize);
    info[INFO_ID_MAP[chunkId as never] || chunkId] = chunkData.replace(
      /\u0000/g,
      ""
    );
    offset += 8 + chunkSize + (chunkSize % 2);
  }
  return info;
}

export default function LIST_INFO_Parser(
  dataView: DataView,
  offset: number,
  length: number
) {
  const type = readChunkId(dataView, offset, 4) as LIST_TYPE;
  if (type == "INFO") return INFO(dataView, offset + 4, length - 4);
}
