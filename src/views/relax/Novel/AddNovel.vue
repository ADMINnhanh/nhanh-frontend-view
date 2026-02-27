<script setup lang="ts">
import {
  NUpload,
  NUploadDragger,
  NIcon,
  NText,
  type UploadFileInfo,
  NModal,
  NForm,
  type FormInst,
  NFormItem,
  type FormRules,
  NButton,
  NInput,
  NA,
  NSpace,
} from "naive-ui";
import { ArchiveOutline, CopyOutline } from "@vicons/ionicons5";
import { importNewNovel } from ".";
import {
  _Browser_CopyToClipboard,
  _Format_NumberWithUnit,
  _Tip,
} from "nhanh-pure-function";
import { ref } from "vue";

interface Props {
  callback: (promie: Promise<void>) => void;
}
const props = defineProps<Props>();

let file: File | null | undefined;
const showModal = ref(false);
const formRef = ref<FormInst | null>(null);
const formValue = ref({
  title: "",
  regular: "",
});
const rules: FormRules = {
  title: {
    required: true,
    message: "请输入 标题",
  },
  regular: {
    required: true,
    validator(rule, value) {
      if (!value) return new Error("请输入 正则");

      const title = formValue.value.title;
      const regular = new RegExp(value);
      const matchResult = title.match(regular);

      if (value && !title) return true;

      if (matchResult) {
        const result = matchResult[0];
        if (result == title) return true;
        return new Error(`该正则匹配到内容与标题不一致，匹配内容："${result}"`);
      } else {
        return new Error("该正则未匹配到内容");
      }
    },
  },
};
const loading = ref(false);
function handleValidateClick() {
  return formRef.value!.validate((errors) => {
    if (errors) {
      console.log(errors);
      window.$message.error("请按照要求填写表单");
      return Promise.reject();
    } else {
      window.$message.success("验证成功");
      return Promise.resolve();
    }
  });
}
function handleSubmitClick() {
  loading.value = true;
  handleValidateClick()
    .then(() => {
      const promise = importNewNovel(file!, formValue.value.regular).then(
        () => {
          loading.value = false;
          showModal.value = false;
        }
      );
      props.callback(promise);
    })
    .catch(() => (loading.value = false));
}

function analysis(fileList: UploadFileInfo[]) {
  file = fileList[0].file;
  if (!file) return window.$message.error("文件异常");

  showModal.value = true;
}
</script>

<template>
  <NUpload :file-list="[]" @update-file-list="analysis" accept="text/*">
    <NUploadDragger>
      <div style="margin-bottom: 6px">
        <NIcon size="35" :depth="3" :component="ArchiveOutline" />
      </div>
      <NText> 点击或者拖动文件到该区域来上传 </NText>
    </NUploadDragger>
  </NUpload>
  <NModal
    v-model:show="showModal"
    preset="card"
    style="width: 600px"
    title="章节标题正则配置"
    :auto-focus="false"
  >
    <NForm
      ref="formRef"
      label-width="auto"
      :model="formValue"
      :rules="rules"
      :disabled="loading"
    >
      <NFormItem :show-label="false">
        <NSpace vertical>
          <NA
            href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions"
            target="_blank"
          >
            前往 MDN 查看正则规则
          </NA>
          <NSpace>
            <NText depth="3">示例 - 标题</NText>
            <NText code>第1章 初入</NText>
            <NButton
              text
              type="success"
              @click="
                _Tip
                  .success('复制完成')
                  .error('复制失败')
                  .run(_Browser_CopyToClipboard('第1章 初入'))
              "
            >
              <template #icon>
                <NIcon :component="CopyOutline" />
              </template>
            </NButton>
          </NSpace>
          <NSpace align="center">
            <NText depth="3">示例 - 正则</NText>
            <NText code>
              第 *(?:[零一二三四五六七八九十百千万亿]+|\d+) *章[^\n]*
            </NText>
            <NButton
              text
              type="success"
              @click="
                _Tip
                  .success('复制完成')
                  .error('复制失败')
                  .run(
                    _Browser_CopyToClipboard(
                      '第 *(?:[零一二三四五六七八九十百千万亿]+|\\d+) *章[^\\n]*'
                    )
                  )
              "
            >
              <template #icon>
                <NIcon :component="CopyOutline" />
              </template>
            </NButton>
          </NSpace>
        </NSpace>
      </NFormItem>

      <NFormItem label="标题" path="title">
        <n-input
          v-model:value="formValue.title"
          clearable
          placeholder="输入 标题"
        />
      </NFormItem>
      <n-form-item label="正则" path="regular">
        <NInput
          v-model:value="formValue.regular"
          clearable
          placeholder="输入 正则"
        />
      </n-form-item>
      <NSpace style="width: 100%" justify="end">
        <NButton :loading="loading" @click="handleValidateClick">
          验证
        </NButton>
        <NButton :loading="loading" type="primary" @click="handleSubmitClick">
          确认
        </NButton>
      </NSpace>
    </NForm>
  </NModal>
</template>

<style scoped lang="less">
:deep(.n-upload-dragger) {
  padding: 10px;
}
.n-space {
  :deep(> div) {
    display: flex;
  }
}
</style>
