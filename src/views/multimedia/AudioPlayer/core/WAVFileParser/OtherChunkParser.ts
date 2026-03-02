import ID3v2Parser from "../MP3FileParser/ID3v2Parser";
import LIST_INFO_Parser from "./LISTParser";
import { readChunkId } from "./main";

type OtherChunk = {
  id3?: ReturnType<typeof ID3v2Parser>;
  list_info?: ReturnType<typeof LIST_INFO_Parser>;
  [key: string]: any;
};

export default function OtherChunkParser(dataView: DataView) {
  let offset = 0;

  const otherChunk: OtherChunk = {};
  while (offset < dataView.byteLength) {
    const chunkId = readChunkId(dataView, offset, 4);
    const chunkSize = dataView.getUint32(offset + 4, true);

    if (chunkId == "LIST") {
      otherChunk.list_info = LIST_INFO_Parser(dataView, offset + 8, chunkSize);
    } else if (chunkId == "id3 ") {
      otherChunk.id3 = ID3v2Parser(dataView.buffer, offset + 8);
    } else {
      otherChunk[chunkId.trim()] = chunkSize;
    }

    if (chunkId == "RIFF") offset += 12;
    else offset += 8 + chunkSize + (chunkSize % 2);
  }

  return otherChunk;
}
