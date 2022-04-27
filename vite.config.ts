import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const proxyUrl = loadEnv('', './').VITE_API_PROXY_URL;
const proxy = proxyUrl
  ? {
      '/api': {
        target: proxyUrl,
        changeOrigin: true,
      },
    }
  : undefined;
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
  server: {
    host: '127.0.0.1',
    port: 3333,
    open: true,
    proxy,
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
