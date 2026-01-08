import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }: ConfigEnv) => ({
  plugins: [react()],
  // Netlify/로컬: /
  // GitHub Pages(레포명 menu): /menu/
  base: mode === "gh" ? "/menu/" : "/",
}));
