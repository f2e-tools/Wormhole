export const wormhole = [
  // VueJS 1
  {
    id: 1,
    name: 'VueJS',
    icon: require('../assets/icon/vuejs.png'),
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
  },
  // React 2
  {
    id: 2,
    name: 'React',
    icon: require('../assets/icon/react.png'),
    child: [
      {
        id: 1,
        name: 'React 中文文档',
        link: 'http://react-china.org/'
      }, {
        id: 2,
        name: 'React Gitbook',
        link: 'https://tyrmars.gitbooks.io/react-steppitguide/More/TOOLS.html'
      }, {
        id: 3,
        name: 'Ant Design Pro',
        link: 'https://pro.ant.design/docs/getting-started-cn',
        popover: {
          tags: ['蚂蚁金服', '企业级'],
          description: '企业级中后台前端/设计解决方案'
        }
      }
    ]
  },
  // NodeJS 3
  {
    id: 3,
    name: 'NodeJS',
    icon: require('../assets/icon/Nodejs.png'),
    child: [
      {
        id: 1,
        name: 'Koa2 进阶学习笔记',
        link: 'https://chenshenhai.github.io/koa2-note/'
      }, {
        id: 2,
        name: 'Egg',
        link: 'https://eggjs.org/zh-cn/'
      }, {
        id: 3,
        name: 'Nodejs 专业中文社区',
        link: 'https://cnodejs.org/'
      }
    ]
  },
  // UI 框架 4
  {
    id: 4,
    name: 'UI 框架',
    icon: require('../assets/icon/ui.png'),
    child: [
      {
        id: 1,
        name: 'Element',
        link: 'http://element-cn.eleme.io/#/zh-CN/',
        popover: {
          tags: ['饿了吗']
        }
      }, {
        id: 2,
        name: 'Mint UI',
        link: 'https://mint-ui.github.io/',
        popover: {
          description: '基于 Vue 的移动端 UI 框架'
        }
      }, {
        id: 3,
        name: 'Ant Design',
        link: 'https://ant.design/docs/react/getting-started-cn'
      }, {
        id: 4,
        name: 'iView',
        link: 'http://v1.iviewui.com/'
      }, {
        id: 5,
        name: 'Foundation',
        link: 'https://github.com/zurb/foundation-sites',
        popover: {
          tags: ['国外', '响应式布局', '移动设备']
        }
      }, {
        id: 6,
        name: 'Layui 模块化前端框架',
        link: 'https://www.layui.com/',
        popover: {
          tags: ['国人', '模块化']
        }
      }, {
        id: 7,
        name: 'Vant Weapp',
        link: 'https://youzan.github.io/vant-weapp/#/intro',
        popover: {
          description: '轻量、可靠的小程序 UI 组件库'
        }
      }, {
        id: 8,
        name: 'WeUI',
        link: 'https://github.com/Tencent/weui'
      }
    ]
  },
  // UI 设计师 5
  {
    id: 5,
    name: 'UI 设计师',
    icon: require('../assets/icon/designer.png'),
    child: [
      {
        id: 1,
        name: 'iconFont 阿里巴巴矢量图标库',
        link: 'https://www.iconfont.cn/'
      }, {
        id: 2,
        name: 'Tailor Brands Studio',
        link: 'https://studio.tailorbrands.com/'
      }, {
        id: 3,
        name: 'Fusion Design',
        link: 'https://fusion.design/'
      }, {
        id: 4,
        name: 'Font Awesome 中文网',
        link: 'http://www.fontawesome.com.cn/'
      }, {
        id: 5,
        name: 'zeplin',
        link: 'https://app.zeplin.io/login'
      }, {
        id: 6,
        name: '牛大师设计导航',
        link: 'http://www.niudana.com/Tag/%E5%9C%A8%E7%BA%BF%E5%B7%A5%E5%85%B7/'
      }, {
        id: 7,
        name: 'Lottie Airbnb',
        link: 'https://fusion.design/'
      }, {
        id: 8,
        name: '蓝湖',
        link: 'https://lanhuapp.com/'
      },
    ]
  },
  // 产品经理 6
  {
    id: 6,
    name: '产品经理',
    icon: require('../assets/icon/PM.png'),
    child: [
      {
        id: 1,
        name: '人人都是产品经理',
        link: 'http://www.woshipm.com/'
      }, {
        id: 2,
        name: 'PMCAFF',
        link: 'https://coffee.pmcaff.com/'
      }, {
        id: 3,
        name: '产品壹佰',
        link: 'http://www.chanpin100.com/'
      }, {
        id: 4,
        name: '产品大牛',
        link: 'http://www.pmdaniu.com/'
      }, {
        id: 5,
        name: '墨刀',
        link: 'https://modao.cc/signin'
      }
    ]
  },
  // 知识整理 7
  {
    id: 7,
    name: '知识整理',
    icon: require('../assets/icon/zhishi.png'),
    child: [
      {
        id: 1,
        name: 'Tower',
        link: 'https://tower.im/users/sign_in'
      }, {
        id: 2,
        name: 'Trello',
        link: 'https://trello.com/',
        popover: {
          tags: ['看板', '进度管理']
        }
      }, {
        id: 3,
        name: '幕布',
        link: 'ttps://mubu.com/list'
      }, {
        id: 4,
        name: 'Tapd',
        link: 'https://www.tapd.cn/my_worktable?left_tree=1'
      }, {
        id: 5,
        name: '有道云笔记',
        link: 'https://note.youdao.com/'
      }, {
        id: 6,
        name: '凹脑图',
        link: 'https://aonaotu.com/home'
      }, {
        id: 7,
        name: 'ProcessOn',
        link: 'https://www.processon.com/',
        popover: {
          tags: ['在线', '流程图']
        }
      }
    ]
  },
  // 在线工具库 8
  {
    id: 8,
    name: '在线工具库',
    icon: require('../assets/icon/tool.png'),
    child: [
      {
        id: 1,
        name: 'Tinypng 图片压缩',
        link: 'https://tinypng.com/',
        popover: {
          tags: ['免费']
        }
      }, {
        id: 2,
        name: 'uTools',
        link: 'https://u.tools/'
      }, {
        id: 3,
        name: '幕布',
        link: 'ttps://mubu.com/list'
      }, {
        id: 4,
        name: 'carbon',
        link: 'https://carbon.now.sh/?bg=rgba(171,%20184,%20195,%201)&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=48px&ph=32px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&ts=false'
      }, {
        id: 5,
        name: '草料二维码',
        link: 'https://cli.im/'
      }, {
        id: 6,
        name: 'RGB 转换工具',
        link: 'http://www.yuangongju.com/color'
      }, {
        id: 7,
        name: 'RGB 颜色对照标',
        link: 'http://tool.oschina.net/commons?type=3'
      }, {
        id: 8,
        name: '图片转 Base64',
        link: 'http://imgbase64.duoshitong.com/'
      }, {
        id: 9,
        name: 'LastPass|密码管理',
        link: 'https://www.lastpass.com/zh'
      }, {
        id: 10,
        name: '免费 CDN 加速服务',
        link: 'https://www.bootcdn.cn/'
      },
    ]
  },
  // 优秀站点 9
  {
    id: 9,
    name: '优秀站点',
    icon: require('../assets/icon/Web.png'),
    child: [
      {
        id: 1,
        name: 'StackoverFlow',
        link: 'https://stackoverflow.com/'
      }, {
        id: 2,
        name: '前端乱端',
        link: 'http://www.html-js.com/'
      }, {
        id: 3,
        name: 'CTOLib 码库',
        link: 'https://www.ctolib.com/'
      }, {
        id: 4,
        name: '张鑫旭',
        link: 'https://www.zhangxinxu.com/'
      }, {
        id: 5,
        name: '美团技术团队',
        link: 'https://tech.meituan.com/'
      }, {
        id: 6,
        name: '搜车大无线团队博客',
        link: 'http://f2e.souche.com/blog/'
      }, {
        id: 7,
        name: '淘宝前端团队',
        link: 'http://taobaofed.org/'
      }, {
        id: 8,
        name: '蚂蚁数据体验技术团队',
        link: 'https://github.com/ProtoTeam/blog'
      }, {
        id: 9,
        name: 'AlloyTeam',
        link: 'http://www.alloyteam.com/'
      }, {
        id: 10,
        name: '奇迹秀',
        link: 'https://www.qijishow.com/'
      },
    ]
  },
  // 刷题网站 10
  {
    id: 10,
    name: '刷题网站',
    icon: require('../assets/icon/question.png'),
    child: [
      {
        id: 1,
        name: '题库 leetcode',
        link: 'https://leetcode-cn.com/'
      }, {
        id: 2,
        name: '一亩三分地',
        link: 'https://instant.1point3acres.com/'
      }, {
        id: 3,
        name: 'lintcode',
        link: 'https://www.lintcode.com/zh-cn/'
      }
    ]
  },
]