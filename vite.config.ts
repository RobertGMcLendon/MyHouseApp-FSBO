import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',            // This tells Vite to start at index.html in root
  build: {
    outDir: 'dist',     // This is the folder Vercel expects after build
  },
})
npm install --save-dev vite @vitejs/plugin-react
git add vite.config.ts package.json package-lock.json
git commit -m "Add vite.config.ts and install Vite plugins"
git push origin main
