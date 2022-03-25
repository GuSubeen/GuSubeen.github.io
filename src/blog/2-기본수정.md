# 기본레이아웃 수정하기

## logo 추가
- 사용할 이미지는 .vuepress 안에 public/images 폴더를 만든 후 이곳에 저장한다.
- 이미지의 상대경로는 `/images/img-name.확장자`이며 config.js의 logo에 추가한다.
```js{4}
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/images/mydog.jpg',

}  
```
- ***블로그 생성 후 css error 발생하는 경우***   
```js
// .vuepress/config.js
module.exports = {
  base: '/' // baseurl을 root로 지정한다.
}  
```  

## Nav 항목 추가
상단의 네비게이션 항목을 추가하려면 .vuepress/config.js 파일의 nav를 활용한다.
```js
module.exports = {
  themeConfig: {
    //...
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
    ]
  }
}
```
## sidebar 항목 추가
왼쪽의 사이드바 항목을 추가하려면 .vuepress/config.js 파일의 sidebar를 활용한다.
```js
module.exports = {
  themeConfig: {
    //...
    sidebar: {
      '/blog/': [
        {
          title: 'Vuepress 시작하기',
          collapsable: true, // sidebar 접기/펴기
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
          collapsable: true, 
          children: ['4-추가작업']
        },
        {
          title: 'Tip',
          collapsable: true, 
          children: []
        }
      ]
    }
  }
}
```

## theme-color 수정
vuepress default-theme의 기본색상은 초록색(#3eaf7c)이다.  
이 색상을 바꾸기 위해서는 .vuepress/styles/palette.styl에서 수정한다.
```styl{1}
$accentColor = #4171f6 
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
```
이곳에서 theme-color 이외의 색상들도 수정할 수 있다.

## 메인화면 수정
메인화면에 위치한 heroimage, 버튼링크, 설명 등은 docs/src/index.md 에서 수정한다.
![](/images/main2.png)

```bash
home: true
heroImage: /images/main_icon.png
tagline: Vuepress 블로그 생성을 위한 샘플입니다.
actionText: 눌러주세요 # Quick Start →
actionLink: /tags/
features:
- title: 안녕하세요! 구수빈입니다. #Feature 1 Title
  details: 아콘소프트에서 근무하고 있습니다. #Feature 1 Description
- title: 샘플블로그 #Feature 2 Title
  details: Vuepress를 이용해 기술블로그를 작성하기 위한 과정을 기록한 블로그입니다. #Feature 2 Description
- title: Vuepress #Feature 3 Title
  details: Vuepress로 작성하였습니다. #Feature 3 Description

footer: Made by subeen with 
```