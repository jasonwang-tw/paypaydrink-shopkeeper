// 全局組件
import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
// import VueSplide from '@splidejs/vue-splide';
import router from './router';
// CSS
import './assets/style.css';
import './assets/tailwind.css';

Vue.config.productionTip = false;
// Vue.use( VueSplide );

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
