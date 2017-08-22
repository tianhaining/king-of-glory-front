<template>
  <div class="game">
    <div class="game-header">
      <div class="game-header-info">
        <span class="game-header-info-span1">王者荣耀 冠军杯</span>
        <span class="game-header-info-span2">官方举办</span>
      </div>
      <div class="game-header-time">2017-07-27至2017-08-19</div>
      <div class="game-header-status"><span>已结束</span></div>
    </div>
    <div class="game-img"></div>
    <div class="game-news">
      <div class="game-news-header">赛事资讯</div>
      <div class="game-news-list">
        <ul class="game-news-list-ui">
          <li  class="game-news-list-ui-li" v-for="item, index in gameNewsList" :key="index">
            <a class="game-news-list-ui-li-a" :href="item.srcStr">{{item.title}}</a>
            <time>{{item.dateStr}}</time>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'game',
  data() {
    return {

    }
  },
  computed: mapState({
    gameNewsList: state => state.gameNewsList
  }),
  created(){
    this.$store.commit('getGameNewsList');
  }
}
</script>
<style lang="less" scoped>
.commonStyle(@fontSize, @height, @lineHeight){
  font-size: @fontSize;
  height: @height;
  line-height: @lineHeight;
}
.game {
  padding: 3.26rem 0 2rem 0;
  &-header {
    padding: .86rem;
    &-info{
      &-span1 {
        color: #00ADFF;
        font-weight: bold;
        font-size: 1.25rem;
      }
      &-span2 {
        font-size: 1rem;
        padding: .5% 2%;
        margin-left: 1rem;
        border: 1px solid #A2A2A2;
        color: #A2A2A2;
        border-radius: 50px;
      }
    }
    &-time {
      color: #676869;
      font-size: .86rem;
    }
    &-status {
      padding-top: .86rem;
      span {
        padding: 0.2rem 0.4rem;
        color: #fff;
        border-radius: 20px;
        background: #00ADFF;
        font-size: .76rem;
      }
    }
  }
  &-img {
    background: url('http://ossweb-img.qq.com/upload/webplat/info/yxzj/20170804/87428531900176.jpg');
    background-size: cover;
    height: 546px;
  }
  &-news {
    padding-top: .86rem;
    &-header {
      .commonStyle(1rem, 2rem, 2rem);
      text-align: center;
      color: #A2A2A2;
      background: #e4e4e4;
    }
    &-list {
      &-ui {
        padding-left: 1rem;
        padding-right: 1rem;
        &-li {
          padding: .43ewm .86rem;
          list-style: none;
          height: 2.2rem;
          &-a {
            display: inline-block;
            .commonStyle(1rem, 2.2rem, 2.2rem);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 85%;
          }
          time {
            float: right;
            color: #9e9e9e;
            .commonStyle(.9rem, 2.2rem, 2.2rem);
          }
        }
      }
    }
  }
}
</style>
