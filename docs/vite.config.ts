import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@velvet/ui': resolve(__dirname, '../packages/ui/src')
    }
  },
  optimizeDeps: {
    include: ['@velvet/ui']
  },
  server: {
    port: 3001,
    open: true
  }
}) 