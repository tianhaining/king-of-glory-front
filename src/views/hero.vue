<template>
  <div class="hero_style">
      <mu-tabs :value="activeTab" @change="handleTabChange">
          <mu-tab value="tank" title="坦克"></mu-tab>
          <mu-tab value="warrior" title="战士"></mu-tab>
          <mu-tab value="wizard" title="法师"></mu-tab>
          <mu-tab value="shooter" title="射手"></mu-tab>
          <mu-tab value="assassin" title="刺客"></mu-tab>
          <mu-tab value="assist" title="辅助"></mu-tab>
      </mu-tabs>
      <div class="hero_style-list"><!--英雄列表展示区域-->
          <heroList :heroList="heroListData"></heroList>
      </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import heroList from './heroClassify/heroList.vue'
export default {
  name: 'hero',
  data() {
    return {
        activeTab: 'tank'
    }
  },
  methods: {
    getHeroList () {
      this.$store.dispatch('getHeroList', {
        tabVal: this.activeTab
      });
    },
    handleTabChange (val) {
      this.activeTab = val;
      this.getHeroList();
    }
  },
  components: {
    heroList
  },
  computed: mapState({
    heroListData: state => state.heroListData
  }),
  created (){
    //初始化获取坦克列表
    this.getHeroList();
  }
}
</script>
<style lang="less">
  .mu-tab-common (@fontColor: #333333){
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: @fontColor;
  }
  .hero_style {
    padding-top: 150px;
    .mu-tabs {
      background: none;
      color: #DAA520;
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
    &-list {
      padding: 30px 0px 30px 30px;
    }
  }
</style>
