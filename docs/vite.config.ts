import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@velvet/ui': resolve(__dirname, '../packages/ui/dist/index.es.js'),
      '@velvet/ui/dist/style.css': resolve(__dirname, '../packages/ui/dist/style.css')
    }
  },
  optimizeDeps: {
    include: ['@velvet/ui']
  },
  define: {
    global: 'globalThis',
  },
  server: {
    port: 3001,
    open: true
  }
}) 