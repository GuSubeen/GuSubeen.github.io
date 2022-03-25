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
        text: '태그',
        link: '/tags/',
      },
      {
        text: '게시판',
        link: '/notice/',
      },
      {
        text: '블로그',
        link: '/blog/',
      },
      {
        text: '작성자',
        link: '/authors/'
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
      '/blog/': [
        {
          title: 'Vuepress 시작하기',
          collapsable: true, 
          //children에 readme 파일을 넣지 않으면 사이드바에는 만들어지지 않고 블로그 메뉴 누르면 디폴트로 나타남
          //readme 파일에 블로그 메뉴의 개요 적어놓고 링크 걸어놓으면 깔끔할듯.
          children: [ 
            '1-설치','1-깃허브 배포','1-플러그인'
          ]
        },
        {
          title: '레이아웃 수정하기',
          collapsable: true, 
          children: ['2-기본수정', '2-utterance']
        },
        {
          title: '해결할 문제들',
          collapsable: true, 
          children: ['3-문제', '3-해결방안']
        },
        {
          title: '필요한 추가작업',
          children: ['4-추가작업']
        },
        {
          title: 'Tip',
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
    //'@vuepress/plugin-medium-zoom',
    'vuepress-plugin-code-copy', //코드 복사
    '@vuepress/last-updated' // 마지막 수정일 기재
    //'authors'
  ]
}
