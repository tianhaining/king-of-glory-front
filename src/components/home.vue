<template>
  <div class="home">
      <header-bar></header-bar>
      <div class="home-container" id="home-container">
        <transition name="">
          <router-view></router-view>
        </transition>
      </div>
      <footer-nav></footer-nav>
  </div>
</template>

<script>
import headerBar from './headerBar'
import footerNav from './footerNav'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    headerBar,
    footerNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.home {
  a {
    color: #333 !important;
  }
  &-container {
    width: 100%;
    // position: absolute;
    // top: 45px;
    // bottom: 56px;
    overflow-y: scroll;
    font-size: 35px;
  }
}
.bounce-enter-active, .bounce-leave-active {
  animation: slideInRight 0.1s;
}
.bounce-enter, .bouncede-leave-to /* .fade-leave-active in <2.1.8 */ {
  animation: slideOutLeft 0.1s;
}
</style>
