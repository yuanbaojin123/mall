<template>
    <div id="infomation3">
      <div class="top">
        <img src="../../../assets/img/1.png">
        <span>仲陌美</span>
      </div>
      <div class="item">
        <div class="left">
          <div class="le">
            <div class="big">5.8万</div>
            <div class="small">总销量</div>
          </div>
          <div class="ri">
            <div class="big">99</div>
            <div class="small">全部宝贝</div>
          </div>
        </div>
        <div class="center"></div>
        <div class="right">
          <ul>
            <li>
              <span >描述相符</span>
              <span class="cen">4.64</span>
              <span >低</span>
            </li>
            <li>
              <span >价格合理</span>
              <span class="cen">5</span>
              <span >高</span>
            </li>
            <li>
              <span >质量消息</span>
              <span class="cen">4.62</span>
              <span >低</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom"><a href="http://www.baidu.com">进店逛逛</a></div>
    </div>
</template>

<script>
    export default {
      name: "infomation3"
    }
</script>

<style scoped>
  #infomation3{
    width: 96%;
    padding:20px 0px 2% 2%;
  }
  #infomation3 .top{
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
  }
#infomation3 .top img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
  #infomation3 .top span{
    position: relative;
    top:-13px;
    left: 5px;
  }
  #infomation3 .item{
    display: flex;
    position: relative;
  }
#infomation3 .item .left,.right{
  flex-grow: 1;

}
  #infomation3 .item .left{
    display: flex;
    text-align: center;

  }
  #infomation3 .item .right{

  }
  #infomation3 .item .left .le,.ri{
    flex-grow: 1;
  }
  #infomation3 .item .left .le{
    position: relative;
    top: 14px;
  }
  #infomation3 .item .left .ri{
    position: relative;
    top: 14px;
  }
  #infomation3 .big{
    font-size: 16px;
  }
  #infomation3 .small{
    font-size: 12px;
  }
  #infomation3 .right ul{
    width: 120px;
    position: relative;
    left: 40px;
  }
  #infomation3 .right ul li{
    list-style: none;
    font-size: 12px;
    margin: 6px;
    position: relative;
  }
  #infomation3 .right ul li span:nth-child(3){
    position: absolute;
    right: 2px;
  }
  #infomation3 .right ul li:nth-child(2) span:nth-child(2){
    color: red;
  }
  #infomation3 .right ul li:nth-child(2) span:nth-child(3) {
  background-color: orangered;
  }
  #infomation3 .right ul li span:nth-child(3) {
    background-color: forestgreen;
  }
  #infomation3 .cen{
    margin:0 7px
  }
  #infomation3 .item .center{
    width: 2px;
    height: 30px;
    background-color: darkgray;
    position: absolute;
    left: 50%;
    top: 20px;
    opacity: 0.3;
  }
  #infomation3 .bottom{
    width: 120px;
    height: 30px;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    margin: 10px auto;
    border-radius: 10px;
    background-color: darkgray;
  }
  #infomation3 .bottom a {
    text-decoration: none;
  }
  a:link{
    text-decoration: none;
  }
  a:active{
    text-decoration: none;
  }
  a:focus{
    text-decoration: none;
  }
  a:visited{
    text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }




</style>
