// @ts-check
const pkg = require('../package.json')

const Docs = [
  {
    text: '시작',
    link: '/doc/'
  },
  {
    text: '설치',
    link: '/doc/install'
  },
  {
    text: '사용하기',
    link: '/doc/usage'
  }
]
const Melons = [
  {
    text: '플레이리스트 옮기기',
    link: '/melon/playlist'
  },
  {
    text: '좋아요 리스트 옮기기',
    link: '/melon/liked'
  }
]

const Genies = [
  {
    text: 'URL 아이디 확인',
    link: '/genie/'
  },
  {
    text: '플레이리스트 옮기기',
    link: '/genie/playlist'
  },
  {
    text: '좋아요 리스트 옮기기',
    link: '/genie/liked'
  }
]

const sidebar = [
  {
    text: 'To Spotify',
    children: Docs,
    items: Docs
  },
  {
    text: 'Melon',
    children: Melons,
    items: Melons
  },
  {
    text: 'Genie',
    children: Genies,
    items: Genies
  }
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: pkg.displayName,
  description: pkg.description,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'author', content: 'Seonglae Cho' }],
    ['meta', { property: 'og:title', content: 'Vitepress' }],
    ['meta', { property: 'og:image', content: `${pkg.homepage}/og-image.png` }],
    ['meta', { property: 'og:description', content: pkg.description }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@SeonglaeC' }],
    [
      'meta',
      { name: 'twitter:image', content: `${pkg.homepage}/og-image.png` }
    ],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    [
      'link',
      {
        rel: 'preconnect',
        crossorigin: 'anonymous',
        href: 'https://fonts.gstatic.com'
      }
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600',
        rel: 'stylesheet'
      }
    ]
  ],
  themeConfig: {
    repo: 'seonglae/to-spotify-docs',
    logo: '/logo.svg',
    docsBranch: 'release',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',
    nav: sidebar,
    sidebar
  }
}
