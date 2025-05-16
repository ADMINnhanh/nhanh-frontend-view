<script setup lang="ts">
import {
  NButton,
  NSpace,
  NForm,
  NFormItem,
  NInput,
  NImage,
  NInputGroup,
  NPopover,
  useLoadingBar,
} from "naive-ui";
import { ref } from "vue";
import Popup from "@/components/layout/Popup.vue";
import service, { baseURL } from "@/utils/axios";
import { EnhancedCloseOnOutsideClick } from "../../main";
import { ruoyiUser } from "@/stores/user";

interface Props {
  zIndex: number;
}
const props = defineProps<Props>();
interface EmitType {
  (e: "closure"): void;
}
const Emit = defineEmits<EmitType>();

function Closure() {
  Emit("closure");
}
EnhancedCloseOnOutsideClick(
  [".login.center-positioning", ".open-login-button"],
  Closure,
  props.zIndex
);

const src = ref("");
function UpdateSrc() {
  const url = baseURL.replace(
    "nhanh",
    "captcha/captchaImage?type=math&s=" + Math.random()
  );
  service.get(url, { responseType: "arraybuffer" }).then((res) => {
    const blob = new Blob([res as never], { type: "image/jpge" });
    src.value = URL.createObjectURL(blob);
    form.value.validateCode = "";
  });
}
UpdateSrc();
const form = ref({
  username: "",
  password: "",
  validateCode: "",
  rememberMe: false,
});

const formRef = ref<InstanceType<typeof NForm>>();
const loadingBar = useLoadingBar();
function Login() {
  formRef.value?.validate((errors) => {
    if (errors) {
      window.$message.error("请按要求填写表单");
    } else {
      loadingBar.start();
      service
        .post(baseURL.replace("nhanh", "login"), form.value, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          window.$message.success("登录成功");
          ruoyiUser.value.token = res.data.token;
          loadingBar.finish();
          Closure();
        })
        .catch(() => loadingBar.error());
    }
  });
}
</script>

<template>
  <Popup class="login center-positioning" @closure="Closure" :zIndex="zIndex">
    <template #header>登录</template>
    <NForm
      ref="formRef"
      label-width="auto"
      label-placement="left"
      :model="form"
    >
      <NFormItem label="用户名" required path="username">
        <NInput
          v-model:value="form.username"
          placeholder="请输入 用户名"
          clearable
          @keyup.enter="Login"
        />
      </NFormItem>
      <NFormItem label="密码" required path="password">
        <NInput
          v-model:value="form.password"
          placeholder="请输入 密码"
          type="password"
          show-password-on="mousedown"
          clearable
          @keyup.enter="Login"
        />
      </NFormItem>
      <NFormItem label="验证码" required path="validateCode">
        <NInputGroup>
          <NInput
            v-model:value="form.validateCode"
            placeholder="请输入 验证码"
            clearable
            @keyup.enter="Login"
          />
          <NPopover>
            <template #trigger>
              <NImage
                @click="UpdateSrc"
                :src="src"
                style="height: 34px; cursor: pointer"
                preview-disabled
              />
            </template>
            <NImage :src="src" height="80" preview-disabled />
          </NPopover>
        </NInputGroup>
      </NFormItem>
      <NFormItem label=" ">
        <NSpace>
          <NButton @click="Closure">取消</NButton>
          <NButton type="primary" @click="Login">登录</NButton>
        </NSpace>
      </NFormItem>
    </NForm>
  </Popup>
</template>

<style lang="less" scoped>
.login {
  --width: 400px;
  --height: 331px;
}
</style>
