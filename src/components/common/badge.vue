<template>
  <div class="demo-badge-container">
    <mu-badge content="10" class="demo-icon-badge" circle secondary badgeClass="test">
      <mu-icon value="notifications" v-bind:size="100"/>
    </mu-badge>
    <mu-badge content="12" circle secondary>
      <mu-icon-button icon="notifications"></mu-icon-button>
    </mu-badge>
    <mu-badge class="demo-badge-content">
      <mu-icon value="folder_open"/>
      <mu-icon value="cloud_upload" slot="content"/>
    </mu-badge>
    <mu-badge class="demo-badge-content">
      版权信息
      <span style="font-size 20px;">&copy;</span>
    </mu-badge>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style lang="less">
.mu-icon {
  font-size: 80px;
}
.test {
  height: 50px;
  width: 50px;
  font-size: 40px;
}
.demo-badge-container {
  padding-top: 24px;
}
.demo-icon-badge {
  padding: 12px;
  margin-right: 16px;
}
.demo-badge-content {
  padding: 12px;
  .mu-badge {
    background-color: inherit;
    color: inherit;
  }
}
</style>
