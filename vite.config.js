import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      //将什么样的文件转换成路由
      extensions: ['vue'],
      //哪个文件夹里的vue文件不需要转换成路由
      exclude: ["**/components/*.vue"],
      dirs: [
        { dir: 'src/pages', baseRoute: '' },
      ]
    }),
  ]
})
