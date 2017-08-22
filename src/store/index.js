import Vue from 'Vue'
import Vuex from 'Vuex'
import axios from 'axios'
import { newstNews, tanksList, warriorList, wizardList, shooterList, assassinList, assistList, heroInfo, heroSkillPlus, heroUseSkill, strategyBannerNews, strategyVideoList, gameNewsList} from '../data'
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
    title: '资讯',//顶部显示
    Host: 'http://10.202.4.235:8000',//后台API域名
    bannersNewsData: '',//资讯轮播图
    newsData: '',//资讯信息
    heroInfo: {},//单个英雄信息
    heroSkillPlus: {},//英雄技能加点
    heroUseSkill: {},//英雄使用技巧
    strategyBannerNews: [],//策略模块轮播图
    strategyVideoList: {},//策略热门视频
    heroListData: [],//英雄列表
    gameNewsList: []//赛事资讯
  },
  mutations: {
    set_title(state, val){//设置底部显示
      let val_title = {
        news: '资讯',
        hero: '英雄',
        strategy: '攻略',
        game: '赛事',
        heroIntroduce: '英雄',//处于英雄介绍的时候底部也显示英雄
        videoPlay: '攻略'
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
          state.heroListData = splitArray(res.data.tanksList, 4);
      })
    },
    getWarriorsData(state){
      state.heroListData = splitArray(warriorList, 4);
    },
    getWizardData(state){
      state.heroListData = splitArray(wizardList, 4);
    },
    getShootersData(state){
      state.heroListData = splitArray(shooterList, 4);
    },
    getAssassinData(state){
      state.heroListData = splitArray(assassinList, 4);
    },
    getAssistData(state){
      state.heroListData = splitArray(assistList, 4);
    },
    //TODO 单个英雄介绍
    getHeroInfo(state){//后续处理需要把信息放到数据库
        state.heroInfo = heroInfo;
    },
    getHeroSkillPlus(state){//后续处理需要把信息放到数据库
        state.heroSkillPlus = heroSkillPlus;
    },
    getHeroUseSkill(state){//后续处理需要把信息放到数据库
        state.heroUseSkill = heroUseSkill;
    },
    //TODO 策略页面
    getStrategyBannerNews(state){
        state.strategyBannerNews = strategyBannerNews;
    },
    getStrategyVideoList(state){
        state.strategyVideoList = splitArray(strategyVideoList, 2);
    },
    //TODO 赛事页面
    getGameNewsList(state){
      state.gameNewsList = gameNewsList;
    }
  },
  actions: {
    getHeroList({commit, state}, payload){//可以向store.commit传入额外的参数，即mutation的载荷payload
      console.log(payload.tabVal);
      switch (payload.tabVal) {
        case 'tank':
          commit('getTanksData');
          break;
        case 'warrior':
          commit('getWarriorsData');
          break;
        case 'wizard':
          commit('getWizardData');
          break;
        case 'shooter':
          commit('getShootersData');
          break;
        case 'assassin':
          commit('getAssassinData');
          break;
        case 'assist':
          commit('getAssistData');
          break;
        default:
          commit('getTanksData');
      }
    },
  }
})
