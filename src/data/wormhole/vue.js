// VueJS 1
const vue = [{
  id: 1,
  name: 'VueJS',
  icon: require('../../assets/icon/vuejs.png'),
  child: [
    {
      id: 1,
      name: 'Vue.js 文档',
      link: 'https://cn.vuejs.org/'
    }, {
      id: 2,
      name: 'Vue CLI 文档',
      link: 'https://cli.vuejs.org/'
    }, {
      id: 3,
      name: 'VeeValidate',
      link: 'https://baianat.github.io/vee-validate/guide/',
      popover: {
        tags: ['表单验证'],
        visible: false
      }
    }, {
      id: 4,
      name: 'Vuei18n 国际化方案',
      link: 'https://github.com/kazupon/vue-i18n',
      popover: {
        tags: ['国际化'],
        visible: false
      }
    }, {
      id: 5,
      name: 'VuePress 静态网站生成器',
      link: 'https://vuepress.vuejs.org/zh/guide/'
    }, {
      id: 6,
      name: 'Vue 技术内幕',
      link: 'http://hcysun.me/vue-design/art/',
      active: true,
      popover: {
        tags: ['国际化', 'Vue', '中文'],
        description: '很用心的 Vue 中文教程，版本可能有点出入。',
        visible: false
      }
    }, {
      id: 7,
      name: 'Nuxt.js',
      link: 'https://zh.nuxtjs.org/guide',
      popover: {
        description: '利用Vue.js开发服务端渲染的应用',
        visible: false
      }
    }
  ]
}]
export default vue
