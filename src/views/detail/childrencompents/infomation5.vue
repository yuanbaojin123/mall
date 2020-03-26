<template>
    <div id="infomation5">
      <div class="content">
        <div class="top">
          <div>{{"宝贝评价("+number+")"}}</div>
          <div>查看全部</div>
        </div>
        <div class="center">
          <span>{{"性价比"+num1}}</span>
          <span>{{"没有色差"+num2}}</span>
          <span>{{"质量一般"+num3}}</span>
        </div>
        <div class="bottom">
          <div>
            <img src="../../../assets/img/1.png">
            <span>sfdsd</span>
            <div>短视的回复卡萨丁回复卡萨丁回复哈迪斯卡盒饭了 哈稍等会分手逗号立方阿士大夫哈大声哭喊电话费卡闪电发货圣诞节回复独守空房阿萨德核发的</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "infomation5",
      props:{
        number:{
          type:Number,
          default:0
        }
      },
      data(){
        return{
        num1:19,
        num2:12,
        num3:38,
        }
      },
    }
</script>

<style scoped>
#infomation5{
  width: 94%;
  padding: 3%;
}
#infomation5 .content{
  width: 100%;
  border-bottom: solid darkgray 1px;
  padding-bottom: 15px;
}
  #infomation5 .top{
    width: 100%;
    display: flex;
  }
#infomation5 .top div{
  width: 50%;
  justify-content: space-between;
}
#infomation5 .top div:nth-child(2){
  text-align: right;
}
#infomation5 .center{
  margin: 15px 10px 0 0;
}
  #infomation5 .center span{
    display:inline-block;
    border-radius: 10px;
    background-color: papayawhip;
    text-align: center;

  }
#infomation5 .center span:nth-child(n+2){
  width: 90px;
}
#infomation5 .center span:nth-child(1){
  width: 80px;
}
#infomation5 .bottom{
  margin-top: 10px;
}
#infomation5 .bottom img{
  width: 20px;
  height: 20px;
}
#infomation5 .bottom span{
  vertical-align: 5px;
}
#infomation5 .bottom div{
  height: 50px;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
