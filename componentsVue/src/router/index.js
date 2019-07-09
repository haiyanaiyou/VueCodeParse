import Vue from 'vue'
import Router from 'vue-router'
import Props from '@/views/props'
import Provide from '@/views/provide'
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
    }
  ]
})
