<template>
  <div class="" @click="goHeroIntroduce(cardInfo)">
    <mu-card>
      <mu-card-media>
        <img :src="cardInfo.path" />
      </mu-card-media>
      <mu-card-title :title="cardInfo.title"/>
    </mu-card>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['cardInfo'],
  methods: {
    goHeroIntroduce(cardInfo){
      // this.$router.push('heroIntroduce');
      this.$router.push({name: 'heroIntroduce', params: {name: cardInfo.title}});
    }
  }
}
</script>

<style lang="less">
.mu-card-title-container {
  text-align: center;
  font-size: 40px;
}
</style>
