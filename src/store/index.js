import Vue from 'Vue'
import Vuex from 'Vuex'
import axios from 'axios'
import { newstNews, tanksList, warriorList, wizardList, shooterList, assassinList, assistList, heroInfo, heroSkillPlus, heroUseSkill, strategyBannerNews, strategyVideoList, strategyDataList, videoPlayDataList, gameNewsList} from '../data'
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
    Host: 'http://10.202.4.244:8000',//后台API域名
    bannersNewsData: '',//资讯轮播图
    newsData: '',//资讯信息
    heroInfo: {},//单个英雄信息
    heroSkillPlus: {},//英雄技能加点
    heroUseSkill: {},//英雄使用技巧
    strategyBannerNews: [],//攻略模块轮播图
    strategyVideoList: {},//攻略热门视频
    strategyDataList: [],//图文攻略
    videoPlayData: {},//视频播放数据对象
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

    postWarriorList(state){
      var warriorListInfo = warriorList;
      warriorListInfo.forEach((val) => {
        axios.post(state.Host + '/api/saveWarriorList', val)
        .then((res) => {
          console.log(res.data.message);
        })
        .catch((error) => {
          console.log(error);
        })
      })
    },
    getWarriorsData(state){
      axios.get(state.Host + '/api/getWarriorList')
      .then(function(res){
          state.heroListData = splitArray(res.data.warriorList, 4);
      })
    },

    postWizardList(state){
      var wizardListInfo = wizardList;
      wizardListInfo.forEach( (val) => {
          axios.post(state.Host + '/api/saveWizardList', val)
          .then((res) => {
            console.log(res.data.message);
          })
          .catch((error) => {
            console.log(error);
          })
      })
    },
    getWizardData(state){
      axios.get(state.Host + '/api/getWizardList')
      .then(function(res){
        state.heroListData = splitArray(res.data.wizardList, 4);
      })
    },

    postShooterList(state){
      var shooterListInfo = shooterList;
      shooterListInfo.forEach( (val) => {
          axios.post(state.Host + '/api/saveShooterList', val)
          .then((res) => {
            console.log(res.data.message);
          })
          .catch((error) => {
            console.log(error);
          })
      })
    },
    getShootersData(state){
      axios.get(state.Host + '/api/getShooterList')
      .then(function(res){
        state.heroListData = splitArray(res.data.shooterList, 4);
      })
    },

    postAssassinList(state){
      var assassinListInfo = assassinList;
      assassinListInfo.forEach( (val) => {
          axios.post(state.Host + '/api/saveAssassinList', val)
          .then((res) => {
            console.log(res.data.message);
          })
          .catch((error) => {
            console.log(error);
          })
      })
    },
    getAssassinData(state){
      axios.get(state.Host + '/api/getAssassinList')
      .then(function(res){
        state.heroListData = splitArray(res.data.assassinList, 4);
      })
    },

    postAssistList(state){
      var assistListInfo = assistList;
      assistListInfo.forEach( (val) => {
          axios.post(state.Host + '/api/saveAssistList', val)
          .then((res) => {
            console.log(res.data.message);
          })
          .catch((error) => {
            console.log(error);
          })
      })
    },
    getAssistData(state){
      axios.get(state.Host + '/api/getAssistList')
      .then(function(res){
        state.heroListData = splitArray(res.data.assistList, 4);
      })
    },
    //TODO 单个英雄介绍
    getHeroInfo(state, payload){//后续处理需要把信息放到数据库
        console.log(payload.name);
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
    getStrategyDataList(state){
        state.strategyDataList = strategyDataList;
    },
    getVideoPlayData(state, payload){
      //console.log(payload);
        state.videoPlayData = videoPlayDataList[payload.index];
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
