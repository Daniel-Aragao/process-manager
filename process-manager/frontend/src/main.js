import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import introComp from './components/intro.vue' ;
import HelloWorld from './components/HelloWorld.vue' ;

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: introComp
  },
  {
    path: '/hello',
    component: HelloWorld
  }
];

const router = new VueRouter({routes});

// router.start(App, "#app");

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
