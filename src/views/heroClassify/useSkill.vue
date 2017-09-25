<template lang="html">
    <div class="useSkill">
        <div class="pane">
            <div class="pane-div">
                <h3 class="pane-div-h3-recommend">出装推荐</h3>
                <heroIntroduceImgText :objList="heroUseSkill.followPack"></heroIntroduceImgText>
                <hr>
                <heroIntroduceImgText :objList="heroUseSkill.headwindPack"></heroIntroduceImgText>
            </div>
        </div>
        <div class="pane">
            <div class="pane-div">
                <h3 class="pane-div-h3-inscription">铭文推荐</h3>
                <div class="pane-div-recommend">
                    <span></span>
                    <div class="pane-div-inscription">
                        <mu-flexbox>
                          <mu-flexbox-item v-for="item, index in heroUseSkill.inscription" :key="index">
                            <img :src="item.imgSrc" alt="">
                            <div class="mu-flexbox-item-inscription-name">
                              <div v-for="val, index in item.text" :key="index">{{val}}</div>
                            </div>
                          </mu-flexbox-item>
                        </mu-flexbox>
                    </div>
                </div>
            </div>
        </div>
        <div class="pane">
            <div class="pane-div">
                <h3 class="pane-div-h3-use">使用技巧</h3>
                <p class="pane-div-p">{{heroUseSkill.use}}</p>
            </div>
        </div>
        <div class="pane">
            <div class="pane-div">
                <h3 class="pane-div-h3-confront">对抗技巧</h3>
                <p class="pane-div-p">{{heroUseSkill.confront}}</p>
            </div>
        </div>
        <div class="pane">
            <div class="pane-div">
                <h3 class="pane-div-h3-team">团战思路</h3>
                <p class="pane-div-p">{{heroUseSkill.team}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import heroIntroduceImgText from '@/components/heroIntroduceImgText.vue'
import {mapState} from 'vuex'
export default {
    data(){
        return {

        }
    },
    components: {
        heroIntroduceImgText
    },
    computed: mapState({
        heroUseSkill: state => state.heroUseSkill
    }),
    created(){
        this.$store.commit('getHeroUseSkill', {
          name: this.$route.params.name
        });
    }
}
</script>

<style lang="less">
/*通用样式代码*/
@color: #7a7a80;
.smallFont(@width) {
  font-size: .8rem;
  color: @color;
  line-height: 1rem;
  width: @width;
  white-space: nowrap;
  overflow: hidden;
}
.div-h3(@url) {
  background: url(@url) no-repeat 0 .26rem;
  background-size: 1rem 1rem;
  padding-left: 1.26rem;
  font-size: 1.1rem;
}

.useSkill {
  margin: 1rem 0;
}
.pane {
    background: #fff;
    &-div {
      padding-top: .1rem;
      margin: .5rem .5rem 0 .5rem;
      padding-bottom: .5rem;
      &-inscription {
        .mu-flexbox-item {
          height: 10rem;
        }
      }
      .mu-flexbox {
        &-item {
          text-align: center;
          margin-right: 0px;
          max-width: 14rem;
          img {
            border-radius: 2rem;
            width: 3rem;
            height: 3rem;
          }
          &-inscription-name{
              .smallFont(8rem);
          }
        }
      }
      &-p {
        font-size: .85rem;
        color: #343440;
        margin: 0rem;
      }
      &-tip {
        p{
            padding-bottom: .46rem;
            padding-top: .56rem;
            color: @color;
            font-size: .86rem;
        }
      }
    }
    &-div-h3{
      &-recommend {
          .div-h3('http://game.gtimg.cn/images/yxzj/m/m201706/images/herodetail/icon_11.png');
          margin-bottom: 0rem;
      }
      &-recommend {
          .div-h3('http://game.gtimg.cn/images/yxzj/m/m201706/images/herodetail/icon_12.png');
      }
      &-use {
          .div-h3('http://game.gtimg.cn/images/yxzj/m/m201706/images/herodetail/icon_13.png')
      }
      &-confront {
          .div-h3('http://game.gtimg.cn/images/yxzj/m/m201706/images/herodetail/icon_14.png')
      }
      &-team {
          .div-h3('http://game.gtimg.cn/images/yxzj/m/m201706/images/herodetail/icon_15.png')
      }
    }
}
</style>
