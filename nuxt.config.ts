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
  },
  build: {
    transpile:
      lifecycle === 'build' || lifecycle === 'generate' ? ['element-plus'] : [],
  },
  modules: ['@element-plus/nuxt', 'nuxt-icon', '@nuxtjs/tailwindcss'],

  elementPlus: {
    importStyle: 'scss',
    themes: ['dark'],
    components: [
      'ElButton',
      'ElCard',
      'ElCol',
      'ElContainer',
      'ElFooter',
      'ElHeader',
      'ElIcon',
      'ElInput',
      'ElMain',
      'ElMenu',
      'ElSubMenu',
      'ElMenuItem',
      'ElRow',
      'ElLink',
      'ElRadio',
      'ElRadioGroup',
      'ElPopover',
      'ElDivider',
      'ElPageHeader',
      'ElTabs',
      'ElEmpty',
      'ElCheckbox',
      'ElCollapse',
      'ElCollapseItem',
      'ElForm',
      'ElFormItem',
      'ElTag',
      'ElAvatar',
      'ElTooltip',
      'ElSwitch',
      'ElDrawer',
      'ElBacktop',
    ],
  },
})
