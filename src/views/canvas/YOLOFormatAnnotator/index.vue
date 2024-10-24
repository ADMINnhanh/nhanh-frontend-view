<script setup lang="ts">
import {
  NButton,
  NSpace,
  NSwitch,
  NUpload,
  NTag,
  NList,
  NListItem,
  NScrollbar,
  NIcon,
  type UploadFileInfo,
} from "naive-ui";
import { onUnmounted, ref, watch } from "vue";
import {
  handleKeyDown,
  handleMouseMove,
  handleMouseUp,
  handleWheel,
  handleMouseDown,
  handleContextMenu,
  handleMouseClick,
  handleBeginDraw,
  typeList,
  canvas,
  initialization,
  continuousCreated,
  curCreatedBox,
  ChangeData,
  addBoxType,
} from ".";

import img1 from "./1.avif";
import img2 from "./2.avif";
import { TrashBinOutline } from "@vicons/ionicons5";
import JSZip from "jszip";
import { _GenerateUUID } from "nhanh-pure-function";
import { HideGlobalLoading, ShowGlobalLoading } from "@/stores/globalLoading";

type FileList = {
  src: string;
  boxList: {
    name: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }[];
}[];
const fileList = ref<FileList>([
  {
    src: img1,
    boxList: [
      {
        name: "头盔",
        x: 0.15,
        y: 0.15,
        w: 0.15,
        h: 0.15,
      },
      {
        name: "口罩",
        x: 0.35,
        y: 0.45,
        w: 0.25,
        h: 0.25,
      },
    ],
  },
  {
    src: img2,
    boxList: [],
  },
]);
const fileListIndex = ref(0);

watch(ChangeData, (boxList) => {
  if (fileList.value.length >= fileListIndex.value) {
    fileList.value[fileListIndex.value].boxList = boxList;
  }
});

/** 初始化画布 */
function initializationCanvas(index?: number) {
  if (index === fileListIndex.value) return;
  if (index !== undefined) fileListIndex.value = index;
  requestAnimationFrame(() =>
    initialization(fileList.value[fileListIndex.value])
  );
}
initializationCanvas();

/** 添加图片 */
function uploadFileList(FileList: UploadFileInfo[]) {
  const file = FileList[0];
  if (!file || !file.file) return;
  const src = URL.createObjectURL(file.file);
  fileList.value.push({
    src,
    boxList: [],
  });
}
/** 删除图片 */
function deleteFileList(index: number) {
  fileList.value.splice(index, 1);
  const l = fileList.value.length;

  if (l == 0) {
    fileListIndex.value = 0;
    initialization();
  } else if (index == fileListIndex.value) {
    fileListIndex.value = Math.max(0, fileListIndex.value - 1);
    initialization(fileList.value[fileListIndex.value]);
  }
}

/** 删除方框类别 */
function deleteBoxType(name: string) {
  typeList.value = typeList.value.filter((item) => item.name !== name);
  fileList.value.forEach((item) => {
    item.boxList = item.boxList.filter((box) => box.name !== name);
  });
  initializationCanvas();
}

/** 导出 */
async function exportFile() {
  const loadingId = "yolo8FormatAnnotator";
  ShowGlobalLoading(loadingId, "导出中...");

  if (fileList.value.length == 0)
    return window.$message.warning("没有图片可导出~");

  const zip = new JSZip();
  const imagesFolder = zip.folder("images");
  const annotationsFolder = zip.folder("annotations");

  if (!imagesFolder || !annotationsFolder)
    return window.$message.warning("图片导出失败~");

  const names = typeList.value.map((item) => item.name);

  zip.file("names.txt", `names: ["${names.join('", "')}"]`);

  for (const item of fileList.value) {
    try {
      const response = await fetch(item.src);
      const blob = await response.blob();

      const filename = _GenerateUUID();
      imagesFolder.file(filename + "." + blob.type.split("/")[1], blob);

      const txtContent = item.boxList
        .map((box) => {
          const { name, x, y, w, h } = box;
          return `${names.findIndex(
            (item) => item === name
          )} ${x} ${y} ${w} ${h}`;
        })
        .join("\n");
      annotationsFolder.file(filename + ".txt", txtContent);
    } catch (error) {
      console.error(`Error fetching image at ${item.src}: ${error}`);
    }
  }

  zip
    .generateAsync({ type: "blob" })
    .then(function (content) {
      const url = URL.createObjectURL(content);
      const a = document.createElement("a");
      a.href = url;
      a.download = "yolo8FormatAnnotator.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .finally(() => HideGlobalLoading(loadingId));
}

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("mouseup", handleMouseUp);
window.addEventListener("keydown", handleKeyDown);
onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <div class="content">
    <div class="info">
      <NButton @click="addBoxType">添加标签</NButton>
      <NSpace>
        <NTag
          v-for="item in typeList"
          :key="item.name"
          closable
          :bordered="false"
          class="box-tag"
          :color="{
            color: item.color,
            textColor: '#fff',
          }"
          @close="deleteBoxType(item.name)"
        >
          {{ item.name }}
        </NTag>
      </NSpace>
      <NSpace>
        <NUpload
          multiple
          accept="image/*"
          :show-file-list="false"
          :file-list="[]"
          @update:file-list="uploadFileList"
        >
          <NButton>添加图片</NButton>
        </NUpload>
        <NButton @click="exportFile">导出</NButton>
      </NSpace>
      <NScrollbar class="file-list">
        <NList hoverable clickable>
          <NListItem
            v-for="(item, index) in fileList"
            :key="item.src"
            :class="[index == fileListIndex && 'active']"
            @click="initializationCanvas(index)"
          >
            <img :src="item.src" alt="" />
            标注个数：{{ item.boxList.length }}
            <NButton @click.stop="deleteFileList(index)"
              ><NIcon size="20" :component="TrashBinOutline" />
            </NButton>
          </NListItem>
        </NList>
      </NScrollbar>
    </div>
    <div
      class="canvas-box"
      :style="{
        'pointer-events': fileList.length > 0 ? 'auto' : 'none',
      }"
    >
      <canvas
        ref="canvas"
        @wheel="handleWheel"
        @mousedown="handleMouseDown"
        @contextmenu="handleContextMenu"
        @click="handleMouseClick"
      ></canvas>
      <NSpace>
        <NSwitch v-model:value="continuousCreated" size="large">
          <template #checked> 连续创建</template>
          <template #unchecked> 单个创建 </template>
        </NSwitch>
        <NButton
          v-for="(item, index) in typeList"
          :key="item.color"
          @click="handleBeginDraw(index)"
          :color="item.color"
          :secondary="curCreatedBox?.name !== item.name"
        >
          {{ item.name }}
        </NButton>
      </NSpace>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;

  .info {
    width: 400px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    > * {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .box-tag {
      :deep(button) {
        color: white;
      }
    }
    .file-list {
      width: 100%;
      height: 100px;
      flex-grow: 1;

      .active {
        background: var(--active-hover);
      }
      img {
        width: 100px;
      }
    }
    :deep(.n-list-item__main) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .canvas-box {
    width: 100px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    canvas {
      width: 100%;
      height: 100px;
      flex-grow: 1;
      margin-bottom: 15px;

      border: 1px solid var(--border-color);
      box-shadow: 0 0 5px 5px var(--box-shadow);
      border-radius: var(--border-radius);
    }
  }
}
</style>
