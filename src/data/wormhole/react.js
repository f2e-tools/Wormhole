// React 2
const react = [{
  id: 2,
  name: 'React',
  icon: require('../../assets/icon/react.png'),
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
      active: true,
      popover: {
        tags: ['蚂蚁金服', '企业级'],
        description: '企业级中后台前端/设计解决方案'
      }
    }
  ]
}]
export default react