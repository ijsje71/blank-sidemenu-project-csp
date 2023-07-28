import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    {
      name: 'html-inject-nonce-into-script-tag',
      enforce: 'post',
      transformIndexHtml(html: string) {
        const regex = /<(link|style|script)/gi;
        const replacement = '<$1 nonce="**CSP_NONCE**"';
        return html.replace(regex, replacement);
      },
    }
  ],
})
