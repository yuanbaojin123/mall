import Vue from 'vue'
import Router from 'vue-router'

const home=()=>import("../views/home/home")
const pop=()=>import("../views/home/childrencomponents/childgroup1/pop")
const song=()=>import("../views/home/childrencomponents/childgroup1/song")
const important=()=>import("../views/home/childrencomponents/childgroup1/important")
const cate=()=>import("../views/cate/cate")
const car=()=>import("../views/car/car")
const profile=()=>import("../views/profile/profile")
const detail=()=>import("../views/detail/detail")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"",
      redirect:"/home"
    },
    {
      path:"/home",
      component:home,
      children:[
        {
          path:"",
          redirect:"pop"
        },
        {
          path:"pop",
          component:pop,
        },
        {
          path:"song",
          component:song
        },
        {
          path:"important",
          component:important

        },
      ]
    },
    {
      path:"/cate",
      component:cate
    },
    {
      path:"/car",
      component:car
    },
    {
      path:"/profile/:id",
      component:profile
    },
    {
      path:"/home/:type/:id",
      component:detail,
    }
  ],
  mode:"history"
})
