<template>
  <div class="landing-page">
    <div class="landing-page-content">
      <p class="landing-page-content_tip">王者荣耀助手</p>
      <p class="landing-page-content_enter">
        <mu-raised-button label="Welcome" class="demo-raised-button" @click="enter" primary/>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  methods: {
    enter() {
      this.$router.push('/home/news');
    }
  }
}
</script>
<style lang="less" scoped>
.landing-page {
  width: 100%;
  height: 100%;
  background: url('../assets/king-of-glory.jpg') no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  &-content {
    &_tip {
      width: 100%;
      padding: 200px 0;
      font-size: 35px;
      color: #fff;
      font-weight: bold;
    }
    &_enter {
      width: 100%;
      text-align: center;
      font-size: 35px;
    }
  }
}
</style>
