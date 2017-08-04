import Vue from 'Vue'
import Vuex from 'Vuex'
import axios from 'axios'
import { newstNews, tanksList, heroInfo, heroSkillPlus} from '../data'
Vue.use(Vuex);

//TODO 对获取的数据进行分组处理
var splitArray = (arr, len) => {
    let a_len = arr.length;
    let result = [];
    for (var i = 0; i < a_len; i+=len) {
      result.push(arr.slice(i, i+len));
    }
    return result;
}

export default new Vuex.Store({
  state: {
    title: '资讯',
    Host: 'http://10.202.4.173:8000',
    bannersNewsData: '',
    newsData: '',
    tanksList: [],
    heroInfo: {},
    heroSkillPlus: {}
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

    //TODO 资讯页面
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
    },
    //TODO 英雄页面
    postTanksList(state){
      var tanksListInfo = tanksList;
      tanksListInfo.forEach( (val) => {
          axios.post(state.Host + '/api/saveTanksList', val)
          .then((res) => {
            console.log(res.data.message);
          })
          .catch((error) => {
            console.log(error);
          })
      })
    },
    getTanksData(state){
      axios.get(state.Host + '/api/getTanksList')
      .then(function(res){
          state.tanksList = splitArray(res.data.tanksList, 4);
      })
    },
    getHeroInfo(state){
        state.heroInfo = heroInfo;
    },
    getHeroSkillPlus(state){
        state.heroSkillPlus = heroSkillPlus;
    }
  }
})
