<template>
  <div>
      <p>我是资讯</p>
      <p>{{newsData}}</p>
  </div>
</template>
<script>
import {mapState} from 'Vuex'
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
  }
}
</script>
<style lang="less" scoped>

</style>
