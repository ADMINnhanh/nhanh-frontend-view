<script lang="ts" setup>
import {
  _File_Download,
  _Utility_Debounce,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import {
  NButton,
  NDynamicInput,
  NIcon,
  NModal,
  NSpace,
  NUpload,
  type UploadFileInfo,
} from "naive-ui";
import { CloudUploadOutline, Reload } from "@vicons/ionicons5";
import { ref, watch } from "vue";

const active = ref(false);
const loading = ref(false);
const fontFamilyOptions = defineModel<Array<Record<"label" | "value", string>>>(
  "fontFamilyOptions",
  { required: true }
);

const fileList = ref<UploadFileInfo[]>([]);
const newFamily = ref<Array<Record<"key" | "value", string>>>([]);

const tempUrls: string[] = [];
function getUrl() {
  return fileList.value.map((file) => {
    const key = file.name;
    const value = URL.createObjectURL(file.file!);
    tempUrls.push(value);
    return { key, value };
  });
}
function getOptions() {
  const options = getUrl();
  const familys = newFamily.value.filter((v) => v.key && v.value);

  if (familys.length != newFamily.value.length) {
    window.$message.warning("请填写完整");
  }

  options.push(...familys);

  if (options.length) {
    return options;
  } else {
    window.$message.warning("请选择字体");
  }
}
function delOptions(key: string, value: string) {
  if (tempUrls.includes(value)) {
    URL.revokeObjectURL(value);
    fileList.value = fileList.value.filter((v) => v.name != key);
  } else {
    newFamily.value = newFamily.value.filter((v) => v.key != key);
  }
}
function loadFinish(font: FontFace, key: string, value: string) {
  delOptions(key, value);
  document.fonts.add(font);
  fontFamilyOptions.value.push({
    value: key,
    label: key,
  });
}
function reload() {
  const options = getOptions();
  if (options) {
    loading.value = true;

    const fontPromises = options.map(function (font) {
      const fontFace = new FontFace(font.key, `url('${font.value}')`);
      return fontFace
        .load()
        .then(() => loadFinish(fontFace, font.key, font.value))
        .catch(() => {
          window.$message.error(`字体加载失败：${font.key}`);
          return Promise.reject();
        });
    });
    Promise.all(fontPromises)
      .then(function () {
        window.$message.success("字体加载成功");
        close();
      })
      .catch(function (err) {
        window.$message.error("余下字体加载失败");
      })
      .finally(function () {
        loading.value = false;
      });
  }
}

function close() {
  active.value = false;
  tempUrls.forEach((url) => URL.revokeObjectURL(url));
  tempUrls.length = 0;
  fileList.value = [];
  newFamily.value = [];
}
watch(active, (active) => {
  if (!active) close();
});
</script>

<template>
  <NButton type="info" ghost @click="active = true">
    <template #icon>
      <NIcon :component="CloudUploadOutline" />
    </template>
    导入临时字体
  </NButton>

  <NModal
    v-model:show="active"
    preset="card"
    title="导入临时字体"
    style="width: 800px"
  >
    <NDynamicInput
      v-model:value="newFamily"
      preset="pair"
      key-placeholder="字体名称"
      value-placeholder="字体文件地址"
    />
    <NUpload
      v-model:file-list="fileList"
      multiple
      accept=".ttf,.otf,.woff,.woff2,.eot,.svg"
    >
      <n-button>
        <template #icon>
          <NIcon :component="CloudUploadOutline" />
        </template>
        上传文件
      </n-button>
    </NUpload>

    <NSpace justify="end">
      <n-button type="success" :loading="loading" @click="reload">
        <template #icon>
          <NIcon :component="Reload" />
        </template>
        加载
      </n-button>
    </NSpace>
  </NModal>
</template>

<style scoped lang="less">
.n-upload {
  margin: 10px 0;
  :deep(.n-upload-trigger) {
    width: 100%;
    .n-button {
      width: 100%;
    }
  }
}
</style>
