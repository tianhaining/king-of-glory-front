<template>
  <div class="">
    <h2>坦克</h2>
    <p>这是坦克</p>
    <mu-flexbox class="mt8">
      <mu-flexbox-item class="flex-demo">
        <card></card>
      </mu-flexbox-item>
      <mu-flexbox-item class="flex-demo">
        <card></card>
      </mu-flexbox-item>
    </mu-flexbox>
  </div>
</template>

<script>
import card from '@/components/card.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    card
  }
}
</script>

<style lang="less">

</style>
