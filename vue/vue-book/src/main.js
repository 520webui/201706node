import Vue from 'vue';
import App from './App';
import router from './router';
/*import test from './test'
Vue.use(test);*/
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
