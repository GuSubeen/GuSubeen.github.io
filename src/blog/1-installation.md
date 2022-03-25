# Vupress 시작하기

## Vuepress란?
Vuepress란 "Vue를 기반으로 하는 정적 사이트 생성기"이다.

### 정적사이트(Static Site)
정적사이트(Static Site)란 HTML, CSS, Javascript만 사용하여 만들어지며 Server Side에서 DB를 처리하거나 Request로 Data를 받아서 처리하는 것이 아니므로 작성/수정/삭제 등은 불가능하며 페이지를 조회하는 것만 가능하다.  
대표적인 정적사이트로 `Github Page`가 있으며 Github Page는 github에 올라온 파일(HTML, CSS, Javascript)을 기반으로 작동한다.  


### 정적사이트 생성기(Static Site Generator)
정적사이드 생성기는 정적 사이트를 만들어주는 도구 or 프레임워크로, 대표적인 SSG로는 Ruby 기반의 `Jekyll`과 Go 기반의 `Hugo` 등이 있다. Vuepress 또한 Vue 기반의 SSG이다. 

정적사이트 & SSG 내용 출처: [개발자 황준일님의 TIL 블로그](https://junilhwang.github.io/TIL/Vuepress/Starter/#%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%A8-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3-static-site)  

## Vuepress 설치하기
Vuepress를 시작하려면 사전에 npm(or yarn)을 설치해야 한다.  
필자는 npm을 이용해 yarn을 설치하였다.

### yarn 설치하기
1. 파워쉘에서 아래의 코드를 입력한다.
```Bash
$ npm -v                # npm이 설치되어 있는지 확인
$ npm install -g yarn   # yarn 설치
$ yarn -v               # yarn이 잘 설치되었나 확인
```

2. Myblog라는 이름의 폴더를 생성하여 폴더에서 터미널을 열어 yarn init 명령어를 입력한다.
```Bash
$ yarn init
```

### Vuepress Quick start 방식으로 프로젝트 생성 
create-vuepress-site generator를 사용해 프로젝트를 생성한다. 이 패키지는 vuepress site에 필요한 기본 디렉토리 및 파일들을 생성한다.  
```Bash
$ yarn create vuepress-site [optionalDirectoryName]
```
명령을 실행하고 vuepress site의 metatdata를 입력하면 프로젝트가 완성된다.
이때, DirectoryName을 입력하지 않으면 docs로 기본생성된다.

```bash
project name
description
maintainer email
maintainer name
repository url
```

### package.json 파일에 scripts 추가

```json{12,13,14}
{
  "name": "practice_Vuepress",
  "homepage": ".",
  "version": "0.0.1",
  "description": "Vuepress 블로그 생성을 위한 샘플입니다.",
  "main": "index.js",
  "authors": {
    "name": "subeen",
    "email": "rntnqls9@naver.com"
  },
  "repository": "/GuSubeen.github.io/",
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src",
    "deploy": "bash deploy.sh",
    "eject": "vuepress eject"
  },
  "license": "MIT",
  "devDependencies": {
    "@vuepress/plugin-back-to-top": "^1.9.7",
    "@vuepress/plugin-last-updated": "^1.9.7",
    "@vuepress/theme-default": "^1.9.7",
    "vuepress": "^1.5.3",
    "vuepress-plugin-authors": "^0.0.2",
    "vuepress-plugin-fulltext-search": "^2.2.1"
  },
  "dependencies": {
    "next-redux-wrapper": "^7.0.5"
  }
}

```

### 디렉토리 구조
```
docs ├── package.json 
└── src 
├── .vuepress 
│ ├── components (Optional) 
│ ├── theme (Optional) 
│ │ └── Layout.vue 
│ ├── public (Optional) 
│ ├── styles (Optional) 
│ │ ├── index.styl 
│ │ └── palette.styl 
│ ├── templates (Optional, Danger Zone) 
│ │ ├── dev.html 
│ │ └── ssr.html 
│ ├── config.js (Optional) 
│ └── enhanceApp.js (Optional) 
├── config 
│ └── README.md 
├── guide 
│ ├── README.md 
│ └── using-vue.md 
└── index.md
```

### 실행 및 빌드
- 개발모드로 실행
```bash
cd docs
yarn install
yarn dev
```

- 빌드(Build)  
build와 deploy는 다음 포스트에 자세히 설명한다.
```bash
cd docs
yarn build
```
빌드를 하면 dist폴더가 갱신되며 이를 github에 올려 블로그를 생성한다.

## default-theme 설치
- default-theme 패키지를 설치한다.  
- .vuepress 밑에 theme 폴더를 만들고 index.js를 만들어 다음과 같이 작성한다. 
```js
// .vuepress/theme/index.js
module.exports = {
    extend: '@vuepress/theme-default'
};
```
.vuepress 밑에 theme폴더를 만들어 필요한 폴더와 파일을 작성하면 자동으로 덮어씌워진다.

:::warning
모든 폴더에는 README.md가 존재해야 한다. 없으면 아래와같이 404에러 발생한다.
:::
![](/images/noreadme.png)

<br><br>

### 출처
---
- [vuepress.org](https://vuepress.vuejs.org/guide/getting-started.html#prerequisites)  
- [개발자 황준일의 TIL 블로그](https://junilhwang.github.io/TIL/Vuepress/Starter/#%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A5%E1%86%A8-%E1%84%89%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3-dynamic-site)  
- [날마다 새롭게 또 날마다 새롭게_아무유님 블로그](https://muyu.tistory.com/entry/Vuepress-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0)  