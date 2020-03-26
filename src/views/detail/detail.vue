<template>
    <div id="detail">
      <detaildirection ref="direction" class="detaildirection" @one="one" @two="two" @three="three" @four="four"></detaildirection>
      <scroll @move="move" ref="sc" class="scroll" :probe-type="3">
        <swipe ref="swipe" width="100%" height="150px" color="blue" :img-list="list1" :link-list="list2" ></swipe>
        <infomation1></infomation1>
        <infomation2></infomation2>
        <infomation3></infomation3>
        <infomation5 :number="48259"></infomation5>
        <infomation4 @endLoad="endLoad" :img-list="list3" :commandList="list4"></infomation4>
      </scroll>
      <nav-bar @addToCar="addToCar" class="nav"></nav-bar>
      <backtop v-show="isShow" @imgClick="imgClick" class="backTop"></backtop>
    </div>
</template>

<script>
  import detaildirection from "./childrencompents/detaildirection";
  import infomation1 from "./childrencompents/infomation1";
  import infomation2 from "./childrencompents/infomation2";
  import infomation3 from "./childrencompents/infomation3";
  import infomation4 from "./childrencompents/infomation4";
  import infomation5 from "./childrencompents/infomation5";
  import navBar from "./childrencompents/navBar";

  import swipe from "../../components/comment/swiper/swipe";
  import scroll from "../../components/comment/scroll/scroll";
  import backtop from "../../components/content/backtop/backtop";
    export default {
      name: "detail",
      components:{
        infomation2, detaildirection,swipe,infomation1,infomation2,infomation3,scroll,navBar,infomation4,backtop,infomation5
      },
      data(){
        return{
          id:0,
          list1:["../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png"],
          list2:["http://baidu.com","http://baidu.com","http://baidu.com","http://baidu.com"],
          list3:["../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png","../../../static/img/1.png"],
          list4:[
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
          isShow:false,
        }
      },
      methods:{
        endLoad(){
          this.$refs.sc.refresh();
        },
        imgClick(){
          this.$refs.sc.backtop();
          this.$refs.sc.finishPullUp()
        },
        move(position){
          if(-position.y>1000){
            this.isShow=true
          }else{
            this.isShow=false
          }
          if(-position.y<400){
            this.$refs.direction.currentIndex=0
          }else{
            if(-position.y<600){
              this.$refs.direction.currentIndex=1
            }else{
              if(-position.y<5200){
                this.$refs.direction.currentIndex=2
              }else{
                this.$refs.direction.currentIndex=3
              }
            }
          }
        },
        one(){
          this.$refs.sc.scroll.scrollTo(0,0,300)
        },
        two(){
          this.$refs.sc.scroll.scrollTo(0,-400,300)
        },
        three(){
          this.$refs.sc.scroll.scrollTo(0,-600,300)
        },
        four(){
          this.$refs.sc.scroll.scrollTo(0,-5200,300)
        },
        addToCar(){
          let data=this.list4.filter(item=>{return item.id==this.id})
          this.$store.commit("addCar",data[0])
        }
      },
      mounted() {
        this.id=this.$route.params.id;
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
    width: 100%;
  }
  #detail .scroll{
    height:calc(568px - 44px - 60px);
    overflow: hidden;
  }
  #detail .nav{
    position: fixed;
    bottom: 0px;
  }
  #detail .backTop{
    bottom: 65px;
  }
</style>
