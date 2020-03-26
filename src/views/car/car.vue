<template>
  <div id="car">
    <direction class="direction">
      <div slot="center">{{"购物车("+this.$store.state.carList.length+")"}}</div>
    </direction>
    {{val[0]}}
    <scroll class="scroll" :probe-type="3">
      <car-list ref="carList" @reduce="reduce" @increase="increase" v-for="(item,index) in val" :list="item" :number="item.number" :key="item.id"></car-list>
    </scroll>
    <complete :list="val" class="complete"></complete>

  </div>
</template>

<script>
  import direction from "../../components/content/direction/direction";
  import scroll from "../../components/comment/scroll/scroll";

  import carList from "./childrencomponents/carList";
  import complete from "./childrencomponents/complete";
    export default {
      name: "car",
      components:{
        direction,carList,scroll,complete
      },
      data(){
        return{
          val:[],
          num:[1,2]
        }
      },
      mounted() {
        this.val=this.$store.state.carList
      },
      activated() {
        this.val=this.$store.state.carList
        console.log(this.val);
      },
      methods:{
        // sel(select){
        //   if(select) {
        //     for (let i = 0; i < this.val.length; i++) {
        //       this.val[i].isChecked = true
        //       console.log(this.$store.state.carList)
        //     }
        //   }
        //   else{
        //     for (let i = 0; i < this.val.length; i++) {
        //       this.val[i].isChecked = false
        //       console.log(this.$store.state.carList)
        //     }
        //   }
        //   this.$bus.$emit("cli")
        //   this.$bus.$emit("allCli")
        // }

        reduce(id){
          for (let i=0;i<this.val.length;i++){
            if(this.val[i].id===id){
             this.$set(this.val,0,this.val[i].number-1)
              if(this.val[i].number===0){
                this.val[i].number=1;
              }
             this.$refs.carList[0].show()
            }
          }


        },
        increase(id){
          for (let i=0;i<this.val.length;i++){
            if(this.val[i].id===id){
              console.log(this.val[i].number);
              this.$set(this.val[i],"number",this.val[i].number+1)
              console.log(this.val[i].number);
              if(this.val[i].number===11){
                this.val[i].number=10;
              }
            }
          }

        }
      }
    }
</script>

<style scoped>
#car .direction{
  background-color: pink;
  color: white;
  position: fixed;
  top: 0px;
}
  #car .scroll{
    position: relative;
    top: 44px;
    overflow: hidden;
    height: calc(568px - 44px - 49px - 35px);
  }
  #car .complete{
    position: fixed;
    bottom: 49px;
  }
</style>
