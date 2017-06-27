<template>
  <div>
    <mu-appbar title="Title"></mu-appbar>
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
.mu-appbar {
  height: 100px;
  .mu-appbar-title {
    text-align: center;
    span {
      font-size: 40px;
    }
  }
}
</style>
