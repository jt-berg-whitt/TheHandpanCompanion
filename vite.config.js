// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/thehandpan-companion-website/', // your GitHub repo name
  plugins: [react()],
});
