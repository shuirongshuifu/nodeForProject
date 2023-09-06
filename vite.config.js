import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 别名
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
  server: {
    // https: true,
    proxy: {
      '/flag': {
				target: 'http://33.33.33.33:3333',
        changeOrigin: true,
        // ws: true,
        rewrite: (path) => path.replace(/^\/flag/, "")
      }
    },
  },
})
