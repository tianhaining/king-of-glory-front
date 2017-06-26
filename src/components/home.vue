<template>
  <div>
      <header-bar></header-bar>
      <div>
        <router-view></router-view>
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
<style scoped>

</style>
