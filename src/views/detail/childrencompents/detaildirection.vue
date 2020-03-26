<template>
  <div>
    <direction class="direct">
      <img slot="left" src="../../../assets/img/2.gif" @click="click1">
      <div slot="center"><span v-for="(item,index) in titles" :style="init(index)" @click="click2(index)">{{item}}</span></div>
    </direction>
  </div>

</template>

<script>
  import direction from "../../../components/content/direction/direction";
    export default {
      name: "detaildirection",
      components:{
        direction
      },
      data(){
        return{
          titles:["商品","评论","参数","推荐"],
          currentIndex:0,
        }
      },
      methods:{
        init(index){
          if(this.currentIndex==index){
            return {"color":"red"}
          }
        },
        click1(){
          this.$router.back()
        },
        click2(index) {
          if (index === this.currentIndex) return
          else {
            this.currentIndex = index
            switch (index) {
              case 0: {
                this.$emit("one")
              }
                break;
              case 1: {
                this.$emit("two")
              }
                break;
              case 2: {
                this.$emit("three")
              }
                break;
              case 3: {
                this.$emit("four")
              }
                break;
            }
          }
        }
      }
    }
</script>

<style scoped>
  .direct img{
    width: 30px;
    height: 30px;
    margin-top: 6px;
  }
  .direct div{
    display: flex;
  }
  .direct div span{
    flex-grow: 1;

  }
</style>
