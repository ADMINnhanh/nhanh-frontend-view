import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import mkcert from "vite-plugin-mkcert";
import vueDevTools from "vite-plugin-vue-devtools";
import checker from "vite-plugin-checker";

export default defineConfig({
  // base: "/nhanh-frontend-view/",
  base: "./",
  plugins: [
    vue(),
    vueJsx(),
    mkcert(),
    vueDevTools(),
    checker({
      // 在这里配置你想要的检查工具
      typescript: true, // 启用 TypeScript 检查
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // 服务器配置
  server: {
    host: "0.0.0.0",
    cors: true, // 允许跨域
  },
  optimizeDeps: {
    exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/core", "@ffmpeg/util"],
  },
});
