<template>
    <footer class="footer">
        <ul>
            <li>
                <router-link class="menu menu_list" to="/list">首页</router-link>
            </li>
            <li>
                <router-link class="menu menu_supermarket" to="/list">闪送超市</router-link>
            </li>
            <li>
                <router-link class="menu menu_cart" to="/cart">购物车 <span class="count">{{$store.getters.totalCount}}</span></router-link>
            </li>
            <li>
                <router-link class="menu menu_my" to="/list">我的</router-link>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        };
    },
    created() {
        this.updateCount();
    },
    methods: {
        updateCount() {
            const count = this.$store.state.beeCart;
        }
    }
};
</script>

<style>
.footer {
    width: 100%;
    height: 100px;
    bottom: 0;
    position: fixed;
    z-index: 999;
}
.footer ul {
    width: 100%;
    height: 100%;
    display: flex;
    list-style: none;
}
.footer ul li {
    width: 25%;
    height: 100%;
}
.footer ul li .menu {
    background-color: rgba(246, 246, 246, 0.95);
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    text-align: center;
    line-height: 55px;
    font-size: 18px;
    color: #777;
    padding-top: 50px;
    background-repeat: no-repeat;
    background-position: center 15px;
    background-size: auto 46px;
}
.menu_list {
    background-image: url("../../assets/img/menu-icon/navs-item-home.png");
}
.menu_supermarket {
    background-image: url("../../assets/img/menu-icon/navs-item-menu-active.png");
}
.menu_cart {
    background-image: url("../../assets/img/menu-icon/navs-item-cart.png");
    position: relative;
}
.menu_cart .count {
    background-color: #f40;
    color: #fff;
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 50%;
    line-height: 40px;
    position: absolute;
    top: 0;
    left: 54%;
}
.menu_my {
    background-image: url("../../assets/img/menu-icon/navs-item-mine.png");
}
</style>
