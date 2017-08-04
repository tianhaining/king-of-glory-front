<template>
  <div class="">
    <mu-flexbox wrap="wrap" v-for="(tankRow, index) in tanksList" :key="index">
      <mu-flexbox-item class="flex-demo" v-for="(item, index) in tankRow" :key="index">
        <card v-bind:cardInfo="item"></card>
      </mu-flexbox-item>
    </mu-flexbox>
    <!-- <button type="button" name="button" @click="postTanksList">发送数据</button> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'
import card from '@/components/card.vue'
export default {
  data () {
    return {
        cardInfoList: []
    }
  },
  components: {
    card
  },
  methods: {
      // postTanksList(){
      //   this.$store.commit('postTanksList');
      // }
  },
  computed: mapState({
    tanksList: state => state.tanksList
  }),
  created (){
    //获取坦克数据
    this.$store.commit('getTanksData');
  }
}
</script>

<style lang="less">
.mu-flexbox {
  margin-bottom: 30px;
  &-item {
    max-width: 190px;
    min-height: 190px;
    margin: 0px 50px;
  }
}
</style>
