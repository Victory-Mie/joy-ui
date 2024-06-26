import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Joy UI",
  description: "一个Vue3组件库",
  base:'/joy-ui/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/components/button' }
    ],

    sidebar: {
      "/guide/":[
        {
        text: '基础',
        items: [
          { text: '安装', link: '/guide/installation' },
          { text: '快速开始', link: '/guide/quickStart' }
        ]
      }],
      "/components/":[
        {
          text: '基础组件',
          items: [
            { text: 'button 按钮', link: '/components/button' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Victory-Mie/joy-ui.git' }
    ],

  }
})
