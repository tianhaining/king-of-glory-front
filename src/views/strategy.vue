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
        <h3 class="strategy-div-h3-img">图文攻略<span>  (外部链接)</span></h3>
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
      
    }
  },
  components: {
      slide,
      videoCard,
      strategyImgText
  },
  computed: mapState({
      strategyBannerNews: state => state.strategyBannerNews,
      strategyVideoList: state => state.strategyVideoList,
      strategyDataList: state => state.strategyDataList
  }),
  created(){
      this.$store.commit('getStrategyBannerNews');
      this.$store.commit('getStrategyVideoList');
      this.$store.commit('getStrategyDataList');
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
          span {
            color: #7a7a80;
            font-size: .86rem;
          }
      }
    }
}
</style>
