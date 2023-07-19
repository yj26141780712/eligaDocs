import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "开发文档",
  description: "Eliga开发文档描述",
  base: '/eligaDocs/', // 这是部署到github相关的配置 下面会讲
  locales: {
    root: { label: '简体中文' },
    en: { label: 'English', link: 'https://cn.vitejs.dev1' },
  },
  themeConfig: {
    logo: '/images/eliga.png',
    nav: nav(),
    sidebar: sidebar(),
    editLink: {
      pattern: 'https://github.com/yj26141780712/eligaDocs/edit/master/:path',
      text: '为此页提供修改建议',
    },
    outline: {
      label: '本页目录'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: 'D18V0PRXRE',
        apiKey: 'd8fa119ae988781ae67a9970add944ee',
        indexName: 'eliga',
        // searchParameters: {
        //   facetFilters: ['tags:cn']
        // },
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存到搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索供应商'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为这个查询应该有结果？',
              reportMissingResultsLinkText: '向我们反馈'
            }
          }
        },
      },
    }
  },
})

function nav() {
  return [
    { text: '第三方对接', link: '/third/token', activeMatch: '/third/' },
  ]
}

function sidebar() {
  return {
    '/third/': [
      {
        text: '从Pamfa系统获取数据',
        collapsed: false,
        items: [
          { text: '获取token', link: '/third/token' },
          { text: '获取设备数据', link: '/third/deviceData' },
          { text: '设备训练数据结构', link: '/third/deviceDataJson' },
          { text: '设备测试数据结构', link: '/third/deviceTestDataJson' }
        ],
      },
      {
        text: '第三方系统接入设备',
        // collapsed: false,
        link: '/third/deviceToThird.md'
        // items: [
        //   { text: '', link: '/third/deviceToThird.md' },
        // ]
      }
    ]
  }
}
