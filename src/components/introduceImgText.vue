<template lang="html">
    <div class="pane-div-list">
      <div class="pane-div-list-item" v-for="(item, index) in list" :key="index">
        <a>
          <div class="pane-div-list-item-img">
            <img :src="item.imgSrc" alt="item.title">
          </div>
          <div class="pane-div-list-item-title">
            <p class="summary">{{item.summary}}</p>
          </div>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: ['list']
}
</script>

<style lang="less">
.pane-div {
  &-list {
    padding: 0 10px;
    &-item {
      margin-bottom: 10px;
      a {
        background: #fff;
        display: flex;
        flex-direction: row;
        padding: 10px 0;
      }
      &-img {
        display: flex;
        img {
          width: 4rem;
          height: 4rem;
        }
      }
      &-title {
        padding-left: 1rem;
        .summary {
          font-size: .85rem;
          color: #343440;
          margin: 0rem;
        }
      }
    }
  }
}
</style>
