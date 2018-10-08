//引用组件
import Header from '../common/Header';
import Footer from '../common/Footer';
export default {
  created() {
    this.getList();
    this.shopList(104751);
  },
  data() {
    return {
      //商品分类信息
      list: [],
      //所有商品信息
      products: [],
      //单个商品信息
      productsList: []
    }
  },
  methods: {
    //渲染侧边栏商品
    getList() {
      const url = 'http://localhost:3008/list'
      this.jsonp(url, null, (err, data) => {
        if (err) {
          console.log(err)
        } else {
          this.list = data.data.categories
          this.products = data.data.products
          this.productsList = this.products[104751];
          console.log(this.productsList);
          console.log(data)
          console.log(this.list)
          console.log(this.products)

        }
      })
    },
    //渲染侧边栏商品
    shopList(id) {
      this.productsList = this.products[id];
    }

  },
  //定义为组件
  components: {
    Header,
    Footer
  }
}