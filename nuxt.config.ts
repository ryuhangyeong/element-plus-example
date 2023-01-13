const lifecycle = process.env.npm_lifecycle_event

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'initial-scale=1',
      title: 'Element Plus Example',
      meta: [
        {
          name: 'description',
          content: 'Build a website quickly using a Element Plus',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    // baseURL: '/element-plus-example/',
  },
  css: ['~/assets/scss/index.scss'],
  build: {
    transpile:
      lifecycle === 'build' || lifecycle === 'generate' ? ['element-plus'] : [],
  },
  modules: ['nuxt-icon', '@nuxtjs/tailwindcss'],
})
