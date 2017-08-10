<template>
  <div class="strategy">
      <div class="strategy-banner">
          <slide :slideList="strategyBannerNews"></slide>
      </div>
      <div class="strategy-div">
          <h3 class="strategy-div-h3">热门视频</h3>
          <div class="strategy-div-video">
              <mu-flexbox v-for="item, index in strategyVideoList" :key="index">
                  <mu-flexbox-item v-for="cardInfo, index in item" :key="index"><videoCard :videoCard="cardInfo"></videoCard></mu-flexbox-item>
              </mu-flexbox>
          </div>
      </div>
  </div>
</template>
<script>
import slide from '@/components/slide.vue'
import {mapState} from 'vuex'
import videoCard from '@/components/videoCard.vue'
export default {
  name: 'strategy',
  data() {
    return {

    }
  },
  components: {
      slide,
      videoCard
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
      &-h3 {
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
    }
}
</style>
