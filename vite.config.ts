import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@VirtualTree': path.resolve(__dirname, './src/VirtualTree'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
});
