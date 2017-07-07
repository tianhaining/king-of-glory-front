import Vue from 'Vue'
import Vuex from 'Vuex'
import axios from 'axios'
import { newstNews } from '../data'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: '资讯',
    Host: 'http://10.202.2.67:8000',
    bannersNewsData: '',
    newsData: ''
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
    // postNewsData(state){//发送测试数据
    //   var newsData = newstNews;
    //   newsData.forEach(function(val){
    //     // console.log(JSON.stringify(newsData));
    //     axios.post(state.Host + '/api/saveNews', val)
    //     .then(function (response) {
    //       console.log(response.data.message);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //   })
    // },
    getBannersNewsData(state){//获取资讯图片轮播数据
      axios.get(state.Host + '/api/getBannersNews')
      .then(function(res){
        //console.log(JSON.stringify(res.data.bannersNews));
        state.bannersNewsData = res.data.bannersNews;
      })
    },
    getNewsData(state){//获取资讯图片轮播数据
      axios.get(state.Host + '/api/getNews')
      .then(function(res){
        //console.log(JSON.stringify(res.data.news));
        state.newsData = res.data.news;
      })
    }
  }
})
