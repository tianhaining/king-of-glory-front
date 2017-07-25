<template>
  <div class="">
    <mu-flexbox wrap="wrap" v-for="tankRow in cardInfoList">
      <mu-flexbox-item class="flex-demo" v-for="item in tankRow">
        <card v-bind:cardInfo="item"></card>
      </mu-flexbox-item>
    </mu-flexbox>
    <!-- <button type="button" name="button" @click="postTanksList">发送数据</button> -->
  </div>
</template>

<script>
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
      splitArray(arr, len){
          let a_len = arr.length;
          let result = [];
          for (var i = 0; i < a_len; i+=len) {
            result.push(arr.slice(i, i+len));
          }
          return result;
      }
  },
  created (){
    //获取坦克数据
    this.$store.commit('getTanksData');

    this.cardInfoList = this.splitArray(this.$store.state.tanksList, 4);
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
