// 知识整理 7
const knowledge = [{
  id: 7,
  name: '知识整理',
  icon: require('../../assets/icon/zhishi.png'),
  child: [
    {
      id: 1,
      name: 'Tower',
      link: 'https://tower.im/users/sign_in'
    }, {
      id: 2,
      name: 'Trello',
      link: 'https://trello.com/',
      active: true,
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
}]
export default knowledge