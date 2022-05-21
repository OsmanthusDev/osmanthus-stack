
const nav = [
  { text: 'Home', link: '/', activeMatch: '^/$' },
  {
    text: 'Backend',
    link: '/content/backend/',
    activeMatch: '^/backend/'
  },
  {
    text: 'SPA',
    link: '/content/spa/',
    activeMatch: '^/spa/'
  },
  {
    text: 'SSR',
    link: '/content/ssr/',
    activeMatch: '^/ssr/'
  },
  {
    text: 'BFF',
    link: '/content/bff/',
    activeMatch: '^/bff/'
  },
  {
    text: 'VitePress',
    link: 'https://vitepress.vuejs.org/'
  }
]

const sidebar = {

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
