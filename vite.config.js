import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        images: resolve(__dirname, 'src/bilder.html'),
        process: resolve(__dirname, 'src/arbetsprocess.html')
      }
    }
  }
})
