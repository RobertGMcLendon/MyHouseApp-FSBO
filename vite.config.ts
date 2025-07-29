import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.', // Tell Vite to treat root folder as base
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Explicit entry file
    },
  },
});
