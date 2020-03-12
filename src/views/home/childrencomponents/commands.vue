<template>
    <div id="commands">
      <div class="commandItem" v-for="(item,index) in linkList"><a :href="item"><img :src="imgList[index]"></a><div>{{textList[index]}}</div></div>
    </div>
</template>

<script>
    export default {
      name: "commands",
      props:{
        imgList: {
          type:Array,
          default:[]
        },
        linkList: {
          type:Array,
          default:[]
        },
        textList:{
          type:Array,
          default:[]
        }
      }
    }
</script>

<style scoped>
#commands{
  display: flex;
  width: 100%;
  height: 80px;
  font-size: 14px;
  padding: 12px 0px;
  border-bottom: solid 10px darkgray;
}
#commands .commandItem{
  flex: 1;
  align-content: space-evenly;
  text-align: center;
}
#commands .commandItem img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

</style>
