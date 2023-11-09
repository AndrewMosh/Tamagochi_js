import { defineConfig } from "vite";
import image from "@rollup/plugin-image";

export default defineConfig({
  base: "https://andrewmosh.github.io/Tamagochi_js/",
  plugins: [image()],
  build: {
    minify: "terser", // Минификация кода
    target: "es2015", // Транспиляция до ES2015
    outDir: "dist", // Папка для выходных файлов
    assetsInlineLimit: 4096, // Лимит для встраивания ресурсов в код (байты)
    sourcemap: false, // Генерация sourcemaps
  },
});
