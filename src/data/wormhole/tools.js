// 在线工具库 8
const tools = [
  {
    id: 8,
    name: '在线工具库',
    icon: require('../../assets/icon/tool.png'),
    child: [
      {
        id: 1,
        name: 'Tinypng 图片压缩',
        link: 'https://tinypng.com/',
        active: true,
        popover: {
          tags: ['图片压缩', '免费']
        }
      },
      {
        id: 2,
        name: 'uTools',
        link: 'https://u.tools/'
      },
      {
        id: 4,
        name: 'carbon',
        link:
          'https://carbon.now.sh/?bg=rgba(171,%20184,%20195,%201)&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=48px&ph=32px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&ts=false'
      },
      {
        id: 5,
        name: '草料二维码',
        link: 'https://cli.im/'
      },
      {
        id: 6,
        name: 'RGB 转换工具',
        link: 'http://www.yuangongju.com/color'
      },
      {
        id: 7,
        name: 'RGB 颜色对照标',
        link: 'http://tool.oschina.net/commons?type=3'
      },
      {
        id: 8,
        name: '图片转 Base64',
        link: 'http://imgbase64.duoshitong.com/'
      },
      {
        id: 9,
        name: 'cdnjs',
        link: 'https://cdnjs.com/'
      },
      {
        id: 10,
        name: '免费 CDN 加速服务',
        link: 'https://www.bootcdn.cn/'
      },
      {
        id: 11,
        name: 'Can I use',
        link: 'https://caniuse.com/',
        popover: {
          description: '兼容性查询'
        }
      },
      {
        id: 12,
        name: 'Emoji Searcher',
        link: 'https://emoji.muan.co/'
      }
    ]
  }
]
export default tools
