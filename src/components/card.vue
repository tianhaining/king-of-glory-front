<template>
  <div class="">
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
  props: ['cardInfo']
}
</script>

<style lang="less">
.mu-card-title-container {
  text-align: center;
  font-size: 40px;
}
</style>
