import Vue from 'vue'
import App from './App.vue'
import store from "./store";

Vue.config.productionTip = false
Vue.directive('visible', function(el, binding) {
  el.style.visibility = binding.value ? 'visible' : 'hidden';
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
