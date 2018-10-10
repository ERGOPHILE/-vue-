//引用组件
import Header from '../common/Header';
import Footer from '../common/Footer';
export default {
  created() {
    this.getList();
    this.shopList(0, 104751);
  },
  data() {
    return {
      //商品分类信息
      list: [],
      //所有商品信息
      products: [],
      //单个商品信息
      productsList: [],
      //判断哪个高亮
      index: 0,
      // //商品数量
      // num: 0
    }
  },
  methods: {
    //渲染侧边栏商品
    getList() {
      let product_id = this.$store.state.beeCart
      const url = 'http://localhost:3008/list'
      this.jsonp(url, null, (err, data) => {
        if (err) {
          console.log(err)
        } else {
          this.list = data.data.categories
          const products = data.data.products
          for (var key in products) {
            products[key].forEach(v => {
              let id = v.id
              var num = product_id.find(item => item.id === id)
              if (num) {
                v.count = this.$store.getters.getCount(id)
              } else {
                v.count = 0
              }
            })
          }
          this.products = data.data.products
          this.productsList = this.products[104751]
        }
      })
    },
    //渲染侧边栏商品
    shopList(i, id) {
      this.index = i
      this.productsList = this.products[id];
    },
    //获取单个商品id
    getproductId(id) {
      //路由跳转
      this.$router.push(`/goodsinfo/${id}`)
    },
    //添加商品和删除商品的公共方法  通过 this.$options.methods.方法名可以调用同级的方法
    addReduction(id, count, productsList) {
      //过滤出给哪个单个商品添加数量
      productsList.forEach(v => {
        for (const key in v) {
          if (v.product_id === id) {
            v.count = count
            return;
          }
        }
      })
    },
    //减的方法
    Reduction(count, id) {
      // //一般用在鼠标或键盘事件上
      // if (e && e.stopPropagation) {
      //   //W3C取消冒泡事件
      //   e.stopPropagation();
      // } else {
      //   //IE取消冒泡事件
      //   window.event.cancelBubble = true;
      // }
      count--;
      this.$options.methods.addReduction(id, count, this.productsList);
      this.$store.commit('addCart', {
        id,
        count
      })
    },
    //添加商品
    add(count, id) {
      count++;
      this.$options.methods.addReduction(id, count, this.productsList);
      this.$store.commit('addCart', {
        id,
        count
      })
    },

  },
  //定义为组件
  components: {
    Header,
    Footer
  }
}