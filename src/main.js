// src/main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

/*引入组件*/
import 'bootstrap/dist/css/bootstrap.css'
/*import 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-switch/dist/js/bootstrap-switch.js'*/
import App from './App'
import Home from './components/Home'


import store from './store'
import TimeEntries from './components/TimeEntries.vue'

/*开启路由*/
Vue.use(VueRouter)
Vue.use(VueResource)

/*路由组件*/
const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/time-entries',
  component : TimeEntries,
  children : [{
    path : 'log-time',
    // 懒加载
    component : resolve => require(['./components/LogTime.vue'],resolve),
  }]
}];

/*路由对象*/
const router = new VueRouter({
  routes
});

// 实例化我们的Vue
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});