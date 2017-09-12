import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue';
import Detail from '../page/Detail.vue';
import List from '../page/List.vue';
import Add from '../page/Add.vue';

//只能在插件上使用，插件会自带一个install的方法
Vue.use(Router); //将router中的内容router-link router-view 注册了全局组件

export default new Router({
  routes: [

  ]
})
