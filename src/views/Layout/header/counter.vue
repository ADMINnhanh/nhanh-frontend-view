<script setup lang="ts">
import { NButton, NIcon } from "naive-ui";
import { TrendingUp } from "@vicons/ionicons5";
import axios from "axios";
import { ref } from "vue";

/**
 * 资源元数据接口
 * 对应 GitHub Pages 项目或资源包的元信息结构
 */
interface ResourceMeta {
  /** 创建时间 */
  created_at: string;
  /** 资源描述 */
  description: string;
  /** 下载次数 */
  down_count: number;
  /** 唯一标识 */
  id: number;
  /** 资源名称 */
  name: string;
  /** 资源别名/路径 */
  slug: string;
  /** 团队 ID */
  team_id: number;
  /** 上传次数 */
  up_count: number;
  /** 最后更新时间 */
  updated_at: string;
  /** 用户 ID */
  user_id: number;
  /** 工作空间 ID */
  workspace_id: number;
  /** 工作空间别名 */
  workspace_slug: string;
}

const workspace = "s-team-20-3177";
const name = "nha-nh_github_io";
const url = `https://api.counterapi.dev/v2/${workspace}/${name}/up`;
const up_count = ref(0);
async function upCount() {
  try {
    const { data } = await axios.get<{ data: ResourceMeta }>(url);
    up_count.value = data.data.up_count;
  } catch (error: any) {
    console.error("Failed to track event:", error.message);
  }
}
if (import.meta.env.PROD) upCount();
</script>

<template>
  <NButton secondary strong title="本网站访问次数">
    <template #icon> <NIcon :component="TrendingUp" /> </template>
    {{ up_count }}
  </NButton>
</template>
