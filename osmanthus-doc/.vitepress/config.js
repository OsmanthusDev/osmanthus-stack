
const nav = [
  { text: 'Home', link: '/', activeMatch: '^/$' },
  {
    text: 'Guide',
    link: '/guide/',
    activeMatch: '^/guide/'
  },
  {
    text: 'Backend',
    link: '/backend/',
    activeMatch: '^/backend/'
  },
  {
    text: 'SPA',
    link: '/spa/',
    activeMatch: '^/spa/'
  },
  {
    text: 'Mobile',
    link: '/mobile/',
    activeMatch: '^/mobile/'
  },
  {
    text: 'SSR',
    link: '/ssr/',
    activeMatch: '^/ssr/'
  },
  {
    text: 'BFF',
    link: '/bff/',
    activeMatch: '^/bff/'
  },
  {
    text: 'Demand',
    link: '/demand/',
    activeMatch: '^/demand/'
  },
  {
    text: 'VitePress',
    link: 'https://vitepress.vuejs.org/'
  }
]

const sidebar = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        {
          text: '指南',
          link: '/guide/'
        },
      ]
    },
  ],
  '/backend/': [
    {
      text: 'Guide',
      children: [
        {
          text: '概览',
          link: '/backend/overview'
        },
      ]
    },
  ],
  '/spa/': [
    {
      text: 'Guide',
      children: [
        {
          text: '概览',
          link: '/spa/overview'
        },
      ]
    },
  ],
  '/mobile/': [
    {
      text: 'Guide',
      children: [
        {
          text: '概览',
          link: '/mobile/overview'
        },
      ]
    },
  ],
  '/demand/': [
    {
      text: 'Guide',
      children: [
        {
          text: '模块',
          link: '/demand/module'
        },
      ]
    },
  ],
}

const config = {
  lang: 'zh-CN',
  title: 'Osmanthus Stack',
  description: 'Osmanthus Doc.',
  base: '/',
  srcDir: 'content',
  srcExclude: ['tutorial/**/description.md'],
  outDir: 'dist',
  scrollOffset: 'header',
  lastUpdated: true,
  themeConfig: {
    docsDir: 'content',
    docsBranch: 'main',
    outDir: 'dist',
    nav: nav,
    sidebar: sidebar,
  },
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: 'favicon.png',
        type: 'image/x-icon'
      }
    ]
  ],
  markdown: {
    lineNumbers: false,
    toc: {
      includeLevel: [1, 2]
    },
  },
  vite: {
//    publicDir: 'resources'
  }
}

export default config
