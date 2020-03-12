<template>
  <div id="swipe" :style="init1" >
    <div class="swipeItem" :style="init1">
      <div :style="init2" ref="item" >
        <a v-for="(it,index) in list1" :href="it" :style="init1">
          <img ref="im"  :src="list2[index]" :style="init1">
        </a>
        {{init5}}
      </div>
      <ul :style="init3">
        <li v-for="(item,index) in imgList" :style="init4(index)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "swipe",
      data(){
        return{
          left:0,
          list1:[],
          list2:[],
          currentIndex:1,
          rate:0,
          realWidth:0,
          realHeight:0,
          timer:null,
        }
      },
      props:{
        width:{
          type:String,
          default:"100%"
        },
        height:{
          type:String,
          default: "300px"
        },
        color:{
          type:String,
          default:"blue"
        },
        imgList:{
          type:Array,
          default:[]
        },
        linkList:{
          type:Array,
          default:[]
        }
      },
      computed:{
        init1(){
          let width=this.realWidth+"px"
          let height=this.realHeight+"px"
          return {"width":width,"height":height }
        },
        init2(){
          let width=this.realWidth*this.list1.length+"px"
          let height=this.realHeight+"px"
          let left=(this.left-this.realWidth)+"px"
          return {"width":width,"height":height,"left":left }
        },
        init3(){
          let width=this.imgList.length*10+3*this.imgList.length*2+"px"
          let left=(this.realWidth-parseInt(width))/2+"px"
          let height=(parseInt(this.realHeight)/10*9-16)+"px"
          return {"width":width,"left":left,"top":height}
        },
        init5(){
          if(this.currentIndex==5){
            this.currentIndex=1
            this.$refs.item.style.transitionDuration="0s"
            this.$refs.item.style.left=this.realWidth*-1+"px"
            this.left=0
          }
        }
      },
      created() {
        if(this.width.indexOf("%")!==-1){
          let width=window.document.body.offsetWidth;
          let rate=this.width.split("%")
          this.realWidth=rate[0]/100*width
        }
        else{
          this.realWidth=parseInt(this.width)
        }
        this.realHeight=parseInt(this.height)

        this.list1.unshift(this.linkList[this.linkList.length-1])
        for (let i=0;i<this.linkList.length;i++){
          this.list1.push(this.linkList[i])
        }
        this.list1.push(this.linkList[0])

        this.list2.unshift(this.imgList[this.imgList.length-1])
        for (let i=0;i<this.imgList.length;i++){
          this.list2.push(this.imgList[i])
        }
        this.list2.push(this.imgList[0])
      },
      mounted() {
        this.timer=this.setTime()
      },
      methods:{
        setTime(){
          const timer=setInterval(()=>{
            this.$refs.item.style.transitionDuration="1s"
            this.left-=this.realWidth
            setTimeout(()=>{
              this.currentIndex++
            },1000)
          },3000)
          return timer
        },
        init4(index){
          if(this.currentIndex==index+1){
            return {"background-color":this.color}
          }
        },
      }

    }
</script>

<style scoped>
  #swipe{
    overflow: hidden;
  }
  #swipe .swipeItem{
    position: relative;
  }
  #swipe .swipeItem ul li{
    list-style: none;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: white;
    float: left;
    margin: 3px;
  }
  #swipe .swipeItem div{
    position: relative;
    transition: left 1s linear;
  }
  #swipe .swipeItem ul{
    position: absolute;
    height: 16px;
  }
</style>
