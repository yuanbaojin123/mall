<template>
    <div id="complete">
      <div class="left">
        <input  type="checkbox"  >
        <span>全选</span>
      </div>
      <div class="right">
        <span>合计:</span>
        <span>{{"￥"+ap}}</span>
        <span >结算</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "complete",
      props:{
        list:{
          type:Array,
          default:[]
        }
      },
      data(){
        return{
          // val:null,
          // ap:0,
          // select:false,
        }
      },
      mounted() {
        // this.all();
        // this.$bus.$on("cli",()=>{
        //   this.all();
        // });
        // this.init();
        // this.$bus.$on("allCli",()=>{
        //   this.init();
        // });
      },
      methods:{
        // click(){
        //
        // },
        // change(){
        //   this.$emit("sel",this.select)
        // },
        // all(){
        //   let price=0;
        //   let list=this.$store.state.carList.filter(item=>{
        //     return item.isChecked
        //   })
        //   for(let i=0;i<list.length;i++){
        //     price=price+list[i].price*list[i].number;
        //   }
        //   this.ap=price;
        // },
        // init(){
        //   // if(this.$store.state.carList.length==0){
        //   //   return false
        //   // }
        //   let list=this.$store.state.carList.filter(item=>{
        //     return item.isChecked
        //   })
        //   if(list.length==this.$store.state.carList.length){
        //     this.select=true
        //   }else{
        //     this.select=false
        //   }
        // }
      },
      computed:{
        ap(){
          let all=0;
          for (let i=0;i<this.list.length;i++){
            if(this.list[i].isChecked){
              all+=this.list[i].price*this.list[i].number;
            }
          }
          return all;
        }
      },
      activated() {
        // this.all()
        // this.init();
      }
    }
</script>

<style scoped>
#complete{
  width: 100%;
  height: 35px;
  display: flex;
  line-height: 35px;
  background-color: whitesmoke;
}
  #complete .left{
    width: 25%;
    font-size: 15px;
  }
#complete .left input{
  width: 18px;
  height: 18px;
  vertical-align: -3px;
  margin-left: 10px;
}
  #complete .right{
    width: 75%;
    position: relative;
    z-index: 10;
    text-align: right;
  }
#complete .right span:nth-child(2){
  color: red;
}
#complete .right span:nth-child(3){
  display: inline-block;
  width: 60px;
  height: 29px;
  background-color: orange;
  border-radius: 8px;
  margin-top:3px ;
  text-align: center;
  line-height: 29px;
  margin-right: 10px;
}
</style>
