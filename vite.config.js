import {defineConfig, loadEnv, splitVendorChunkPlugin} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import name from "./package.json"
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(( {mode} ) => {
  const env = loadEnv(mode, __dirname)
  return {
    plugins: [vue(),  vueJsx(), splitVendorChunkPlugin(),],
    // base: env.VITE_USER_NODE_ENV === 'development' ? '/vue3demo/' : '/vue3demo/',
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src'),
            "@images": resolve('src/assets/images')
        },
        // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    build: {
        outDir: "dist",
        sourcemap: false, //是否构建source map 文件
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, "./index.html"),
            },
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
                entryFileNames: `js/[name].js`,
                chunkFileNames: `chunk/[name].js`,
                assetFileNames: `static/[ext]/[name].[ext]`,
            },
        },
        minify: "esbuild",
    },
  }
})
