import Vue from 'Vue'
import Vuex from 'Vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: '资讯',
    Host: 'http://localhost:8000',
    bannersNewsData: '',
  },
  mutations: {
    set_title(state, val){//设置底部显示
      let val_title = {
        news: '资讯',
        hero: '英雄',
        strategy: '攻略',
        player: '玩家'
      }
      state.title = val_title[val];
    },
    getBannersNewsData(state){//获取资讯图片轮播数据
      axios.get(state.Host + '/api/getBannersNews')
      .then(function(res){
        //console.log(JSON.stringify(res.data.bannersNews));
        state.bannersNewsData = res.data.bannersNews;
      })
    }
  }
})
