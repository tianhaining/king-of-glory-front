<template lang="html">
  <div class="imgInfo">
    <div class="imgInfo-img">
        <img :src="dataObj.imgSrc" alt="">
    </div>
    <div class="imgInfo-title">
        <p class="summary">{{dataObj.text}}</p>
        <p class="number"><span>{{dataObj.time}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['dataObj']
}
</script>

<style lang="less">
.imgInfo {
  padding-bottom: .56rem;
  margin-bottom: .56rem;
  border-bottom: 1px solid #d4d9de;
  display: flex;
  flex-direction: row;
  &-img {
    display: flex;
    img {
      width: 7rem;
      height: 4rem;
    }
  }
  &-title {
    padding-left: 1rem;
    .summary {
      font-size: .85rem;
      color: #343440;
      margin: 0rem;
      height: 2.86rem;
    }
    .number {
        margin: 0rem;
        color: #7a7a80;
        span{
            font-size: .86rem;
        }
    }
  }
}
</style>
