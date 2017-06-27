import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import login from '@/views/login'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'login', component: login},
    {path: '/login', name: 'login', component: login},
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          name: 'hello',
          component: Hello,
        }
      ]
    },
  ]
})
