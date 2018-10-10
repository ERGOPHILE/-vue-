// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import jsonp from 'jsonp'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
//定义为全局
Vue.prototype.$http = axios
Vue.prototype.jsonp = jsonp
//判断窗口变化
// window.onresize = setHtmlFontSize;
// function setHtmlFontSize() {
//   const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//   const htmlDom = document.getElementsByTagName('html')[0];
//   htmlDom.style.fontSize = htmlWidth / 10 + 'px';
// };
// setHtmlFontSize();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//导入vuex
  components: { App },
  template: '<App/>'
})
