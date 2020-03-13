<template>
    <div id="detail">
      <detaildirection class="detaildirection"></detaildirection>
      <scroll class="scroll"><swipe ref="swipe" width="100%" height="150px" color="blue" :img-list="list1" :link-list="list2" ></swipe>
        <infomation1></infomation1>
        <infomation2></infomation2>
        <infomation3></infomation3>
      </scroll>
      <nav-bar class="nav"></nav-bar>
    </div>
</template>

<script>
  import detaildirection from "./childrencompents/detaildirection";
  import infomation1 from "./childrencompents/infomation1";
  import infomation2 from "./childrencompents/infomation2";
  import infomation3 from "./childrencompents/infomation3";
  import navBar from "./childrencompents/navBar";

  import swipe from "../../components/comment/swiper/swipe";
  import scroll from "../../components/comment/scroll/scroll";
    export default {
      name: "detail",
      components:{
        infomation2, detaildirection,swipe,infomation1,infomation2,infomation3,scroll,navBar
      },
      data(){
        return{
          list1:["../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png"],
          list2:["http://baidu.com","http://baidu.com","http://baidu.com","http://baidu.com"],
        }
      }
    }
</script>

<style scoped>
#detail{
  position: relative;
  top: 44px;
  z-index: 10;
  background-color: white;
}
  .detaildirection{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  #detail .scroll{
    height: 400px;
    overflow: hidden;
  }
  #detail .nav{
    position: fixed;
    bottom: 0px;
  }
</style>
