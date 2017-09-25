<template>
  <div class="heroIntroduce">
      <div class="sp_banner">
          <div class="">
            <img :src="heroInfo.imgSrc" alt="heroName">
          </div>
          <div class="hero-info">
              <h3>{{heroInfo.name}}</h3>
              <!-- <h3>{{heroName}}</h3> -->
          </div>
      </div>
      <div class="hero_introduce_nav">
          <mu-tabs :value="activeTab" @change="handleTabChange">
              <mu-tab value="introduce" title="介绍"></mu-tab>
              <mu-tab value="skillPlus" title="技能加点"></mu-tab>
              <mu-tab value="useSkill" title="使用技巧"></mu-tab>
              <!-- <mu-tab value="strategy" title="攻略"></mu-tab> -->
          </mu-tabs>
          <div v-if="activeTab === 'introduce'"><introduce></introduce></div><!--介绍-->
          <div v-if="activeTab === 'skillPlus'"><skillPlus></skillPlus></div><!--技能加点-->
          <div v-if="activeTab === 'useSkill'"><useSkill></useSkill></div><!--使用技巧-->
          <!-- <div v-if="activeTab === 'strategy'"><strategy></strategy></div> 攻略-->
      </div>
  </div>
</template>

<script>
import introduce from './introduce.vue'
import skillPlus from './skillPlus.vue'
import useSkill from './useSkill.vue'
import strategy from './strategy.vue'
import {mapState} from 'vuex'
export default {
  data () {
    return {
        activeTab: "introduce",
        // heroName: ''
    }
  },
  methods: {
    handleTabChange(val){
      this.activeTab = val;
    }
  },
  components: {
      introduce,
      skillPlus,
      useSkill,
      strategy
  },
  computed: mapState({
      heroInfo: state => state.heroInfo
  }),
  created(){
      // this.heroName = this.$route.params.name;
      this.$store.commit('getHeroInfo', {
        name: this.$route.params.name
      });
      this.$store.commit('getHeroSkillPlus', {//已进入英雄介绍就先获取一下数据，用于初始化
        name: this.$route.params.name
      });
  }
}
</script>

<style lang="less">
.heroIntroduce {
  padding-bottom: 2.6rem;
}
.sp_banner {
    margin-top: 3.16rem;
    background-size: cover;
    border-radius: 5px;
    height: 15rem;
    position: relative;
    img {
      height: 15rem;
      width: 25rem;
    }
}
.hero-info {
    color: #fff;
    position: absolute;
    bottom: 0rem;
    padding-left: 1rem;
}

.mu-tab-common (@fontColor: #333333){
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: @fontColor;
}
.hero_introduce_nav {
  padding-top: 10px;
  .mu-tabs {
    background: #fff;
    color: #DAA520;
    z-index: 1;
  }
  .mu-tab {
      &-link {
        .mu-tab-common();
        border-bottom: 1px solid #d7d7d7;
      }
      &-active {
        .mu-tab-common(#DAA520);
      }
  }
}
</style>
