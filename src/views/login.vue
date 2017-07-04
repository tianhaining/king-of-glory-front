<template>
  <div class="landing-page">
    <div class="landing-page-content">
      <!-- <p class="landing-page-content_tip">王者荣耀助手</p> -->
      <p class="landing-page-content_enter">
        <mu-raised-button label="进入" class="demo-raised-button" @click="enter" primary/>
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
.common-style (@fontSize: 35px){
  width: 100%;
  font-size: @fontSize;
}
.landing-page {
  width: 100%;
  height: 100%;
  background: url('../assets/page1.jpg') no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  &-content {
    position: fixed;
    bottom: 0px;
    &_tip {
      .common-style();
      padding: 200px 0;
      color: #fff;
      font-weight: bold;
    }
    &_enter {
      .common-style();
      text-align: center;
      padding: 30px;
    }
  }
}
.mu-raised-button {
  &-inverse {
    padding: 30px;
    color: #DAA520;
  }
}
</style>
