export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/', '/projects', '/projects/1', '/projects/2', '/projects/3', '/projects/4', '/projects/5', '/projects/6', '/projects/7']
    }
  },
  app: {
    head: {
      title: 'Vladimir | Full-Stack Developer',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bangers&family=JetBrains+Mono:wght@400;700&family=Literata:opsz,wght@7..72,400;7..72,700&display=swap' }
      ]
    }
  },
  css: ['~~/assets/css/manga.css']
})
