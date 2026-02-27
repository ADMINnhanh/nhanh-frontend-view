// vite.config.ts
import { defineConfig } from "file:///C:/Users/Administrator/Desktop/nhanh-frontend-view/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/Administrator/Desktop/nhanh-frontend-view/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/Administrator/Desktop/nhanh-frontend-view/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import path from "path";
import mkcert from "file:///C:/Users/Administrator/Desktop/nhanh-frontend-view/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import vueDevTools from "file:///C:/Users/Administrator/Desktop/nhanh-frontend-view/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import checker from "file:///C:/Users/Administrator/Desktop/nhanh-frontend-view/node_modules/vite-plugin-checker/dist/main.js";
var __vite_injected_original_dirname = "C:\\Users\\Administrator\\Desktop\\nhanh-frontend-view";
var vite_config_default = defineConfig({
  base: "/nhanh-frontend-view/",
  plugins: [
    vue(),
    vueJsx(),
    mkcert(),
    vueDevTools(),
    checker({
      // 在这里配置你想要的检查工具
      typescript: true
      // 启用 TypeScript 检查
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  // 服务器配置
  server: {
    host: "0.0.0.0",
    cors: true
    // 允许跨域
  },
  optimizeDeps: {
    exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/core", "@ffmpeg/util"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcbmhhbmgtZnJvbnRlbmQtdmlld1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEZXNrdG9wXFxcXG5oYW5oLWZyb250ZW5kLXZpZXdcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9uaGFuaC1mcm9udGVuZC12aWV3L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCB2dWVKc3ggZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IG1rY2VydCBmcm9tIFwidml0ZS1wbHVnaW4tbWtjZXJ0XCI7XHJcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXCI7XHJcbmltcG9ydCBjaGVja2VyIGZyb20gXCJ2aXRlLXBsdWdpbi1jaGVja2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6IFwiL25oYW5oLWZyb250ZW5kLXZpZXcvXCIsXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICB2dWVKc3goKSxcclxuICAgIG1rY2VydCgpLFxyXG4gICAgdnVlRGV2VG9vbHMoKSxcclxuICAgIGNoZWNrZXIoe1xyXG4gICAgICAvLyBcdTU3MjhcdThGRDlcdTkxQ0NcdTkxNERcdTdGNkVcdTRGNjBcdTYwRjNcdTg5ODFcdTc2ODRcdTY4QzBcdTY3RTVcdTVERTVcdTUxNzdcclxuICAgICAgdHlwZXNjcmlwdDogdHJ1ZSwgLy8gXHU1NDJGXHU3NTI4IFR5cGVTY3JpcHQgXHU2OEMwXHU2N0U1XHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyBcdTY3MERcdTUyQTFcdTU2NjhcdTkxNERcdTdGNkVcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4gICAgY29yczogdHJ1ZSwgLy8gXHU1MTQxXHU4QkI4XHU4REU4XHU1N0RGXHJcbiAgfSxcclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGV4Y2x1ZGU6IFtcIkBmZm1wZWcvZmZtcGVnXCIsIFwiQGZmbXBlZy9jb3JlXCIsIFwiQGZmbXBlZy91dGlsXCJdLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtWLFNBQVMsb0JBQW9CO0FBQy9XLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGFBQWE7QUFOcEIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osUUFBUTtBQUFBO0FBQUEsTUFFTixZQUFZO0FBQUE7QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLEVBQ1I7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxrQkFBa0IsZ0JBQWdCLGNBQWM7QUFBQSxFQUM1RDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
