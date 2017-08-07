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
import {mapState} from 'vuex'
export default {
  data () {
    return {
      bottomNav: 'news'
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
  },
  created () {
    //TODO 用于刷新的时候底部导航的显示
    if (this.$route.name == 'heroIntroduce') {
        this.bottomNav = 'hero';
    }else {
        this.bottomNav = this.$route.name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@font-size: 35px;
.mu-paper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  .mu-bottom-nav {
    height: 110px;
    background-color: #474a4f;
    i {
      font-size: @font-size;
    };
    span {
      font-size: @font-size;
    };
    button {
      margin: 0 auto;
    };
  }
}
.mu-bottom-item {
  &-active {
    .mu-bottom-item {
      @kingColor: #DAA520;
      &-text {
        color: @kingColor;
      };
      &-icon {
        color: @kingColor;
      }
    }
  }
}
</style>
