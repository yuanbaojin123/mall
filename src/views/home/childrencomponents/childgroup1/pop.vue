<template>
    <div>
      <goods :goods-list="goodsList"></goods>
    </div>
</template>

<script>
  import goods from "../../../../components/content/goods/goods";
    export default {
        name: "pop",
      components:{
          goods,
      },
      props:{
          goodsList: {
            type:Array,
            default:[]
          }
      }

    }
</script>

<style scoped>

</style>
