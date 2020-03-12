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
        this.scroll.on("scroll",(position)=>{
          this.$emit("move",position)
        });
        this.scroll.on("pullingUp",()=>{
          this.$emit("pullingUp")
        })
      },
      methods:{
        backtop(){
          this.scroll.scrollTo(0,0,300)
        },
        finishPullUp(){
          this.scroll.finishPullUp();
        }
      }
    }
</script>

<style scoped>

</style>
