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
  NSwitch,
} from "naive-ui";
import { ArchiveOutline } from "@vicons/ionicons5";
import { importNewNovel } from ".";
import { _Format_NumberWithUnit } from "nhanh-pure-function";
import { ref } from "vue";

interface Props {
  callback: (promie: Promise<void>) => void;
}
const props = defineProps<Props>();

let file: File | null | undefined;
const showModal = ref(false);
const formRef = ref<FormInst | null>(null);
const formValue = ref({
  join: true,
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

      const join = formValue.value.join ? "\\n" : "";
      const title = formValue.value.title + join;
      const regular = new RegExp(value);
      const matchResult = title.match(regular);

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

  // props.callback(importNewNovel(file));
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
    style="width: 500px"
    title="章节标题正则配置"
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
          </NSpace>
          <NSpace>
            <NText depth="3">示例 - 正则</NText>
            <NText code>第[^\\n]+章[^\\n]*\\n</NText>
          </NSpace>
        </NSpace>
      </NFormItem>

      <NFormItem path="join">
        <template #label>
          <NSpace>
            <NText> 验证时在标题末尾拼接 </NText>
            <NText code>\\n</NText>
          </NSpace>
        </template>
        <NSwitch v-model:value="formValue.join" />
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

<style scoped lang="less"></style>
