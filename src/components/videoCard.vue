<template lang="html">
    <div class="videoCard">
        <div class="videoCard-img" @click="goVideoPlay">
            <img class="videoCard-img-img" :src="videoCard.imgSrc" alt="">
            <span class="videoCard-img-click"></span>
            <i>{{videoCard.time}}</i>
        </div>
        <div class="videoCard-text">
              {{videoCard.text}}
        </div>
        <div class="videoCard-number">
            <span class="videoCard-number-span1">{{videoCard.clickNum}}</span>
            <span class="videoCard-number-span2">{{videoCard.lastClickTime}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    props: ['videoCard'],
    methods: {
        goVideoPlay(){
            this.$router.push('videoPlay');
        }
    }
}
</script>

<style lang="less">
.small-span{
  font-size: .86rem;
  color: #7a7a80;
}
.videoCard {
    &-img {
      &-img {
          border-radius: .26rem;
          z-index: 1;
          width: 11.16rem;
          height: 6.56rem;
      }
      &-click{
          display: block;
          width: 4rem;
          height: 4rem;
          position: relative;
          text-align: center;
          margin-top: -5.86rem;
          margin-left: auto;
          margin-right: auto;
          background: url('http://game.gtimg.cn/images/yxzj/m/m201706/images/strategy/video-img.png') no-repeat center;
          background-size: 2.16rem;
      }
      i {
          color: #fff;
          margin-left: 8.26rem;
          font-size: .76rem;
      }
    }
    &-text {
        padding: .26rem .76rem .26rem 0;
        font-size: .86rem;
        overflow: hidden;
        height: 2.86rem;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        margin: .36rem auto;
    }
    &-number {
        line-height: .96rem;
        &-span1 {
            .small-span;
            background: url('http://game.gtimg.cn/images/yxzj/m/m201706/images/strategy/video-fre.png') no-repeat;
            background-size: .96rem;
            padding-left: 1.26rem;
        }
        &-span2 {
            .small-span;
            margin-left: 3.06rem;
        }
    }
}
</style>
