<template>
    <div class="tab2" @click="tab2Click">
      <slot v-if="!active" name="im"></slot>
      <slot v-else name="imActive"></slot>
      <div :style="cute"><slot name="text"></slot></div>
      {{cute}}
    </div>
</template>

<script>
    export default {
        name: "tab2",
      data(){
          return{
            isactive:false
          }
      },
      computed:{
        active(){
          if(this.$route.path.indexOf(this.path)!=-1){
            this.isactive=true
            return true
          }
          else{
            this.isactive=false
            return false
          }
        },
        cute(){
          // if(this.isactive){
          //   console.log(this.active());
          //   console.log(123);
          //   return "color:"+this.col
          // }
          // else{
          //   return ""
          // }
          return this.active?"color:"+this.col:""
        }
      },
      props:{
          path:String,
        col:{
            type:String,
            default:"red"
        }
      },
      methods:{
          tab2Click(){
            if (this.$route.path.indexOf(this.path)!=-1){
              return
            }
            this.$router.replace(this.path)
          }
      }
    }
</script>

<style scoped>
.tab2{
  flex: 1;
  text-align: center;
  font-size: 15px;
}
  .tab2 img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

</style>
