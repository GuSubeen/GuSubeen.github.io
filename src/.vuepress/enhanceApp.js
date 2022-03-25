/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.

// 전체 post의 comment 동일 문제점
// https://62che.com/blog/vuepress/ 참고 -- 해결안됨
// router.afterEach((to, from) => {
//   if (from.path !== to.path) {
//     if (typeof window !== 'undefined' && window.Comment) {
//       setTimeout(() => {
//         console.log('Comment is exists and try to load!')
//         window.Comment.reset({ reload: true })
//       }, 0)
//     }
//   } else {
//     // same page but hash changed
//   }
// })

}

  
