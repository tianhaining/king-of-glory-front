<template>
  <div class="">
    <mu-flexbox wrap="wrap" v-for="(heroRow, index) in heroList" :key="index">
      <mu-flexbox-item class="flex-demo" v-for="(item, index) in heroRow" :key="index">
        <card v-bind:cardInfo="item"></card>
      </mu-flexbox-item>
    </mu-flexbox>
    <!-- <button type="button" name="button" @click="postList">发送数据</button> -->
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
      postList(){
        this.$store.commit('postVideoPlayDataList');
      }
  },
  props: ['heroList']
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
