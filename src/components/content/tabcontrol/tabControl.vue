<template>
    <div id="tabControl">
      <div class="tabControlItem" v-for="(item,index) in titles" @click="click(index)"><span :style="init(index)">{{item}}</span></div>
    </div>
</template>

<script>
    export default {
      name: "tabControl",
      data(){
        return{
          currentIndex:1,
        }
      },
      props:{
          titles:{
            type:Array,
            default:[]
          }
      },
      methods:{
          init(index){
            if(index+1==this.currentIndex){
              return {"border-bottom": "solid 2px red"}
            }
          },
        click(index){
            this.currentIndex=index+1
          if(this.currentIndex==1){
            this.$router.replace("/home/pop")
          }
          if(this.currentIndex==2){
            this.$router.replace("/home/song")
          }
          if(this.currentIndex==3){
            this.$router.replace("/home/important")
          }

        }
      }
    }
</script>

<style scoped>
#tabControl{
  display: flex;
  margin-bottom: 15px;
}
  #tabControl .tabControlItem{
    flex-grow: 1;
    text-align: center;
  }
/*#tabControl .tabControlItem:nth-child(2n+1){*/
/*  background-color: #42b983;*/
/*}*/
#tabControl .tabControlItem span{
  padding: 4px;
}
</style>
