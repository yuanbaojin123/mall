<template>
    <div id="backtop" @click="click">
      <img src="../../../assets/img/1.png">
    </div>
</template>

<script>
    export default {
      name: "backtop",
      methods:{
        click(){
          this.$emit("imgClick")
        }
      }
    }
</script>

<style scoped>
  #backtop img{
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
  #backtop{
    position: fixed;
    right: 8px;
    bottom: 54px;
  }

</style>
