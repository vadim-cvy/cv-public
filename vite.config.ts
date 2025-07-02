import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { generatePDF } from './scripts/generatePDF.js'

const urlBaseNoTrailingSlash = '/cv-public'

// https://vite.dev/config/
export default defineConfig({
  base: urlBaseNoTrailingSlash + '/',
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'generate-pdf',
      apply: 'build',
      closeBundle: () => generatePDF( urlBaseNoTrailingSlash )
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
