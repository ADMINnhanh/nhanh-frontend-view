import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import mkcert from "vite-plugin-mkcert";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  base: "./",
  plugins: [vue(), vueJsx(), mkcert(), vueDevTools()],
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
  build: {
    outDir: "nhanh-frontend-view",
  },
});
