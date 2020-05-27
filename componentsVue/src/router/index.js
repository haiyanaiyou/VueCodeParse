import Vue from 'vue'
import Router from 'vue-router'
import Props from '@/views/props'
import Provide from '@/views/provide'
import ShoppingCar from '@/views/shoppingCar'
import VuexDemo from "@/views/vuex-demo"
import MyDrag from "@/views/drag"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Props',
      component: Props
    },
    {
      path: '/provide',
      name: 'Provide',
      component: Provide
    },
    {
      path: '/shopping',
      name: 'ShoppingCar',
      component: ShoppingCar
    },
    {
      path: '/vuex-demo',
      name: 'VuexDemo',
      component: VuexDemo
    },
    {
      path: '/my-drag',
      name: 'MyDrag',
      component: MyDrag
    },
    

  ]
})
