<template>
    <div id="tabControl">
      <div ref="control" class="tabControlItem" v-for="(item,index) in titles" @click="click(index)"><span :style="init(index)">{{item}}</span></div>
    </div>
</template>

<script>
    export default {
      name: "tabControl",
      data(){
        return{
          beforeIndex:0,
          currentIndex:0,
        }
      },
      props:{
          titles:{
            type:Array,
            default:[]
          },
      },
      methods:{
          init(index){
            if(index==this.$store.state.currentIndex){
              return {"border-bottom": "solid 2px red"}
            }
          },
        click(index){
          this.beforeIndex=this.currentIndex;
          this.currentIndex=index;
          this.$emit("together",this.beforeIndex,this.currentIndex)
            this.$store.commit("click",index)
          this.$emit("saveY",this.beforeIndex)
          if(this.$store.state.currentIndex==0){
            if(this.$route.path!=="/home/pop"){
              this.$router.replace("/home/pop")
            }
          }
          if(this.$store.state.currentIndex==1){
            if(this.$route.path!=="/home/song"){
              this.$router.replace("/home/song")
            }
          }
          if(this.$store.state.currentIndex==2){
            if(this.$route.path!=="/home/important"){
              this.$router.replace("/home/important")
            }
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
  padding: 3px;
}
</style>
