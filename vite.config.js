import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"; 

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
  },
  plugins: [
    ViteImageOptimizer({
        jpg: {
            quality: 75
        },
        jpeg: {
            quality: 75
        },
        webp: {
            quality: 75
        },
        avif: {
            quality: 75
        }
    })
  ]
})
