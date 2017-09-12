import Vue from 'vue';
import App from './App';
import router from './router';
/*import test from './test'
Vue.use(test);*/
Vue.config.productionTip = false;
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
//导入swiper的样式
import 'swiper/dist/css/swiper.min.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
