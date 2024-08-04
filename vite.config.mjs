import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue(), react()],
  server: {
    port: 5500, 
  },
});