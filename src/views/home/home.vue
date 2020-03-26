<template>
    <div id="home">
      <direction class="home-direction" color="pink">
        <div slot="center">购物街</div>
      </direction>
<!--      <div style="width: 100%;height: 100px;background-color: #42b983"></div>-->
<!--      <div ref="div1" style="width: 100%;height: 100px;background-color: red"></div>-->
      <tab-control @together="together" @saveY="saveY"  v-show="isDisplay" class="control" :titles="list4" ref="con1"></tab-control>
      <scroll ref="scroll" class="scr" :probe-type="3" :pull-up-load="true" @move="move" @pullingUp="pullingUp">{{init}}
        <swipe ref="swipe" width="100%" height="150px" color="blue" :img-list="list1" :link-list="list2" ></swipe>
        <commands :img-list="list1" :link-list="list2" :text-list="list3"></commands>
        <future :img="list1[0]" link="list2[0]"></future>
        <tab-control @together="together" @saveY="saveY"  class="control" :titles="list4" ref="con2" v-show="!isDisplay"></tab-control>
        <router-view @goodsClick="goodsClick" @scrollinit="scrollinit" :goodsList1="list5" :goodsList2="list6" :goodsList3="list7"></router-view>
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
          {id:1,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:2,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:3,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:4,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:5,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:6,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:7,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:8,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:9,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:10,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:11,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:12,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:13,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:14,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:15,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:16,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          ],
          list6:[
          {id:1,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:2,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:3,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:4,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:5,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:6,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:7,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:8,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:9,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:10,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:11,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          {id:12,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          ],
          list7:[
            {id:1,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {id:2,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {id:3,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {id:4,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {id:5,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
            {id:6,"img1":"../../../../static/img/1.png","description":"页面上两个样式属性都会加载到，但显示的是后者的属性值对应的样式","price":49.00,"img2":"../../../../static/img/1.png","count":1254},
          ],
          isShow:false,
          offsetTop:0,
          isDisplay:false,
        }
      },
      mounted() {
        this.offsetTop=this.$refs.con2.$el.offsetTop-44
      },
      computed:{
        init(){
          if(this.$store.state.isrefersh==true){
            if (this.timer){
              clearTimeout(this.timer)
            }
            this.timer=setTimeout(()=>{
              this.$refs.scroll.refresh();
            },100)
            this.$store.commit("check1")
          }
        },
      },
      methods: {
        imgClick() {
          this.$refs.scroll.backtop();
        },
        move(position) {
          // console.log(this.$refs.swipe.$el.offsetTop);
          if (position.y * -1 >= 1000) {
            this.isShow = true
          } else {
            this.isShow = false
          }
          if ((-position.y) > this.offsetTop) {
            this.isDisplay = true
          } else {
            this.isDisplay = false
          }
        },
        pullingUp() {
          let list6 = this.list5;
          let length = 8
          switch (this.$store.state.currentIndex) {
            case 0: {
              for (let i = 0; i < length; i++) {
                this.list5.push(list6[i])
              }
              ;
            }
              break;
            case 1: {
              for (let i = 0; i < length; i++) {
                this.list6.push(list6[i])
              }
            }
              break;
            case 2: {
              for (let i = 0; i < length; i++) {
                this.list7.push(list6[i])
              }
            }
              break;
          }
          this.$refs.scroll.finishPullUp();
        },
        saveY(beforeIndex) {
          this.$store.commit("save", {"y":this.$refs.scroll.currentY,"beforeIndex":beforeIndex})
        },
        scrollinit(y){
          this.$refs.scroll.scroll.scrollTo(0,y)
        },
        together(beforeIndex,currentIndex){

          this.$refs.con1.beforeIndex=this.$refs.con1.beforeIndex=beforeIndex
          this.$refs.con1.currentIndex=this.$refs.con2.currentIndex=currentIndex
        },
        goodsClick(item){
          switch (this.$refs.con2.currentIndex) {
            case 0:{this.$router.push("/home/pop/"+item.id) }break;
            case 1:{this.$router.push("/home/song/"+item.id)} break;
            case 2:{this.$router.push("/home/important/"+item.id)} break;
          };
        }
      },
      beforeRouteLeave(to,from,next){
        this.$refs.swipe.clearTimer();
        next();
      },
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
    padding-top: 6px;
    padding-bottom: 2px;
    background-color: white;
  }
  .scr{
    height: 475px;
    overflow: hidden;
  }

</style>
