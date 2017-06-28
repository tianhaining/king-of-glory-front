<template>
  <div>
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="news" title="资讯" icon="fiber_new"/>
        <mu-bottom-nav-item value="hero" title="英雄" icon="pets"/>
        <mu-bottom-nav-item value="strategy" title="攻略" icon="books"/>
        <mu-bottom-nav-item value="player" title="玩家" icon="person"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'news',
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val;
      this.$router.push({name: val});
      this.setTitle(val);
    },
    setTitle (val){
      this.$store.commit('set_title', val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.mu-paper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  .mu-bottom-nav {
    height: 110px;
    i {
      font-size: 35px;
    };
    span {
      font-size: 35px;
    };
    button {
      margin: 0 auto;
    }
  }
}
</style>
