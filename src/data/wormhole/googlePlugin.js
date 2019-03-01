const googlePlugin = [{
  id: 11,
  name: 'Google 插件',
  icon: require('../../assets/icon/google.png'),
  child: [
    {
      id: 1,
      name: '划词翻译',
      link: 'https://chrome.google.com/webstore/detail/chazd/nkiipedegbhbjmajlhpegcpcaacbfggp'
    },
    {
      id: 2,
      name: 'Lighthouse',
      link: 'https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk/related',
      popover: {
        tags: ['页面级别', '性能测试'],
        description: '页面性能分析'
      }
    },
    {
      id: 3,
      name: '掘金',
      link: 'https://chrome.google.com/webstore/detail/%E6%8E%98%E9%87%91/lecdifefmmfjnjjinhaennhdlmcaeeeb?hl=zh-CN'
    },
    {
      id: 4,
      name: 'LastPass 密码管理器',
      link: 'https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd?hl=zh-CN',
      poopver: {
        tags: ['免费', '密码管理器'],
        description: 'LastPass,屡获殊荣的密码管理器,保存你的密码,让你安全访问任何计算机和移动设备。'
      }
    },
    {
      id: 5,
      name: 'Octotree',
      link: 'https://chrome.google.com/webstore/detail/octotree/bkhaagjahfmjljalopjnoealnfndnagc?hl=zh-CN',
      popover: {
        description: 'Code tree for GitHub'
      }
    },
    {
      id: 6,
      name: 'Smart TOC',
      link: 'https://chrome.google.com/webstore/detail/smart-toc/lifgeihcfpkmmlfjbailfpfhbahhibba?hl=zh-CN'
    },
    {
      id: 7,
      name: '极简 Json 格式化',
      link: 'https://chrome.google.com/webstore/detail/%E6%9E%81%E7%AE%80-json-%E6%A0%BC%E5%BC%8F%E5%8C%96/fhlnfdmpnhhakjljpllkigcegcejpoec?hl=zh-CN',
      popover: {
        description: '一个非常简单的 Chrome 插件，用于将 JSON 接口返回值格式化成可读方式，并且可以点击图标关闭插件，保证最低资源占用。'
      }
    }
  ]
}]

export default googlePlugin