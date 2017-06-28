import Vue from 'Vue'
import Vuex from 'Vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: '资讯',
    Host: 'http://localhost:8000',
    newsData: '',
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
    getNewsData(state){//获取资讯数据
      // axios.get(state.Host + '/api/getNews')
      // .then(function(res){
      //   console.log(res);
      //   state.newsData = res;
      // })

      let id = '594b5e865d36b00d1ceb9a09';
      axios.get(state.Host + `/api/getAllByUser?id=${id}`)
          .then((res) => {
            console.log(JSON.stringify(res.data.items));
            state.newsData = res.data.items;
          })
    }
  }
})
