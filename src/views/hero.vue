<template>
  <div class="hero_style">
      <mu-tabs :value="activeTab" @change="handleTabChange">
          <mu-tab value="all" title="全部"></mu-tab>
          <mu-tab value="tank" title="坦克"></mu-tab>
          <mu-tab value="warrior" title="战士"></mu-tab>
          <mu-tab value="wizard" title="法师"></mu-tab>
          <mu-tab value="shooter" title="射手"></mu-tab>
          <mu-tab value="assassin" title="刺客"></mu-tab>
          <mu-tab value="assist" title="辅助"></mu-tab>
      </mu-tabs>
      <div class="all" v-if="activeTab === 'all'"><!--全部-->
          <tank></tank>
          <warrior></warrior>
          <wizard></wizard>
          <shooter></shooter>
          <assassin></assassin>
          <assist></assist>
      </div>
      <div class="all" v-if="activeTab === 'tank'"><tank></tank></div><!--坦克-->
      <div class="all" v-if="activeTab === 'warrior'"><warrior></warrior></div><!--战士-->
      <div class="all" v-if="activeTab === 'wizard'"><wizard></wizard></div><!--法师-->
      <div class="all" v-if="activeTab === 'shooter'"><shooter></shooter></div><!--射手-->
      <div class="all" v-if="activeTab === 'assassin'"><assassin></assassin></div><!--刺客-->
      <div class="all" v-if="activeTab === 'assist'"><assist></assist></div><!--辅助-->
  </div>
</template>
<script>
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
        activeTab: 'all'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val;
    }
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
    .all {
      padding: 30px 0px 30px 30px;
    }
  }
</style>
