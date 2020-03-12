<template>
    <div id="home">
      <direction class="home-direction" color="pink">
        <div slot="center">购物街</div>
      </direction>
      <scroll ref="scroll" class="scr" :probe-type="3" :pull-up-load="true" @move="move" @pullingUp="pullingUp">
        <swipe width="100%" height="150px" color="blue" :img-list="list1" :link-list="list2" ></swipe>
        <commands :img-list="list1" :link-list="list2" :text-list="list3"></commands>
        <future :img="list1[0]" link="list2[0]"></future>
        <tab-control class="control" :titles="list4"></tab-control>
        <router-view :goodsList="list5"></router-view>
      </scroll>
      <backtop @imgClick="imgClick" v-show="isShow"></backtop>
    </div>
</template>

<script>
  import direction from "../../components/content/direction/direction";
  import tabControl from "../../components/content/tabcontrol/tabControl";
  import scroll from "../../components/comment/scroll/scroll";
  import backtop from "../../components/content/backtop/backtop";

  import swipe from "../../components/comment/swiper/swipe";

  import commands from "./childrencomponents/commands";
  import future from "./childrencomponents/future";


    export default {
      name: "home",
      components:{
        direction,swipe,commands,future,tabControl,scroll,backtop
      },
      data(){
        return{
          list1:["../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png"],
          list2:["http://baidu.com","http://baidu.com","http://baidu.com","http://baidu.com"],
          list3:["十点抢券","好物特卖","内购福利","初秋上涨"],
          list4:["流行","新歌","精选"],
          list5:[
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          ],
          isShow:false,
        }
      },
      mounted() {

      },
      methods:{
        imgClick(){
          this.$refs.scroll.backtop();
        },
        move(position){
          if(position.y*-1>=1000){
            this.isShow=true
          }else{
            this.isShow=false
          }
        },
        pullingUp(){
          console.log(123);
          this.$refs.scroll.finishPullUp();
        },
      }
    }
</script>

<style scoped>
  #home{
padding-top: 44px;
  }
  #home .home-direction{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .control{
    padding-top: 10px;
    padding-bottom: 8px;
    position: sticky;
    top: 44px;
    background-color: white;
  }
  .scr{
    height: 475px;
    overflow: hidden;
  }

</style>
