import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const PRODUCT_KEY = "crat_info"
//写入商品数据
function writeLocalStorage(beeCart) {
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(beeCart))
}
//读取商品数据
function readLocalStorage() {
  let str = localStorage.getItem(PRODUCT_KEY)
  return JSON.parse(str || '[]')
}
export default new Vuex.Store({
  //数据
  state: {
    //存储加入购物车的商品
    beeCart: readLocalStorage()
  },
  //操作数据
  mutations: {
    //goods是一个对象 [id：888,count:2,isSelected:true]
    addCart(state, goods) {
      const cunmed = state.beeCart.find(v =>
        v.id === goods.id
      )
      //判断是不是第一次添加商品
      if (cunmed) {
        //是第一次
        cunmed.count = goods.count
      } else {
        //不是
        state.beeCart.push({ ...goods, isSelected: true })
      }
      writeLocalStorage(state.beeCart)
    },
  },
  //计算属性
  getters: {
    //用于计算加入购物车的总数量
    totalCount(state) {
      let sum = 0
      state.beeCart.forEach(v => {
        sum += v.count
      })
      return sum;
    },
    //计算添加商品的id
    getId(state) {
      //获取商品数组用,拼接
      const idList = state.beeCart.map(v => v.id).join(',')
      return idList
    },
    //通过商品id计算商品的数量
    getCount(state) {
      return function (id) {
        return state.beeCart.find(v => v.id === id).count
      }
    }
  }
})