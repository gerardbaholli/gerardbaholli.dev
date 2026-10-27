import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'

// CVs actually present in public/, keyed by language (checked at build/dev-server start)
const cvLinks = Object.fromEntries(
  ['it', 'en']
    .map((lang) => [lang, `/GerardBaholli-Curriculum-${lang[0].toUpperCase()}${lang[1]}.pdf`])
    .filter(([, path]) => existsSync(new URL(`./public${path}`, import.meta.url)))
)

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  define: {
    'import.meta.env.CV_LINKS': JSON.stringify(cvLinks),
  },
  server: {
    host: '0.0.0.0'
  }
})
