<template>
    <div id="future">
      <a :href="link"><img :src="img"></a>
    </div>
</template>

<script>
    export default {
      name: "future",
      props:{
        img:{
          type:String,
          default:""
        },
        link:{
          type:String,
          default:""
        }
      }
    }
</script>

<style scoped>
#future{
  width: 100%;
  height: 200px;
}
  #future img{
    width: 100%;
    height: 200px;
  }
</style>
