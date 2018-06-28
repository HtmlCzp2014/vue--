<template>
  <div class="header">
    <div class="headNav">
      <span class="headPic">
        <img src="http://wimg.spriteapp.cn/profile/large/2017/08/12/598f1e1119252_mini.jpg" alt="">
      </span>
      <span class="twoKids">
        <span class="firstKid">精选</span>
        <span class="secondKid">关注</span>
      </span>
      <span class="textPic icon-manage"></span>
    </div>

    <!--<div class="pic">-->
      <!--<div v-for="(item, index) in data1" :key="index">-->
        <!--<img :src="item.url" alt="">-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: [],
        data1: []
      }
    },
    created () {
      this.$axios.get('/api/data')
        .then((res) => {
          res = res.data
          if (res.errno === 0) {
            this.data = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/data1')
        .then((res) => {
          res = res.data
          if (res.errno === 0) {
            this.data1 = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
</script>
<style scoped lang="stylus">
  *
    padding 0px
    margin 0px
.header
  padding 0
  margin 0
  width 100%
  .headNav
    position relative
    height 80px
    width 100%
    background-color navajowhite
    opacity 0.4
    .headPic
      display block
      width 40px
      height 40px
      border-radius 50%
      background-color white
      position absolute
      top 30%
      left 10px
      img
        width 100%
        height 100%
        border-radius 50%
    .twoKids
      display block
      width 50%
      height 40px
      border 1px solid black
      position absolute
      left 25%
      top 20px
      & span
        width 50%
        height 40px
        display block
        float left
        text-align center
        line-height 40px
        &.firstKid
          background black
          opacity 0.6
          color white
        &.secondKid
          color black
          opacity 0.6
    .textPic
      width 40px
      height 40px
      font-size 40px
      position: absolute
      right 10px
      top 20px

</style>
