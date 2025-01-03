import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';
import checker from 'vite-plugin-checker';
import {VitePWA, VitePWAOptions} from "vite-plugin-pwa";

const manifest: Partial<VitePWAOptions> = {
  includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
  manifest: {
    name: 'Stories Like Grapes',
    short_name: 'SLG',
    description: 'An app for various home-tasks',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  registerType: 'autoUpdate',
  devOptions: { enabled: true }, // Enables SW during development for testing.
  injectRegister: 'auto',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
    cleanupOutdatedCaches: true,
  }
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    VitePWA({
      ...manifest,
      srcDir: 'src',
      filename: 'sw.js', // Ensure this matches the filename in src
      strategies: 'injectManifest',
      injectManifest: {
        swSrc: 'src/sw.js', // The path to your custom SW file
        swDest: 'dist/sw.js', // Output path for the built SW
      },
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 4200,
    watch: {
      usePolling: true,
    },
    hmr: { clientPort: 4200, host: 'localhost' },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
      '@api': fileURLToPath(new URL('../api/', import.meta.url)),
    },
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true },
  },
});
