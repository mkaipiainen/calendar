// vite.config.js
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  server: {
    host: '0.0.0.0',
    port: 80,
    watch: {
      usePolling: true,
    },
    hmr: { clientPort: 8080 },
    historyApiFallback: {
      rewrites: [
        // Exclude static assets from being rewritten to index.html
        {
          from: /^\/.*\.(js|css|png|jpg|jpeg|gif|svg|ico)$/,
          to: (context) => context.parsedUrl.pathname,
        },
      ],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
