import { defineConfig } from "vite";

export default defineConfig({
  base: "https://andrewmosh.github.io/Tamagochi_js/",

  build: {
    minify: "terser", // Минификация кода
    target: "es2015", // Транспиляция до ES2015
    outDir: "dist", // Папка для выходных файлов
    assetsInlineLimit: 4096, // Лимит для встраивания ресурсов в код (байты)
    sourcemap: false, // Генерация sourcemaps
    chunkSizeWarningLimit: 2000, // Предупреждение при большом размере чанка
  },
});
