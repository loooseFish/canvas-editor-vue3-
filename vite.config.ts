// @ts-ignore
import { defineConfig } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'

// path config
import path from 'path'

// 导入安装的 vite-plugin-vue-setup-extend 插件
// @ts-ignore
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
