<template>
    <div id="carList">
      <div class="content">
        <div class="top">
          <div class="left">
            <input type="checkbox">
          </div>
          <div class="center">
            <img src="../../../assets/img/1.png">
          </div>
          <div class="right">
            <div class="text">{{list.description}}</div>
            <div class="param">{{list.description}}</div>
            <div class="detail">
              <span>{{"￥"+list.price}}</span>
              <div class="rig">
                <span class="btn" @click="sub">-</span>
                <span>{{number}}</span>
                <span class="btn" @click="add">+</span>
              </div>
            </div>
            {{list.isChecked}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "carList",
      props:{
        list:{
          type:Object,
          default:null
        },
        number:{
          type:Number,
          default:0
        },
      },
      data(){
        return{

        }
      },
      watch:{
        list: {
          handler(val){
            console.log(123);
          },
          deep:true
        },
        number:function (newV,oldV) {
          console.log(oldV);
          console.log(newV);
        }
      },
      mounted() {

      },
      updated() {

      },
      methods:{
        // change(){
        //   console.log(123);
        //   this.list.isChecked=!this.list.isChecked
        //   this.$bus.$emit("cli")
        //   this.$bus.$emit("allCli")
        // },
        sub(){
          // this.num--;
          // this.list.number--;
          // if(this.num==0){
          //   this.num=1
          //   this.list.number=1
          // }
          // this.$bus.$emit("cli")
          this.$emit("reduce",this.list.id)
        },
        add(){
          // this.num++;
          // this.list.number++;
          // this.$bus.$emit("cli")
          this.$emit("increase",this.list.id)
        },
        show(){
          console.log(this.list.number);
        }
      }
    }
</script>

<style scoped>
#carList {
  width: 96%;
  height: 140px;
  padding: 2%;
  background-color: whitesmoke;

}
  #carList .content{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: white
  }
#carList .content .top{
  display: flex;
}
#carList .content .top .left{
  height: 90px;
  width: 1px;
  flex-grow: 1;
}
#carList .content .top .left input{
  display: block;
  width: 16px;
  height: 16px;
  margin: 37px auto;
}
#carList .content .top .center{
  height: 90px;
  width: 1px;
  flex-grow: 4;
}
#carList .content .top .center img{
  width: 96%;
  height: 96%;
  padding: 2%;
  border-radius: 5px;
}
#carList .content .top .right{
  height: 140px;
  width: 1px;
  flex-grow: 8;
}
#carList .content .top .right .text{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 2px;
  margin-left: 10px;
}
#carList .content .top .right .param{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding: 3px 10px;
  margin: 4px 2px 10px 5px;
  background-color: whitesmoke;
  border-radius: 5px;
}
  #carList .btn{
    display: inline-block;
    width: 25px;
    height: 22px;
    text-align: center;
    margin: 0 0;
    padding: 0 0;
  }
  #carList .detail{
    position: relative;
  }
#carList .detail span:nth-child(1){
  color: red;
}
  #carList .rig{
    position: absolute;
    right: 5px;
    top: 2px;
    border: solid 1px darkgray;
    border-radius: 5px;
  }
#carList .rig span:nth-child(2){
  display: inline-block;
  width: 35px ;
  height: 22px;
  text-align: center;
  border-left: solid 1px darkgray;
  border-right: solid 1px darkgray;
}

</style>
