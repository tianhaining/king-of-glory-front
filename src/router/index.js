import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [

      ]
    },
  ]
})
