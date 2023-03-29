import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
  },
  resolve: {
    alias: [
      {
        find: '@material-ui/styles',
        replacement: resolve(__dirname, './node_modules/@material-ui/styles'),
      },
      { find: '~/', replacement: resolve(__dirname, './src') },
      { find: '~/api', replacement: resolve(__dirname, './src/api') },
      {
        find: '~/assets',
        replacement: resolve(__dirname, './src/assets'),
      },
      {
        find: '~/assets/svg',
        replacement: resolve(__dirname, './src/assets/svg'),
      },
      {
        find: '~/assets/images',
        replacement: resolve(__dirname, './src/assets/images'),
      },
      {
        find: '~/assets/animations',
        replacement: resolve(__dirname, './src/assets/animations'),
      },
      {
        find: '~/components',
        replacement: resolve(__dirname, './src/components'),
      },
      { find: '~/routes', replacement: resolve(__dirname, './src/routes') },
      { find: '~/scenes', replacement: resolve(__dirname, './src/scenes') },
      { find: '~/locales', replacement: resolve(__dirname, './src/locales') },
      { find: '~/modules', replacement: resolve(__dirname, './src/modules') },
      { find: '~/services', replacement: resolve(__dirname, './src/services') },
      { find: '~/stores', replacement: resolve(__dirname, './src/stores') },
      { find: '~/theme', replacement: resolve(__dirname, './src/theme') },
      { find: '~/utils', replacement: resolve(__dirname, './src/utils') },
      {
        find: '~/utils/types',
        replacement: resolve(__dirname, './src/utils/types'),
      },
      { find: '~/scenes', replacement: resolve(__dirname, './src/scenes') },
    ],
  },
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        short_name: 'Template Builders',
        name: 'Template Builders',
        description: 'My Awesome Template Builders description',
        start_url: '.',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'android-icon.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'favicon.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
