import Vue from 'vue'
import Router from 'vue-router'
import introComp from '@/components/intro';
import artefato from '@/components/artifact';
import tarefa from '@/components/task';
import ferramenta from '@/components/tool';
import guia from '@/components/guide';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: introComp,
      props: true
    },
    {
      path: '/artefato',
      component: artefato
    },
    {
      path: '/tarefa',
      component: tarefa
    },
    {
      path: '/ferramenta',
      component: ferramenta
    },
    {
      path: '/guia',
      component: guia
    }
  ]
})
