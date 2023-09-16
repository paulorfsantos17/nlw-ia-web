import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'
 
export default defineConfig({
  plugins: [react(),  crossOriginIsolation()],
  optimizeDeps: {
    exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util']
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})