<template lang="html">
  <div class="slide">
    <swiper :options="swiperOption">
      <swiper-slide v-for="news in slideList" :key="news._id">
          <img :src="news.image_url_big" class="banner-item"  :alt="news.title" height="100%" width="100%">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data(){
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000
      }
    }
  },
  props: ['slideList'],
  components: {
      swiper,
      swiperSlide
  }
}
</script>

<style lang="less">

</style>
