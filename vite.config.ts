import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist/renderer',
    assetsDir: 'resources/assets'
  },
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173
  }
})
