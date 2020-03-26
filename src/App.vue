<template>
  <div id="app">
    <keep-alive exclude="detail" >
      <router-view></router-view>
    </keep-alive>
    <tab1>
      <tab2 path="/home" col="red">
      <img slot="im" src="./assets/img/1.png">
      <img slot="imActive" src="./assets/img/2.gif">
      <div slot="text">首页</div>
    </tab2>
      <tab2 path="/cate" col="red">
        <img slot="im" src="./assets/img/1.png">
        <img slot="imActive" src="./assets/img/2.gif">
        <div slot="text">分类</div>
      </tab2>
      <tab2 path="/car" col="red">
        <img slot="im" src="./assets/img/1.png">
        <img slot="imActive" src="./assets/img/2.gif">
        <div slot="text">购物车</div>
      </tab2>
      <tab2 path="/profile" col="red">
        <img slot="im" src="./assets/img/1.png">
        <img slot="imActive" src="./assets/img/2.gif">
        <div slot="text">我的</div>
      </tab2>
    </tab1>
  </div>
</template>

<script>
  import tab1 from "./components/comment/tabbar/tab1";
  import tab2 from "./components/comment/tabbar/tab2";
export default {
  name: 'App',
  components:{
    tab1,tab2
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
