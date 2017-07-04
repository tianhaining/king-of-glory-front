<template>
  <div class="">
    <!-- <mu-auto-complete hintText="请随便输入点啥" @input="handleInput" :dataSource="dataSource" @change="handleChange"></mu-auto-complete>
    <mu-auto-complete hintText="请随便输入点啥" labelFloat label="full width" fullWidth @input="handleInput" :dataSource="dataSource"></mu-auto-complete> -->
    <mu-auto-complete filter="noFilter" label="显示icon" labelFloat :dataSource="dataSource"></mu-auto-complete><br/>
    <mu-auto-complete filter="noFilter" label="focus" openOnFocus labelFloat :dataSource="focusData"></mu-auto-complete>
  </div>
</template>
<script>
export default {
  data(){
    return {
      dataSource: [{
        value: 't1',
        text: '第一个Icon',
        rightIcon: 'inbox'
      },{
        value: 't2',
        text: '第二个Icon',
        rightIcon: 'info'
      },{
        value: 't3',
        text: '第三个Icon',
        rightIcon: 'search'
      }],
      focusData: ['123456', '789723', '775873']
    }
  },
  methods: {
    handleChange(val){
      console.log(`you choose ${val}`);
    },
    handleInput (val){
      this.dataSource = [
        val,
        val + val,
        val + val + val
      ]
    }
  }
}
</script>

<style lang="css">

</style>
