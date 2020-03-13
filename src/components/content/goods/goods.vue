<template>
    <div id="goods">
      <div class="goodsItem" v-for="item in goodsList" @click="click">
        <img class="img1" :src="item.img1" @load="imgLoad">
        <div>
          <span class="span1">{{item.description}}</span>
          <div>
            <span class="span2">{{item.price}}</span>
            <img class="img2" :src="item.img2">
            <span class="span3">{{item.count}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "goods",
      props:{
        goodsList:{
          type:Array,
          default:[]
        }
      },
      methods:{
        imgLoad(){
          this.$store.commit("check2")
        },
        click(){
          let path=this.$route.path
          this.$router.push(path+"/123")
        }
      }
    }
</script>

<style scoped>
  #goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  #goods .goodsItem{
    width: 48%;
    padding-bottom: 5px;

  }
  #goods .goodsItem .img1{
    width: 100%;
    height: auto;
    border-radius: 3px;

  }
  #goods .goodsItem div .span1{
    display: block;
    width: 100%;
    height: 20px;
    padding: 2px 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    font-size: 14px;
  }
  #goods .goodsItem div div{
    text-align: center;
  }
  #goods .goodsItem div div .span2{
    color: orangered;
  }
  #goods .goodsItem div .img2{
    width: 16px;
    height: 16px;
    vertical-align: -2px;
  }
  #goods .goodsItem div div .span3{

  }


</style>
