<template>
    <div>
      <goods @goodsClick="goodsClick" :goods-list="goodsList2"></goods>
    </div>
</template>

<script>
  import goods from "../../../../components/content/goods/goods";
    export default {
      name: "song",
      props:{
        goodsList2:{
          type:Array,
          default:[]
        }
      },
      components:{
        goods,
      },
      mounted() {
        this.$emit("scrollinit",this.$store.state.y2)
      },
      methods:{
        goodsClick(item){
          this.$emit("goodsClick",item)
        }
      },
      activated() {

      }
    }
</script>

<style scoped>

</style>
