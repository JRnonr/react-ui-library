import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  resolve: {
    alias: {
      '@velvetdesign/ui': resolve(__dirname, '../packages/ui/src'),
      '@velvet/ui': resolve(__dirname, '../packages/ui/src')
    }
  },
  define: {
    global: 'globalThis',
  },
  server: {
    port: 3001,
    open: true
  }
}) 