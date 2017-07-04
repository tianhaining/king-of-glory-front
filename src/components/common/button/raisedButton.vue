<template>
<div class="demo-raised-button-container">
  <mu-raised-button label="选择文件" class="demo-raised-button">
    <input type="file" class="file-button">
  </mu-raised-button>
  <mu-raised-button label="文字在后面" class="demo-raised-button" icon="android" primary/>
  <mu-raised-button label="文字在前面" class="demo-raised-button" labelPosition="before" icon="folder" secondary/>
  <mu-raised-button label="链接按钮" class="demo-raised-button" href="https://github.com/museui/muse-ui" labelPosition="after" secondary>
    <i class="muodcs-icon-custom-github mu-icon" style="font-size: 24px;"></i>
  </mu-raised-button>
  <mu-raised-button class="demo-raised-button" icon="android" backgroundColor="#a4c639"/>
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
.file-button {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
}
.demo-raised-button-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.demo-raised-button {
  margin: 12px;
}
</style>
