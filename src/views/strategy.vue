<template>
  <div class="strategy">
      <div class="strategy-banner">
          <slide :slideList="strategyBannerNews"></slide>
      </div>
      <div class="strategy-div">
          <h3 class="strategy-div-h3-video">热门视频</h3>
          <div class="strategy-div-video">
              <mu-flexbox v-for="item, index in strategyVideoList" :key="index">
                  <mu-flexbox-item v-for="cardInfo, index in item" :key="index">
                    <videoCard :videoCard="cardInfo"></videoCard>
                  </mu-flexbox-item>
              </mu-flexbox>
          </div>
      </div>
      <div class="strategy-div">
        <h3 class="strategy-div-h3-img">图文攻略</h3>
        <strategyImgText :dataObj="item" v-for="item, index in strategyDataList" :key="index"></strategyImgText>
      </div>
  </div>
</template>
<script>
import slide from '@/components/slide.vue'
import {mapState} from 'vuex'
import videoCard from '@/components/videoCard.vue'
import strategyImgText from '@/components/strategyImgText.vue'
export default {
  name: 'strategy',
  data() {
    return {
      strategyDataList: [{
        imgSrc: 'http://itea-cdn.qq.com/file/tgl/20170811/1502441616.efd6a85fea5857fbad71d1a18ee8c38f.jpg',
        text: '【一图识英雄】铁血都督周瑜，烽火连天战峡谷',
        time: '08-13'
      },{
        imgSrc: 'http://itea-cdn.qq.com/file/tgl/20170810/1502369343.e9fc181d928df160a247a7cd42f0fafc.jpg',
        text: '团控女神甄姬冰冻全场',
        time: '08-11'
      },{
        imgSrc: 'http://itea-cdn.qq.com/file/tgl/20170809/1.1502288431.40282f39b22df8509aeea1061c4d1046.jpg',
        text: '装备详解，末世适合于哪些射手英雄',
        time: '08-10'
      },{
        imgSrc: 'http://itea-cdn.qq.com/file/tgl/20170803/1501756573.e9517bd4d5643fbdbeb27e6c3e29852d.jpg',
        text: '刘禅只是辅助坦克？这些召唤师技能改变思路！',
        time: '08-09'
      },{
        imgSrc: 'http://shp.qpic.cn/inewspic/791243504/d8bce3f8660e886241a9d43907e5de64/0/',
        text: '长城守卫军策划探秘之百里守约篇',
        time: '08-05'
      },{
        imgSrc: 'http://shp.qpic.cn/inewspic/492250695/aa2784171d799d4f70ce2c219e25f88c/0/',
        text: '命运的邂逅，长城下重生的异乡人',
        time: '07-12'
      }]
    }
  },
  components: {
      slide,
      videoCard,
      strategyImgText
  },
  computed: mapState({
      strategyBannerNews: state => state.strategyBannerNews,
      strategyVideoList: state => state.strategyVideoList
  }),
  created(){
      this.$store.commit('getStrategyBannerNews');
      this.$store.commit('getStrategyVideoList');
  }
}
</script>
<style lang="less" scoped>
.div-h3(@url) {
  background: url(@url) no-repeat 0 .26rem;
  background-size: 1rem 1rem;
  padding-left: 1.26rem;
  font-size: 1.05rem;
  margin-top: 0.26rem;
}
.strategy {
    padding: 3.2rem 0;
    &-div {
      background: #fff;
      padding: .86rem;
      margin-bottom: 1rem;
      &-h3-video {
          .div-h3('http://game.gtimg.cn/images/yxzj/m/m201706/images/strategy/icon_01.png');
      }
      &-video {
          .mu-flexbox {
            margin-bottom: 1rem;
            &-item {
                max-width: 15rem;
                margin-right: 0;
            }
          }
      }
      &-h3-img {
          .div-h3('http://game.gtimg.cn/images/yxzj/m/m201706/images/strategy/icon_05.png');
      }
    }
}
</style>
