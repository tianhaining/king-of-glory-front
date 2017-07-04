<template>
  <div class="">
    <!--用来显示用户头像或者简短的文字和图标-->
    <mu-list>
      <mu-list-item title="图标" disabled>
        <mu-avatar slot="left" icon="folder" color="orange200" backgroundColor="pink400" :size="60" :iconSize="50"></mu-avatar>
      </mu-list-item>
      <mu-list-item title="文字" disabled>
        <mu-avatar slot="left" color="deepOrange300" backgroundColor="purple500">MB</mu-avatar>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
</style>
