import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components()],
  build: {
    outDir: path.join(__dirname, "docs"),
  },
});
