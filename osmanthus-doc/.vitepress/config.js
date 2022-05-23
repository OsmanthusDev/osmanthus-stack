
const nav = [
  { text: 'Home', link: '/', activeMatch: '^/$' },
  {
    text: 'Backend',
    link: '/content/backend/',
    activeMatch: '^/content/backend/'
  },
  {
    text: 'SPA',
    link: '/content/spa/',
    activeMatch: '^/content/spa/'
  },
  {
    text: 'Mobile',
    link: '/content/mobile/',
    activeMatch: '^/content/mobile/'
  },
  {
    text: 'SSR',
    link: '/content/ssr/',
    activeMatch: '^/content/ssr/'
  },
  {
    text: 'BFF',
    link: '/content/bff/',
    activeMatch: '^/content/bff/'
  },
  {
    text: 'Demand',
    link: '/content/demand/',
    activeMatch: '^/content/demand/'
  },
  {
    text: 'VitePress',
    link: 'https://vitepress.vuejs.org/'
  }
]

const sidebar = {
  '/content/backend/': [
    {
      text: 'Guide',
      children: [
        {
          text: '概览',
          link: '/content/backend/overview'
        },
      ]
    },
  ],
  '/content/spa/': [
    {
      text: 'Guide',
      children: [
        {
          text: '概览',
          link: '/content/spa/overview'
        },
      ]
    },
  ],
  '/content/mobile/': [
    {
      text: 'Guide',
      children: [
        {
          text: '概览',
          link: '/content/mobile/overview'
        },
      ]
    },
  ],
  '/content/demand/': [
    {
      text: 'Guide',
      children: [
        {
          text: '模块',
          link: '/content/demand/module'
        },
      ]
    },
  ],
}

const config = {
  lang: 'zh-CN',
  title: 'Osmanthus Doc',
  description: 'Osmanthus Doc.',
  lastUpdated: true,
  themeConfig: {
    docsDir: 'content',
    docsBranch: 'main',
    nav: nav,
    sidebar: sidebar,
  }
}

export default config
