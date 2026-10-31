import { resolve } from 'node:path'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// robots.txt et sitemap.xml générés depuis VITE_SITE_URL : le domaine n'est écrit qu'une fois, dans .env.
function seoFiles(url: string): Plugin {
  return {
    name: 'seo-files',
    buildStart() {
      if (url.includes('example.com')) this.warn("VITE_SITE_URL vaut encore example.com : renseigne le vrai domaine et l'e-mail dans .env avant de mettre en ligne.")
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n` })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${url}/</loc></url>\n</urlset>\n`,
      })
    },
  }
}

// Le CSS (~12 Ko gzip) est inséré dans le HTML : plus de feuille externe bloquant le rendu (Page Insights).
// shortcut: tout le CSS en ligne, pas de cache séparé; à remplacer par du CSS critique seul s'il dépasse ~30 Ko gzip.
function inlineCss(): Plugin {
  return {
    name: 'inline-css',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        return html.replace(/<link rel="stylesheet"[^>]*href="\/([^"]+\.css)"[^>]*>/g, (tag, file) => {
          const asset = ctx.bundle?.[file]
          return asset?.type === 'asset' ? `<style>${asset.source}</style>` : tag
        })
      },
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), inlineCss(), seoFiles(loadEnv(mode, process.cwd()).VITE_SITE_URL)],
  build: {
    cssCodeSplit: false, // un seul CSS bloquant au lieu de deux (Lenis + Tailwind)
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mentionsLegales: resolve(__dirname, 'mentions-legales.html'),
      },
    },
  },
}))
