<template>
  <div>
    <div class="content-wrapper">
      <div class="box" v-show="!item.show" v-for="(item,index) in data" :key="index" >
        <div class="content-name">
          <span class="theme_name">{{item.theme_name ? item.theme_name : "热门"}}</span>
          <span class="profile_image"><img :src=item.profile_image alt="图片违规被删除"></span>
          <span class="name">{{item.name}}</span>
        </div>
        <div class="text">
          {{item.text}}
        </div>
        <div class="image1" >
          <img :src="item.image1" >
        </div>
        <div  class="sanjiao"  @click="show(item)" ></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['data', 'data1'],
    data () {
      return {
      }
    },
    methods: {
      show (item) {
        if (!item.show) {
          this.$set(item, 'show', true)
        }
      }
    }
  }
</script>
<style scoped lang="stylus">
  .one
    width 100%
    height 50px
    background red
  .content-wrapper
    width 100%
    position: relative
    .box
      border-top 1px solid #ccc
      position: relative
      width 100%
    .content-name
      width 100%
      position relative
      height 60px
      span
        display block
      .theme_name
        background red
        color white
        width 12px
        font-size 12px
        letter-spacing 0px
      .profile_image
        position absolute
        top 2px
        left 20px
        img
          width 40px
          border-radius 50%
      .name
        position absolute
        font-size 16px
        top 12px
        left 70px
    .text
      line-height 30px
    .sanjiao
      border 30px solid transparent
      border-left 30px solid #ccc
      transform rotate(-45deg)
      position absolute
      opacity 0.3
      top -30px
      right -30px
</style>
