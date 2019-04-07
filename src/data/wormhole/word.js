// 文档工具
const word = [
  {
    id: 11,
    name: '文档工具',
    icon: require('@/assets/wordtool.png'),
    child: [
      {
        id: 1,
        name: '语雀（文档知识库）',
        link: 'https://www.yuque.com/dashboard',
        active: true,
        popover: {
          tags: ['蚂蚁金服', '轻灵美观'],
          description: '知识创作与分享工具'
        }
      },
      {
        id: 2,
        name: '腾讯文档',
        link: 'https://docs.qq.com/desktop/'
      },
      {
        id: 3,
        name: '石墨文档',
        link: 'https://shimo.im/desktop'
      },
      {
        id: 4,
        name: '腾讯问卷',
        link: 'https://wj.qq.com/',
        active: true,
        popover: {
          tags: ['免费', '问卷调查']
        }
      },
      {
        id: 5,
        name: '幕布',
        link: 'ttps://mubu.com/list'
      },
      {
        id: 6,
        name: 'Tapd',
        link: 'https://www.tapd.cn/my_worktable?left_tree=1'
      }
    ]
  }
];

export default word;
