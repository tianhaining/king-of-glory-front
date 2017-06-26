<template>
  <div>
    <mu-appbar title="Title">
      <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
      <mu-flat-button color="white" label="flat Button" slot="right"/>
    </mu-appbar>
  </div>
</template>

<script>
export default {
  name: 'headerBar',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
</style>
