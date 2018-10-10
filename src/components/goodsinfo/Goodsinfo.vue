<template>
    <div class="app">
        <header>
            <a href="javascript:history.go(-1)"></a>
            <h1>{{productList.name}}{{productList.specifics}}</h1>
        </header>
        <div class="center">
            <nav>
                <img :src="productList.img" alt="">
                <p class="name">{{productList.name}}{{productList.specifics}}</p>
                <p class="price">￥<span>{{productList.price}}</span></p>
            </nav>
            <section>
                <div class="shop_text">
                    <p class="title">
                        <span class="border title_s1"></span>
                        <span class="title_s2">. 商品详情 .</span>
                        <span class="border title_s3"></span>
                    </p>
                    <p>
                        <span class="s_left">品中中牌</span>
                        <span class="p_name">{{productList.brand_name}}</span>
                    </p>
                    <p>
                        <span class="s_left">产品规格</span>
                        <span class="p_name">{{productList.specifics}} </span>
                    </p>
                </div>
                <div>
                    <img src="../../assets/img/productDetailDefault.jpg" alt="">
                </div>
            </section>
        </div>
        <footer>
            <div class="f_left">
                <img src="../../assets/img/favor.png" alt="">
                <p>收藏</p>
            </div>
            <div class="f_center">
                <p>添加商品：</p>
            </div>
            <div class="f_right" @click="cart">
                <span class="num">8</span>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    created() {
        this.getHref();
    },
    data() {
        return {
            //单个商品信息product
            productList: ""
        };
    },
    methods: {
        getHref() {
            const id = location.href.split("goodsinfo/")[1];
            const url = "http://localhost:3008/list";
            this.jsonp(url, null, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    const products = data.data.products;
                    for (let key in products) {
                        this.productList = products[key].filter(v => {
                            return v.product_id === id;
                        });
                    }

                    this.productList = this.productList[0];
                    console.log(this.productList);
                }
            });
        },
        //跳转到购物车
         cart() {
            //路由跳转
            this.$router.push(`/cart`);
        }
    }
};
</script>

<style scoped>
html,
body,
.app {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
header,
.center,
footer {
    width: 100%;
    position: absolute;
}
header {
    width: 100%;
    top: 0;
    padding-left: 50px;
    box-sizing: content-box;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
}
header h1 {
    width: 100%;
    height: 100px;
    color: #333;
    font-size: 30px;
    text-align: center;
    line-height: 100px;
}
header a {
    display: block;
    position: absolute;
    width: 55px;
    height: 55px;
    background-image: url("../../assets/img/icon-back.png");
    background-size: 55px 55px;
    top: 25px;
    left: 10px;
}
.center {
    overflow: auto;
    top: 102px;
    bottom: 100px;
}
.center::-webkit-scrollbar {
    width: 0;
}
nav {
    text-align: center;
    width: 100%;
    height: 700px;
    position: static;
}
nav img {
    height: 600px;
}
nav .name {
    font-size: 30px;
    font-weight: 900;
}
nav .price {
    font-size: 25px;
    font-weight: 700;
    color: #f40;
}
section img {
    width: 100%;
}
.shop_text {
    width: 100%;
    height: 240px;
    border-top: 8px solid #ccc;
    border-bottom: 8px solid #ccc;
    font-size: 25px;
    padding: 25px;
}
.shop_text p {
    height: 60px;
}
.shop_text p .p_name {
    margin-left: 50px;
}
.shop_text .title {
    width: 20%;
    color: #e0bd6a;
    display: flex;
    margin: 0 auto;
    position: relative;
}
.shop_text .title span {
    display: block;
    position: absolute;
}
.shop_text .title .border {
    width: 100px;
    height: 1px;
    box-sizing: content-box;
    border-bottom: 1px solid #e0bd6a;
    top: 18px;
}
.shop_text .title .title_s2 {
    left: 120px;
}
.shop_text .title .title_s3 {
    left: 260px;
}
.shop_text p .s_left {
    color: #848c99;
}
footer {
    height: 100px;
    bottom: 0;
    display: flex;
    padding: 15px;
    border-top: 1px solid #ccc;
}
footer div {
    position: absolute;
}
footer .f_left img {
    width: 50px;
    height: 50px;
}
footer .f_center {
    left: 100px;
    top: 50px;
}
footer .f_right {
    width: 115px;
    height: 115px;
    right: 70px;
    top: -20px;
    background-color: #ffd600;
    border-radius: 50%;
    line-height: 250px;
    background-image: url("../../assets/img/cart-btn.png");
    background-origin: content-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80px 80px;
    border-top: 1px solid #ccc;
}
footer .f_right .num {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    right: -5px;
    top: -5px;
    background-color: #f40;
    color: #fff;
    text-align: center;
    line-height: 50px;
}
</style>
