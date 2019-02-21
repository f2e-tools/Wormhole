// 以下文件格式是描述路由的协议格式
// 布局
import HeaderAsideLayout from './layouts/HeaderAsideLayout'
import EmptyLayout from './layouts/EmptyLayout'
// 页面
// import Main from './views/Main'
const Main = () => import(/* webpackChunkName: "Main" */'./views/Main')
// 404
// import NotFound from './views/NotFound'
const NotFound = () => import(/* webpackChunkName: "NotFound" */'./views/NotFound')
const routeConfig = [
  {
    path: '/',
    layout: HeaderAsideLayout,
    component: Main,
    name: 'fruit',
    children: [
      {
        path: '/wormhole/main',
        layout: HeaderAsideLayout,
        component: Main,
        name: 'main'
      }
    ]
  },
  {
    path: '*',
    layout: EmptyLayout,
    component: NotFound,
  }
]

export default routeConfig