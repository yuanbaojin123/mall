<template>
    <div id="infomation2">
      <div>退货补运费</div>
      <div>全国包邮</div>
      <div>7天无理由退货</div>
    </div>
</template>

<script>
    export default {
        name: "infomation2"
    }
</script>

<style scoped>
#infomation2{
  display: flex;
  width: 96%;
  padding: 2%;
  height: 40px;
  border-bottom: solid 3px darkgray;

}
  #infomation2 div{
    flex-grow: 1;
    line-height: 40px;
  }
#infomation2 div:nth-child(3){
  text-align: right;
}
</style>
