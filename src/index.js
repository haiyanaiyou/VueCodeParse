console.log('init')
import Vue from './modules/vue'
const app = new Vue({
  el: '#app',
  data: {
    test: 'hy'
  }
})
console.log('vue', app)