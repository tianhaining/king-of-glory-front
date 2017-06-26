<template>
  <div>
    <mu-paper style="max-width: 376px; ">
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
        <mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
        <mu-bottom-nav-item value="books" title="Books" icon="books"/>
        <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'footerNav',
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
