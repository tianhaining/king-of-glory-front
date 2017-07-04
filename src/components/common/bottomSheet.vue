<template>
  <div class="">
      <mu-raised-button @click="openBottomSheet" label="Open Bottom Sheet"/>
      <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet" sheetClass="sheetStyle">
          <mu-list @itemClick="closeBottomSheet">
            <mu-sub-header>
              请选择一个
            </mu-sub-header>
            <mu-list-item title="阴阳师"></mu-list-item>
            <mu-list-item title="贪吃蛇大作战"></mu-list-item>
            <mu-list-item title="一划到底"></mu-list-item>
            <mu-list-item title="全民斗地主"></mu-list-item>
          </mu-list>
      </mu-bottom-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomSheet: false
    }
  },
  methods: {
    openBottomSheet () {
      this.bottomSheet = true;
    },
    closeBottomSheet () {
      this.bottomSheet = false;
    }
  }
}
</script>

<style lang="less">
@fontSize: 40px;
.mu-sub-header {
  font-size: @fontSize;
}
.mu-item-title {
  font-size: @fontSize;
}
</style>
