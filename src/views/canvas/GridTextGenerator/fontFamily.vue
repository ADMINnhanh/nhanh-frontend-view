<script lang="ts" setup>
import {
  _File_Download,
  _Utility_Debounce,
  _Utility_GenerateUUID,
} from "nhanh-pure-function";
import {
  NButton,
  NDynamicInput,
  NH5,
  NIcon,
  NModal,
  NSpace,
  NText,
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

/**
 * 字体名称校验方法（修复空格+数字结尾规则）
 * @param {string} fontFamily - 待校验的字体名称
 * @returns {Object} 校验结果：{ valid: 布尔值, reason: 错误原因（若无效） }
 */
function validateFontFamily(fontFamily: string) {
  fontFamily = fontFamily.trim();

  // 步骤1：空字符串直接判定无效
  if (fontFamily === "") {
    return { valid: false, reason: "字体名称不允许：为空" };
  }

  // 步骤2：校验基础字符
  if (!/^[\u4e00-\u9fa5a-zA-Z0-9\s-]+$/.test(fontFamily)) {
    return {
      valid: false,
      reason: "字体名称仅允许包含：中文、英文、数字、空格、中划线",
    };
  }

  // 步骤3：校验数字开头
  if (/^[\d-]/.test(fontFamily)) {
    return { valid: false, reason: "字体名称不允许：以 数字/中划线 开头" };
  }

  // 步骤4：校验必须包含中文/英文
  if (!/[a-zA-Z\u4e00-\u9fa5]/.test(fontFamily)) {
    return { valid: false, reason: "字体名称必须包含：中文或英文" };
  }

  // 步骤5：校验空格 + 数字/中划线
  if (/\s+[\d-]+/.test(fontFamily)) {
    return { valid: false, reason: "字体名称不允许：空格 + 数字/中划线" };
  }

  // 所有规则通过
  return { valid: true, reason: "校验通过" };
}
function showErrorMessage(msg: string) {
  window.$message.error(msg, {
    duration: 0,
    closable: true,
  });
}

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
  const familys = newFamily.value.filter((v) => {
    if (v.value) {
      const { valid, reason } = validateFontFamily(v.key);
      if (valid) return true;
      showErrorMessage(`"${v.key}" ` + +reason);
      return false;
    } else {
      showErrorMessage(`"${v.key}" ` + "：请填写字体文件地址");
    }
  });

  if (familys.length != newFamily.value.length) return;

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
  fontFamilyOptions.value.unshift({
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
        .catch((err) => {
          showErrorMessage(`字体加载失败：${font.key}`);
          return Promise.reject();
        });
    });
    Promise.all(fontPromises)
      .then(function () {
        window.$message.success("字体加载成功");
        close();
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
watch(fileList, (fileList) => {
  const last = fileList[fileList.length - 1];
  if (!last) return;
  const lastDotIndex = last.name.lastIndexOf(".");
  const name = last.name.substring(0, lastDotIndex).trim();

  const { valid, reason } = validateFontFamily(name);
  if (valid) {
    last.name = name;
  } else {
    showErrorMessage(`"${name}" ` + reason);
    fileList.pop();
  }
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
    <NH5 prefix="bar" type="info">
      <NH5 prefix="bar" type="warning">
        字体名称仅能包含：中文、英文、数字、空格、中划线
      </NH5>
      <NH5 prefix="bar" type="warning" style="margin-top: 0px">
        <NText type="error">必须包含</NText>
        <NText type="info">‘中文或英文’</NText>
        ，
        <NText type="error">不允许</NText>
        <NText type="info">‘数字/中划线’</NText>
        开头，
        <NText type="error">不允许</NText>
        <NText type="info">‘空格 + 数字/中划线’</NText>
        。
      </NH5>
    </NH5>
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
