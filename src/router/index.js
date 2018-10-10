import Vue from 'vue'
import Router from 'vue-router'

// 导入 首页组件（注意，不要添加 .vue 后缀）
import List from '@/components/list/List'
import Goodsinfo from '@/components/goodsinfo/Goodsinfo'
import Cart from '@/components/cart/Cart'
Vue.use(Router)

export default new Router({
  routes: [
    //重定向
    { path: '/', redirect: '/list' },
    {
      path: '/list', component: List,
      meta: {
        name: "viewport",
        content: "width=device-width,initial-scale=1.0"
      }
    },
    { path: '/goodsinfo/:id?', component: Goodsinfo },
    { path: '/cart', component: Cart }

  ]
})
