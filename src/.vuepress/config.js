const { description } = require('../../package')

module.exports = {
  base: '/' ,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'MY Blog', //사이트 타이틀
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/images/mydog.jpg', // /images/이미지.확장자 + 이미지는 public->images안에 있어야함.
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    // 메뉴바 만들기
    nav: [
      {
        text: '가이드',
        link: '/guide/',
      },
      {
        text: '게시판',
        link: '/guest/',
      },
      {
        text: '블로그',
        link: '/blog/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: '깃허브',
        link: 'https://github.com/GuSubeen/GuSubeen.github.io'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    // 사이드바 만들기
    sidebar: {
      '/guide/': [
        {
          title: '가이드',
          collapsable: false, // 메뉴 접기, 펴기
          children: [
            '', // guide의 readme파일에 연결됨.
            'using-vue',
          ]
        }
      ],
      '/blog/': [
        {
          title: '한글 입숨로렘',
          collapsable: true, 
          //children에 readme 파일을 넣지 않으면 사이드바에는 만들어지지 않고 블로그 메뉴 누르면 디폴트로 나타남
          //readme 파일에 블로그 메뉴의 개요 적어놓고 링크 걸어놓으면 깔끔할듯.
          children: [ 
            'exam1', 'exam2', 'exam3', 'exam4'
          ]
        },
        {
          title: '입숨로렘',
          collapsable: true, 
          children: ['example-1', 'example-2', 'example-3', 'example-4']
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    // 검색 범위 확장(페이지 제목, 헤더 -> 내용도!)
    // 'fulltext-search',
    '@vuepress/back-to-top', //맨위로 버튼
    '@vuepress/plugin-medium-zoom',
    '@vuepress/last-updated' // 마지막 수정일 기재
  ]
}
