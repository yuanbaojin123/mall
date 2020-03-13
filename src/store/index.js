import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    isrefersh:false,
    currentIndex:0,
    start:false,
    y1:0,
    y2:-300,
    y3:-300,
  },
  mutations:{
    check1(state){
      state.isrefersh=false
    },
    check2(state){
      state.isrefersh=true
    },
    click(state,index){
      state.currentIndex=index
    },
    save(state,payload){
      // console.log(payload.y);
      switch (payload.beforeIndex) {
        case 0:{state.y1=payload.y;} break;
        case 1:{state.y2=payload.y;} break;
        case 2:{state.y3=payload.y;} break;
      }
      },
    init(state){
      state.start=true
    }
  },
  getters:{

  },
  actions:{

  },
  modules:{

  }
})

export default store
