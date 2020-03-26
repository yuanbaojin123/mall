<template>
    <div id="infomation4">
      <div class="title">宝贝详情</div>
      <div class="cen">阿斯蒂芬卡士大夫的说法是肯定会分开水电费爱神的箭合法化水电费</div>
      <div class="center">
        <img v-for="item in imgList" :src="item" @load="load">
      </div>
      <div class="bottom">
        <div class="title">看了又看</div>
        <goods :goods-list="commandList"></goods>
      </div>
    </div>
</template>

<script>
  import goods from "../../../components/content/goods/goods";
    export default {
      name: "infomation4",
      components:{
        goods,
      },
      data(){
        return{
          counts:0,
        }
      },
      props:{
        imgList:{
          type:Array,
          default(){
            return []
          }
        },
        commandList:{
          type:Array,
          default:[]
        }
      },
      methods:{
        load(){
          this.counts++;
          if(this.counts===this.imgList.length){
            this.$emit("endLoad")
          }
        }
      }
    }
</script>

<style scoped>
  #infomation4{
    width: 100%;
  }
#infomation4 img{
  width:100% ;
  height: auto;
  margin: 10px 0px;
}
  #infomation4 .top{
    margin-top: 30px;
  }
  #infomation4 .title{
    margin-bottom:8px;
    text-align: center;
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: red;
  }
</style>
