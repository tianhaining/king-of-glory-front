<template>
    <div class="news">
      <div class="news-banners">
        <swiper :options="swiperOption">
          <swiper-slide v-for="news in bannerNews" :key="news._id">
              <img :src="news.image_url_big" class="banner-item"  :alt="news.title" height="20%" width="100%">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="news-list">
        <div class="news-list-item" v-for="news in newstNews">
          <a :href="news.article_url">
            <div class="news-list-item-img">
              <img :src="news.image_url_small" alt="">
            </div>
            <div class="news-list-item-title">
              <p class="title">{{ news.title }}</p>
              <p class="summary">{{ news.summary }}</p>
              <p class="time">
                {{ news.publication_date.split(' ')[0] }}
                <span class="pv">
                  {{ news.pv | pv }}阅
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
</template>
<script>
import {mapState} from 'Vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import { newstNews } from '../data'
import { pv } from '../filters'
export default {
  name: 'news',
  data() {
    return {
        // newsData:this.$store.state.newsData
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 3000
        },
        //newstNews: newstNews,
        // bannerNews: bannerNews
        //count: 1
    }
  },
  methods: {
    // postNewsTest (){
    //   this.count ++;
    //   if (this.count == 3){
    //     this.count = 1;
    //   }
    //   this.$store.commit('postNewsData');
    // }
  },
  filters: {
    pv
  },
  computed: mapState({
    bannerNews: state => state.bannersNewsData,
    newstNews: state => state.newsData
  }),
  created(){
      //获取轮播图片数据
      this.$store.commit('getBannersNewsData');
      //获取资讯数据
      this.$store.commit('getNewsData');
  },
  components: {
      swiper,
      swiperSlide
  }
}
</script>
<style lang="less" scoped>
  .news {
    padding: 130px 0;
    &-list {
      background: #f0f0f0;
      padding: 0 10px;
      padding-top: 5px;
      &-item {
        margin-bottom: 10px;
        a {
          background: #fff;
          display: flex;
          flex-direction: row;
          padding: 10px 0;
        }
        &-img {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 270px;
            height: 250px;
          }
        }
        &-title {
          padding-left: 35px;
          .title {
            font-size: 34px;
          }
          .summary {
            font-size: 32px;
            color: #999;
            padding: 2px 0;
          }
          .time {
            font-size: 32px;
            color: #999;
            .pv {
              color: golerenrod;
            }
          }
        }
      }
    }
  }
</style>
