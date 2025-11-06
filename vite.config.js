import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  base: isDev ? '/' : (process.env.VITE_BASE_URL || '/'),
  plugins: [react()],
});