import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
    ? '/resume-website/'  // GitHub Pages 需要仓库名前缀
    : '/',                // 开发环境用根路径
  build: {
    outDir: 'dist'
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ⚠️ 这里应该是 'src'，不要加斜杠开头
    },
  },
})
