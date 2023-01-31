(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function initMixin(Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      vm.$options = options;
    };
  }

  function Vue(options) {
    this._init(options);
  }
  initMixin(Vue);

  console.log('init');
  var app = new Vue({
    el: '#app',
    data: {
      test: 'hy'
    }
  });
  console.log('vue', app);

}));
//# sourceMappingURL=vue.js.map
