<template lang="html">
  <div class="recommend">
      <span>{{objList.title}}</span>
      <div class="recommend-img">
          <mu-flexbox>
            <mu-flexbox-item v-for="item, index in objList.packList" :key="index">
              <img :src="item.imgSrc" :alt="item.title">
              <div class="mu-flexbox-item-name">{{item.title}}</div>
            </mu-flexbox-item>
          </mu-flexbox>
      </div>
      <div class="recommend-tip">
          <p>{{objList.tip}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props: ['objList']
}
</script>

<style lang="less">
@color: #7a7a80;
.smallFont(@width) {
  font-size: .8rem;
  color: @color;
  line-height: 1rem;
  width: @width;
  white-space: nowrap;
  overflow: hidden;
}
.recommend {
    padding-top: 1rem;
    .mu-flexbox {
      &-item {
        text-align: center;
        margin-right: 0px;
        max-width: 14rem;
        img {
          border-radius: 2rem;
          width: 3rem;
          height: 3rem;
        }
        &-name {
          .smallFont(3.9rem);
        }
      }
    }
    &-img {
      padding-top: 1rem;
    }
    &-tip {
      p{
          padding-bottom: .46rem;
          padding-top: .56rem;
          color: @color;
          font-size: .86rem;
      }
    }
}
</style>
