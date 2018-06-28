<template>
  <div>
    <Header :data1="data1"></Header>
    <div class="kindsKid border-1px" >
      <router-link class="kind1" to="/page1/kind1">推荐</router-link>
      <router-link class="kind2" to="/page1/kind2">视频</router-link>
      <router-link class="kind3" to="/page1/kind3">图片</router-link>
      <router-link class="kind4" to="/page1/kind4">段子</router-link>
      <router-link class="kind5" to="/page1/kind5">同城</router-link>
      <router-link class="kind6" to="/page1/kind6">游戏</router-link>
    </div>
    <router-view :data=data :data1=data1></router-view>
  </div>
</template>
<script>
  import Header from './Header.vue'
  export default {
    data () {
      return {
      data: [],
        data1: []
      }
    },
    created () {
      this.$axios.get('api/data')
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
    },
    components: {
      Header
    },
    methods: {
      decContent (e) {
      }
    }
    }
</script>
<style scoped lang=stylus>
  @import "../common/stylus/mixin.styl"
.kindsKid
  width 100%
  height 40px
  display flex
  border-1px #ccc
  margin-bottom 10px
  a
    color black
    opacity 0.7
    line-height 40px
    text-decoration none
    flex 1
    &.active
      color red
      opacity 0.3
</style>
