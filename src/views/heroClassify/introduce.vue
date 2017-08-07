<template lang="html">
    <div class="introduce">
        <div class="pane">
            <div class="pane-div">
                <h3 class="pane-div-h3-relation">英雄关系</h3>
                <span>最佳搭档</span>
                <introduceImgText :list="introduceObject.bestPartnerList"></introduceImgText>
            </div>
            <div class="pane-div">
                <span>被谁克制</span>
                <introduceImgText :list="introduceObject.beRestrainedList"></introduceImgText>
            </div>
            <div class="pane-div">
                <span>克制谁</span>
                <introduceImgText :list="introduceObject.restrainedList"></introduceImgText>
            </div>
        </div>
        <div class="pane">
            <div class="pane-div">
                <h3 class="pane-div-h3-story">英雄故事</h3>
                <p :class="{'pane-div-p-close': isStoryClose, 'pane-div-p-open': !isStoryClose}">&nbsp;&nbsp;&nbsp;&nbsp;{{introduceObject.story}}</p>
            </div>
            <button class="pane-button" type="button" name="button" @click="openStory(0)">{{storyButtonValue}}</button>
        </div>
        <div class="pane">
            <div class="pane-div">
                <h3 class="pane-div-h3-history">历史上的他</h3>
                <p :class="{'pane-div-p-close': isHistoryClose, 'pane-div-p-open': !isHistoryClose}">&nbsp;&nbsp;&nbsp;&nbsp;{{introduceObject.history}}</p>
            </div>
            <button class="pane-button" type="button" name="button" @click="openStory(1)">{{historyButtonValue}}</button>
        </div>
    </div>
</template>

<script>
import introduceImgText from '@/components/introduceImgText.vue'
export default {
    data(){
        return {
            isStoryClose: true,
            isHistoryClose: true,
            storyButtonValue: '展开全部',
            historyButtonValue: '展开全部'
        }
    },
    components: {
        introduceImgText
    },
    methods: {
      openStory(val){
          if (val == 0) {
              this.isStoryClose = !this.isStoryClose;
              if (this.isStoryClose) {
                  this.storyButtonValue = '展开全部'
              }else {
                  this.storyButtonValue = '收起'
              }
          }else {
              this.isHistoryClose = !this.isHistoryClose;
              if (this.isHistoryClose) {
                  this.historyButtonValue = '展开全部'
              }else {
                  this.historyButtonValue = '收起'
              }
          }
      }
    },
    props: ['introduceObject']

}
</script>

<style lang="less">
/*用于展开与关闭按钮的通用样式*/
.pane-button-normal {
  font-size: .85rem;
  color: #343440;
  margin: 0rem;
  overflow: hidden;
}
.introduce {
  margin: 1rem 0;
}
.div-h3(@url) {
  background: url(@url) no-repeat 0 .26rem;
  background-size: 1rem 1rem;
  padding-left: 1.26rem;
  font-size: 1.1rem;
}
.pane {
    background: #fff;
    &-div {
      padding-top: .1rem;
      margin: .5rem .5rem 0 .5rem;
      border-bottom: 1px solid #999;
      &-p-close {
        .pane-button-normal;
        height: 9rem;
      }
      &-p-open {
        .pane-button-normal;
      }
    }
    &-button {
      display: block;
      width: 100%;
      height: 2rem;
      background-color: #f4f4f4;
      line-height: 2rem;
      text-align: center;
      color: #7a7a80;
      font-size: .86rem;
      border-top: 1px solid #eeeeee;
      border-bottom: 1px solid #d4d9de;
    }
    &-div-h3{
      &-relation {
          .div-h3('http://game.gtimg.cn/images/yxzj/m/m201706/images/herodetail/icon_08.png')
      }
      &-story {
          .div-h3('http://game.gtimg.cn/images/yxzj/m/m201706/images/herodetail/icon_05.png')
      }
      &-history {
          .div-h3('http://game.gtimg.cn/images/yxzj/m/m201706/images/herodetail/icon_10.png')
      }
    }
}
</style>
