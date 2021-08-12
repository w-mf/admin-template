import { defineConfig } from 'vite';
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ]
});
