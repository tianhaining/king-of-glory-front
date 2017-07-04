<template>
  <div class="news_style">
      <mu-flexbox class="mt8">
        <mu-flexbox-item class="flex-demo">
          <card></card>
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
          <card></card>
        </mu-flexbox-item>
      </mu-flexbox>
      </mu-flexbox>
      <p>{{newsData}}</p>
  </div>
</template>
<script>
import {mapState} from 'Vuex'
import card from '../components/card.vue'
export default {
  name: 'news',
  data() {
    return {
        // newsData:this.$store.state.newsData
    }
  },
  methods: {

  },
  computed: mapState({
    newsData: state => state.newsData
  }),
  created(){
    this.$store.commit('getNewsData');
  },
  components: {
    card
  }
}
</script>
<style lang="less" scoped>
  .news_style {
    padding-top: 150px;
  }
</style>
