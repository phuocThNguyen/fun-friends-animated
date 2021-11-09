import Vue from 'vue'
import App from './App.vue'
import store from "./store";
// import './registerServiceWorker'
import wb from './registerServiceWorker';
// import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.prototype.$workbox = wb
Vue.config.productionTip = false
Vue.directive('visible', function(el, binding) {
  el.style.visibility = binding.value ? 'visible' : 'hidden';
});
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
