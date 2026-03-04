# nhanh-frontend-view

> 一个基于 Vue 3 和 Vite 构建的多功能前端实验平台，涵盖图形可视化、多媒体处理、数学动态演示、知识管理与休闲阅读等模块。  
> 🌐 [在线预览](https://nha-nh.github.io)

## 💡 项目简介

本项目旨在探索 Web 前端在创意表达与交互体验上的可能性，整合了以下核心功能：

- **Canvas 与 WebGL 可视化**：包括 GLSL 着色器、Three.js 场景、图像散点重组、YOLO 标注工具等
- **多媒体处理**：支持 MP3/WAV 音频解析、波形/频谱可视化、WebRTC 实时通信（PeerJS）
- **数学动态图解**：三角形性质、黄金分割、几何构造等交互式演示
- **知识与阅读系统**：中英术语对照、小说章节管理、阅读模式优化
- **UI 组件库**：自定义布局、弹窗系统、拖拽文件处理、响应式设计

## 🛠 技术栈

- **框架**：Vue 3 (Composition API) + TypeScript
- **构建工具**：Vite
- **类型增强**：vue-tsc
- **工具函数**：封装了地图、快捷键、窗口操作、Ruoyi API 适配等 (`utils/`)
- **样式系统**：CSS 变量 + TypeScript 配置（颜色、尺寸）

## 🚀 快速开始

### 前置要求

- Node.js ≥ 16.x
- npm 或 pnpm

### 安装依赖

```bash
npm install
# 或
pnpm install
```

### 开发模式（热重载）

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 类型检查

```bash
npm run type-check
# 或直接使用 vue-tsc
npx vue-tsc --noEmit
```

## 🧩 推荐开发环境

- **编辑器**：[VS Code](https://code.visualstudio.com/)
- **必备插件**：
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（提供 `.vue` 文件的 TypeScript 支持）
  - 禁用 Vetur（避免冲突）

## 📂 项目结构概览

```
src/
├── assets/          # 静态资源（图标、样式变量、API 类型定义）
├── components/      # 公共组件（布局、弹窗、单文件组件）
├── views/           # 页面视图（Canvas、多媒体、数学、阅读等）
├── utils/           # 工具函数（地图、快捷键、窗口操作等）
├── router/          # 路由配置
└── App.vue / main.ts
```

## 🌟 特色模块示例

| 模块 | 描述 |
|------|------|
| `views/canvas/GLSL` | 使用片段着色器实现流体、色彩空间转换等视觉效果 |
| `views/multimedia/AudioPlayer` | 解析音频文件元数据并实时渲染波形与频谱 |
| `views/math/DynamicDiagram` | 动态展示几何定理与数学关系 |
| `views/relax/Novel` | 小说阅读器，支持节点搜索与沉浸式阅读 |

## 📜 许可证

MIT License — 自由使用、修改与分发，请保留原作者信息。

---

> 项目持续迭代中，欢迎提交 Issue 或 PR！
