import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/components/home'
import login from '@/views/login'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'login', component: require('@/views/login')},
    // {path: '/login', name: 'login', component: require('@/views/login')},
    {
      path: '/home',
      // name: 'home',
      component: require('@/components/home'),
      children: [{
          path: 'news',
          name: 'news',
          component: require('@/views/news'),
        },{
          path: 'hero',
          name: 'hero',
          component: require('@/views/hero'),
        },{
          path: 'strategy',
          name: 'strategy',
          component: require('@/views/strategy'),
        },{
          path: 'game',
          name: 'game',
          component: require('@/views/game'),
        },{
          path: 'heroIntroduce',
          name: 'heroIntroduce',
          component: require('@/views/heroClassify/heroIntroduce'),
        },{
          path: 'videoPlay',
          name: 'videoPlay',
          component: require('@/views/strategy/videoPlay.vue'),
        }]
    },
  ]
})
