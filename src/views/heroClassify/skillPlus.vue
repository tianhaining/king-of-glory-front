<template lang="html">
    <div class="skillPlus">
      <div class="skillPlus-div">
        <div class="skillPlus-div-img" @click="skillChange">
            <mu-flexbox>
              <mu-flexbox-item v-for="item, index in heroSkillPlus.skill" :key="index">
                <img :src="item.imgSrc" :alt="index">
              </mu-flexbox-item>
            </mu-flexbox>
        </div>
        <div class="skillPlus-div-text">
            <h3 class="skillPlus-div-text-h3">
              {{skillIntroduce.name}}
              <span>{{skillIntroduce.coolingValue}}</span>
            </h3>
            <p>{{skillIntroduce.text}}</p>
        </div>
        <div class="skillPlus-div-tip">
            <p>{{skillIntroduce.tip}}</p>
        </div>
      </div>
      <div class="skillPlus-div">
        <h3 class="skillPlus-div-h3">加点建议</h3>
        <div class="skillPlus-div-advise">
            <mu-flexbox>
                <mu-flexbox-item>
                    <mu-flexbox>
                        <mu-flexbox-item>
                            <div>主升</div>
                            <img :src="heroSkillPlus.lifting.main.imgSrc" alt="">
                            <div class="mu-flexbox-item-name">{{heroSkillPlus.lifting.main.name}}</div>
                        </mu-flexbox-item>
                        <mu-flexbox-item>
                            <div>副升</div>
                            <img :src="heroSkillPlus.lifting.vice.imgSrc" alt="">
                            <div class="mu-flexbox-item-name">{{heroSkillPlus.lifting.vice.name}}</div>
                        </mu-flexbox-item>
                    </mu-flexbox>
                </mu-flexbox-item>
                <mu-flexbox-item>
                    <div>召唤师技能</div>
                    <mu-flexbox>
                        <mu-flexbox-item v-for="item, index in heroSkillPlus.summoner" :key="index">
                            <img class="mu-flexbox-item-summoner" :src="item.imgSrc" alt="">
                            <div class="mu-flexbox-item-name">{{item.name}}</div>
                        </mu-flexbox-item>
                    </mu-flexbox>
                </mu-flexbox-item>
            </mu-flexbox>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data (){
        return {
            skillIntroduce: {}
        }
    },
    computed: mapState({
        heroSkillPlus: state => state.heroSkillPlus
    }),
    created () {
      // this.$store.commit('getHeroSkillPlus', {进入英雄介绍的时候就已经获取技能加点数据，此处不用重复取数据
      //   name: this.$route.params.name
      // });
      this.skillIntroduce = this.$store.state.heroSkillPlus.skill[0];
    },
    methods: {
      //TODO 使用事件代理处理点击每个图片技能数据的切换
      skillChange (event) {
          let ev = event || window.event;
          let target = ev.target || ev.srcElement;//标准浏览器用ev.taeget，IE浏览器用event.srcElement
          if (target.nodeName.toLowerCase() == 'img') {//当节点为img时事件冒泡才会触发
              this.skillIntroduce = this.$store.state.heroSkillPlus.skill[target.alt];
              //target.classList.add("current");还没想好咋处理
          }
      }
    }
}
</script>

<style lang="less">
@color: #7a7a80;
/*用于页面中的小字*/
.smallFont {
  font-size: .8rem;
  color: @color;
  line-height: 1rem;
  width: 5.44rem;
}
.skillPlus {
    margin: 1rem 0;
}
.skillPlus-div {
  background: #fff;
  padding: 1rem 1rem 0 1rem;
  .mu-flexbox {
    &-item {
      text-align: center;
      margin-right: 0px;
      max-width: 12rem;
      img {
        width: 4rem;
        height: 4rem;
      }
      .current {
        border: .20rem solid #d59b40;
        border-radius: 1.86rem;
      }
      &-summoner {
        border-radius: 2rem;
      }
      &-name {
        .smallFont;
      }
    }
  }
  &-text {
    border-bottom: 1px solid #d4d9de;
    &-h3 {
      background-size: 1rem 1rem;
      font-size: 1.1rem;
    }
    span {
      .smallFont;
      padding-left: 1rem;
    }
  }
  &-tip {
    p{
        padding-bottom: 1rem;
        color: @color;
        font-size: .86rem;
    }
  }
  &-h3 {
    background: url('http://game.gtimg.cn/images/yxzj/m/m201706/images/herodetail/icon_16.png') no-repeat 0 .26rem;
    background-size: 1rem 1rem;
    padding-left: 1.26rem;
    font-size: 1.1rem;
  }
  &-advise{
    padding-bottom: 1rem;
  }
}
</style>
