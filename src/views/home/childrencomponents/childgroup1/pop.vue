<template>
    <div>
      <goods @goodsClick="goodsClick" :goods-list="goodsList1"></goods>
    </div>
</template>

<script>
  import goods from "../../../../components/content/goods/goods";
    export default {
        name: "pop",
      components:{
          goods,
      },
      data(){
          return {

          }
      },
      props:{
          goodsList1: {
            type:Array,
            default:[]
          }
      },
      mounted() {
          if(this.$store.state.start){
            this.$emit("scrollinit",this.$store.state.y1)
          }
          else{
            this.$store.commit("init")
          }
      },
      methods:{
        goodsClick(item){
          this.$emit("goodsClick",item)
       }
     },
      activated() {
      },

    }
</script>

<style scoped>

</style>
