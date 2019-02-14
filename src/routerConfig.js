// 以下文件格式是描述路由的协议格式
// 布局
import HeaderAsideLayout from './layouts/HeaderAsideLayout'
import EmptyLayout from './layouts/EmptyLayout'
// 页面
import Apple from './views/Apple'
// 404
import NotFound from './views/NotFound'
const routeConfig = [
  {
    path: '/',
    layout: HeaderAsideLayout,
    component: Apple,
    name: 'fruit',
    children: [
      {
        path: '/fruit/apple',
        layout: HeaderAsideLayout,
        component: Apple,
        name: 'apple'
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