<template lang="html">
    <div class="videoPlay">
        <myVideo :sources="videoPlayData.video.sources" :option="videoPlayData.video.options"></myVideo>
        <div class="videoInfo">
            <a>
              <div class="videoInfo-img">
                  <img :src="videoPlayData.imgSrc" alt="">
              </div>
              <div class="videoInfo-title">
                  <p class="summary">{{videoPlayData.summary}}</p>
                  <p class="number"><span>投稿：{{videoPlayData.number}}</span><span>粉丝：{{videoPlayData.fans}}</span></p>
              </div>
            </a>
        </div>
    </div>
</template>

<script>
import myVideo from 'vue-video'
import {mapState} from 'vuex'
export default {
    data () {
       return {

       }
    },
    components: {
        myVideo
    },
    computed: mapState({
        videoPlayData: state => state.videoPlayData
    }),
    created () {
      this.$store.commit('getVideoPlayData', {
        index: this.$route.params.index//此处放的是index,而不是路由参数对象
      });
    }
}
</script>

<style lang="less">
.videoPlay {
    padding: 2.86rem 0;
}
.videoInfo {
  padding-top: 1rem;
  a {
    background: #fff;
    display: flex;
    flex-direction: row;
    padding: 1rem;
  }
  &-img {
    display: flex;
    img {
      width: 4rem;
      height: 4rem;
    }
  }
  &-title {
    padding-left: 1rem;
    .summary {
      font-size: .85rem;
      color: #343440;
      margin: 0rem;
    }
    .number {
        margin-top: .26rem;
        color: #7a7a80;
        span{
            font-size: .86rem;
        }
    }
  }
}
</style>
