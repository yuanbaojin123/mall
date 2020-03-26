<template>
  <div>
    <goods @goodsClick="goodsClick" :goods-list="goodsList3"></goods>
  </div>
</template>

<script>
  import goods from "../../../../components/content/goods/goods";
    export default {
      name: "important",
      components:{
        goods,
      },
      props:{
        goodsList3:{
          type:Array,
          default:[]
        }
      },
      computed:{

      },
      mounted() {
        this.$emit("scrollinit",this.$store.state.y3)
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
