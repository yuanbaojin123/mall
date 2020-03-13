<template>
    <div id="infomation1">
      <div class="item">
        <div class="top">{{text}}</div>
        <div class="center">
          <span class="currentPrice">{{"￥"+currentPrice}}</span>
          <span class="beforePrice">{{"￥"+beforePrice}}</span>
          <span class="img">活动价</span>
        </div>
        <div class="bottom">
          <div>{{"销量"+count}}</div>
          <div>{{"收藏"+save+"人"}}</div>
          <div>{{description}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "infomation1",
      data(){
        return{
          text:"东方闪电防守打法水电费水电费水电费水电费水电费水电水电费水电费水电费归属感费是的发生的",
          currentPrice:128,
          beforePrice:888,
          count:100,
          save:1564,
          description:"72小时发货"
        }
      }
    }
</script>

<style scoped>
#infomation1{
  width: 96%;
  padding: 2%;
}
#infomation1 .item{
  box-shadow: 0px 1px 1px rgba(100,100,100,.1);
  padding-bottom: 8px;
}
#infomation1 .item .top{
  margin-top: 5px;
}
#infomation1 .center{
  margin-top: 8px;
  margin-bottom: 15px;
}
#infomation1 .center .currentPrice{
  color: red;
  font-size: 20px;
}
#infomation1 .center .beforePrice{
  font-size: 12px;
}
#infomation1 .center .img{
  width: 30px;
  height: 15px;
  border-radius: 5px;
  background-color: pink;
  font-size: 12px;
  position: relative;
  top: -5px;
}
#infomation1 .bottom{
  display:flex;
  font-size: 12px;
  justify-content: space-between;
}
  #infomation1 .bottom div{
    width: 85px;

  }
#infomation1 .bottom div:nth-child(3){
  text-align: right;
}
</style>
