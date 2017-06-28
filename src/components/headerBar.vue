<template>
  <div>
    <mu-appbar :title="title"></mu-appbar>
  </div>
</template>

<script>
import {mapState} from 'Vuex'
export default {
  name: 'headerBar',
  data () {
    return {
      // title: 'news'
    }
  },
  computed: mapState({
    title: state => state.title
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.mu-appbar {
  height: 100px;
  .mu-appbar-title {
    text-align: center;
    span {
      font-size: 40px;
    }
  }
}
</style>
