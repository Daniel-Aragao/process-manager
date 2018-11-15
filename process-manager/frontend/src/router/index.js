import Vue from 'vue'
import Router from 'vue-router'
import introComp from '@/components/intro';
import artefato from '@/components/artifact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: introComp
    },
    {
      path: '/',
      component: artefato
    }
  ]
})
