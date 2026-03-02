import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import mkcert from "vite-plugin-mkcert";
import vueDevTools from "vite-plugin-vue-devtools";
import checker from "vite-plugin-checker";
import fs from "fs";

export default defineConfig({
  // base: "/nhanh-frontend-view/",
  base: "/",
  plugins: [
    vue(),
    vueJsx(),
    mkcert(),
    vueDevTools(),
    checker({
      // 在这里配置你想要的检查工具
      typescript: true, // 启用 TypeScript 检查
    }),
    {
      name: "fix-spa",
      closeBundle() {
        const baseUrl = "https://nha-nh.github.io";
        const routes = [
          "math/DynamicDiagram",
          "canvas/_Canvas",
          "canvas/YOLOFormatAnnotator",
          "canvas/Threejs",
          "canvas/GLSL",
          "canvas/ImageScatterRecombine",
          "canvas/GridTextGenerator",
          "multimedia/TakeFlow",
          "multimedia/AudioPlayer",
          "relax/Bounce",
          "relax/Knowledge",
          "relax/Novel",
          "canvas",
          "math",
          "multimedia",
          "relax",
          "404",
        ];
        const distPath = path.resolve(__dirname, "dist");
        routes.forEach((route) => {
          const dir = path.join(distPath, route);
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
          fs.copyFileSync(
            path.join(distPath, "index.html"),
            path.join(dir, "index.html")
          );
        });

        // 包含根目录 / 和所有子路由
        const sitemapContent = [
          baseUrl + "/",
          ...routes.map((route) => `${baseUrl}/${route}`),
        ].join("\n");

        fs.writeFileSync(path.join(distPath, "sitemap.txt"), sitemapContent);
      },
    },
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
