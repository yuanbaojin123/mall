import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    isrefersh:false,
    isClick:false,
    currentIndex:0,
    start:false,
    y1:0,
    y2:-300,
    y3:-300,
    carList:[],
  },
  mutations:{
    goodsClick(state){
      state.isClick=true
      console.log(state.isClick);
    },
    notClick(state){
      state.isClick=false
    },
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
    },
    addCar(state,payload){
        const flag=state.carList.find(item=>item.id===payload.id)
        if (flag){
          flag.number++;
        }else{
          payload.isChecked=false
          payload.number=1;
          state.carList.push(payload)
        }
    },
  },
  getters:{

  },
  actions:{

  },
  modules:{

  }
})

export default store
