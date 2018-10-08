import Vue from 'vue'
import Router from 'vue-router'

// 导入 首页组件（注意，不要添加 .vue 后缀）
import List from '@/components/list/List'
Vue.use(Router)

export default new Router({
  routes: [
    //重定向
    { path: '/', redirect: '/list' },
    { path: '/list', component: List }
  ]
})
