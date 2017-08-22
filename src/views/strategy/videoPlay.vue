<template lang="html">
    <div class="videoPlay">
        <myVideo :sources="videoData.video.sources" :option="videoData.video.options"></myVideo>
        <div class="videoInfo">
            <a>
              <div class="videoInfo-img">
                  <img :src="videoData.imgSrc" alt="">
              </div>
              <div class="videoInfo-title">
                  <p class="summary">{{videoData.summary}}</p>
                  <p class="number"><span>投稿：{{videoData.number}}</span><span>粉丝：{{videoData.fans}}</span></p>
              </div>
            </a>
        </div>
    </div>
</template>

<script>
import myVideo from 'vue-video'
export default {
    data () {
       return {
         videoData: {
           index: 1,
           channelName: '跟我上王者',
           video: {
               sources: [{
                 src: 'static/video/video1.mp4',
                 type: 'video/mp4'
               }],
               options: {
                 autoplay: true,
                 volume: 0.6,
                 poster: 'http://covteam.u.qiniudn.com/poster.png'
               }
           },
           imgSrc: 'https://ossweb-img.qq.com/images/pvp/v/pic_tl1.jpg',
           summary: '跟我上王者 第36期：兰陵王隐身突进，五分钟教你血洗后排！',
           number: '92',
           fans: '5943'
         }
       }
    },
    components: {
        myVideo
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
