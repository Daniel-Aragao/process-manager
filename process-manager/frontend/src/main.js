import Vue from 'vue';
import App from './App.vue';
import router from './router'

Vue.config.productionTip = false
/**
import VueRouter from 'vue-router';

import introComp from './components/intro.vue' ;
import artefact from './components/artefact.vue';
//import HelloWorld from './components/HelloWorld.vue' ;

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: introComp
  },
  {
    path: '/',
    component: artefact
  }
  {
    path: '/hello',
    component: HelloWorld
  }
];

const router = new VueRouter({routes});

// router.start(App, "#app");
*/
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
