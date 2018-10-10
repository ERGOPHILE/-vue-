<template>
  <div>
    <Header></Header>
    <div class="shop">
      <ul>
        <li v-for="v in product" :key="v.id" @click="getproductId(v.product_id)" v-show="v.count">
          <div class="shop_list">
            <img :src="v.img" width="55" height="55" alt="">
            <p class="shop_name">{{v.name}}</p>
            <p>{{v.specifics}}</p>
            <p><span class="price">￥{{v.price}}</span><s>￥{{v.partner_price}}</s></p>
          </div>
          <div class="add">
            <span class="btn" @click.stop="Reduction(v.count,v.id)" v-show="v.count">-</span>
            <span class="num" v-show="v.count">{{v.count}}</span>
            <span class="btn" @click.stop="add(v.count,v.id)">+</span>
          </div>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../common/Header";
import Footer from "../common/Footer";
export default {
    data() {
        return {
            product: []
        };
    },
    created() {
        this.productList();
    },
    methods: {
        async productList() {
            const ids = this.$store.getters.getId;
              if(ids){
                   const res = await this.$http.get(
                `/api/home?_r=${Math.random()}&cart_pids=${encodeURIComponent(
                    ids
                )}&location=121.5721941391567%2C31.21168025925351`
            );
            const product = res.data.data.cart_ids;
            product.forEach(v=>{
               v.count = this.$store.getters.getCount(v.id)
            })
            this.product = product
              }
        },
        //添加商品和删除商品的公共方法  通过 this.$options.methods.方法名可以调用同级的方法
        addReduction(id, count, product) {
            //过滤出给哪个单个商品添加数量
            product.forEach(v => {
                for (const key in v) {
                    if (v.product_id === id) {
                        v.count = count;
                        return;
                    }
                }
            });
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
            this.$options.methods.addReduction(id, count, this.product);
            this.$store.commit("addCart", {
                id,
                count
            });
        },
        //添加商品
        add(count, id) {
            count++;
            this.$options.methods.addReduction(id, count, this.product);
            this.$store.commit("addCart", {
                id,
                count
            });
        },
        //获取单个商品id
        getproductId(id) {
            //路由跳转
            this.$router.push(`/goodsinfo/${id}`);
        }
    },
    //定义为组件
    components: {
        Header,
        Footer
    }
};
</script>

<style scoped>
.shop {
    width: 100%;
    height: 100%;
    overflow: auto;
    cursor: pointer;
    position: absolute;
    top: 110px;
    bottom: 100px;
}
.shop::-webkit-scrollbar {
    width: 0px;
}
.shop li {
    width: 100%;
    height: 150px;
    border-top: 1px solid #ccc;
    padding: 35px;
    font-size: 25px;
    display: flex;
}
.shop li .shop_list {
    width: 100%;
    height: 100%;
}
.shop li img {
    float: left;
    margin-right: 20px;
}
.shop li .shop_name {
    color: black;
    font-size: 30px;
    margin-bottom: 20px;
}
.shop li .price {
    font-weight: 900;
    color: red;
}
.shop li .add {
    width: 200px;
    height: 100px;
    display: flex;
    margin-right: 40px;
    position: relative;
    padding-top: 100px;
}
.shop li .add span {
    display: block;
}
.shop li .add .btn {
    color: #ff4300;
    width: 45px;
    height: 45px;
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    border-radius: 50%;
    font-weight: 900;
    border: 2px solid #ff4300;
}
.shop li .add .num {
    margin: 10px 20px;
}
</style>
