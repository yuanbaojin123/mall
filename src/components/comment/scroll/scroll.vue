<template>
    <div ref="scroll" class="scrollWrap">
      <div class="scrollContent">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from "better-scroll"
    export default {
      name: "scroll",
      data(){
        return{
          scroll:null,
          timer:null,
          currentY:0
        }
      },
      props:{
        probeType: {
          type:Number,
          default:0,
        },
        pullUpLoad: {
          type: Boolean,
          default: false
        }
      },
      mounted() {
        this.scroll=new BScroll(this.$refs.scroll,{
          click:true,
          probeType:this.probeType,
          pullUpLoad:this.pullUpLoad
        })
        if(this.probeType===2||this.probeType===3){
          this.scroll.on("scroll",(position)=>{
            this.currentY=parseInt(position.y)
            this.$emit("move",position)
          });
        }
        if(this.pullUpLoad){
          this.scroll.on("pullingUp",()=>{
            this.$emit("pullingUp")
          })
        }

      },
      methods:{
        backtop(){
          this.scroll.scrollTo(0,0,300)
        },
        finishPullUp(){
          this.scroll.finishPullUp();
        },
        refresh(){
            this.scroll.refresh();
        }
      }
    }
</script>

<style scoped>

</style>
