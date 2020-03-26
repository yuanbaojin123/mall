<template>
    <div id="navBar">
      <div class="left">
        <div class="le">
          <img src="../../../assets/img/1.png">
          <div>客服</div>
        </div>
        <div class="cen">
          <img src="../../../assets/img/2.gif">
          <div>店铺</div>
        </div>
        <div class="ri">
          <img src="../../../assets/img/1.png">
          <div>收藏</div>
        </div>
      </div>
      <div class="right">
        <div @click="click">加入购物车</div>
        <div>购买</div>
      </div>
    </div>
</template>

<script>
  import tab1 from "../../../components/comment/tabbar/tab1";
  import tab2 from "../../../components/comment/tabbar/tab2";
    export default {
      name: "navBar",
      components:{
        tab1,tab2
      },
      methods:{
        click(){
          this.$emit("addToCar")
        }
      }
    }
</script>

<style scoped>
#navBar{
  display: flex;
  width: 100%;
  height: 60px;
  background-color: whitesmoke;
}
#navBar img{
  width: 18px;
  height:18px;
}
  #navBar .left,.right{
    flex-grow: 1;
  }
#navBar .left{
  display: flex;

}
#navBar .right{
  display: flex;
}

  #navBar .left .le,.cen,.ri{
    flex-grow: 1;
    text-align: center;
    font-size: 14px;
    position: relative;
    top: 16px;
  }
#navBar .right div{
  position: relative;
  top: 10px;
  width: 50%;
  font-size: 14px;
  flex-grow: 1;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
#navBar .right div:nth-child(1){
  background-color: yellow;
}
#navBar .right div:nth-child(2){
background-color: orangered;
  color: white;
}
</style>
