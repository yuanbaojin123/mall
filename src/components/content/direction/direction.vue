<template>
    <div id="direction" :style="'background-color:'+color">
      <div class="item1" :style="'background-color:'+color1"><slot name="left"></slot></div>
      <div class="item2" :style="'background-color:'+color2"><slot name="center"></slot></div>
      <div class="item3" :style="'background-color:'+color3"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
      name: "direction",
      props:{
        color:{
          type:String,
          default:""
        } ,
         color1:{
           type:String,
           default:""
         } ,
        color2:{
          type:String,
          default:""
        } ,
        color3:{
          type:String,
          default:""
        } ,

      }
    }
</script>

<style scoped>
#direction{
  width: 100%;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 16px;
  box-shadow: 0px 1px 1px rgba(100,100,100,.1);
}
#direction .item1{
  width: 60px;
}
#direction .item2{
flex-grow: 1;
}
#direction .item3{
width: 60px;
}
#direction div{
  overflow: hidden;
}
</style>
