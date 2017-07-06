<template>
  <div class="news_style">
      <mu-tabs :value="activeTab" @change="handleTabChange">
          <mu-tab value="all" title="全部"></mu-tab>
          <mu-tab value="tank" title="坦克"></mu-tab>
          <mu-tab value="warrior" title="战士"></mu-tab>
          <mu-tab value="wizard" title="法师"></mu-tab>
          <mu-tab value="shooter" title="射手"></mu-tab>
          <mu-tab value="assassin" title="刺客"></mu-tab>
          <mu-tab value="assist" title="辅助"></mu-tab>
      </mu-tabs>
      <div v-if="activeTab === 'all'"><!--全部-->
          <tank></tank>
          <warrior></warrior>
          <wizard></wizard>
          <shooter></shooter>
          <assassin></assassin>
          <assist></assist>
      </div>
      <div v-if="activeTab === 'tank'"><tank></tank></div><!--坦克-->
      <div v-if="activeTab === 'warrior'"><warrior></warrior></div><!--战士-->
      <div v-if="activeTab === 'wizard'"><wizard></wizard></div><!--法师-->
      <div v-if="activeTab === 'shooter'"><shooter></shooter></div><!--射手-->
      <div v-if="activeTab === 'assassin'"><assassin></assassin></div><!--刺客-->
      <div v-if="activeTab === 'assist'"><assist></assist></div><!--辅助-->
  </div>
</template>
<script>
import {mapState} from 'Vuex'
import tank from './heroClassify/tank'
import warrior from './heroClassify/warrior'
import wizard from './heroClassify/wizard'
import shooter from './heroClassify/shooter'
import assassin from './heroClassify/assassin'
import assist from './heroClassify/assist'
export default {
  name: 'news',
  data() {
    return {
        // newsData:this.$store.state.newsData
        activeTab: 'all'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val;
    }
  },
  computed: mapState({
    newsData: state => state.bannersNewsData
  }),
  created(){
    this.$store.commit('getBannersNewsData');
  },
  components: {
    tank,
    warrior,
    wizard,
    shooter,
    assassin,
    assist
  }
}
</script>
<style lang="less">
  .mu-tab-common (@fontColor: #333333){
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: @fontColor;
  }
  .news_style {
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
  }
</style>
