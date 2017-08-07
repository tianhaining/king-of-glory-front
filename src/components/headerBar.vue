<template>
  <div>
    <!-- <mu-appbar :title="title"></mu-appbar> -->
    <mu-appbar :title="title">
      <mu-raised-button slot="left" class="logo_style"/>
      <mu-flat-button label="王者相见，打成一片" slot="left"/>
    </mu-appbar>
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
  }),
  created () {
    //TODO 用于处于不同页面的时刷新底部显示
    this.$store.commit('set_title', this.$route.name);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.header_common_style (@fontSize, @color) {
  font-size: @fontSize;
  color: @color;
}
.logo_style {
  background: url('../assets/logo.png') no-repeat;
  height: 80px;
}
.mu-appbar {
  height: 130px;
  padding: 0 40px;
  position: fixed;
  top: 0px;
  &-title {
    text-align: right;
    span {
      .header_common_style(40px, #DAA520);
    }
  }
}
.mu-flat-button {
  &-label {
    .header_common_style(35px, #7e859e);
  }
}
</style>
