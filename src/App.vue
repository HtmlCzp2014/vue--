<template>
  <div id="app">
    <!--<Header :data="data" :data1="data1" ></Header>-->
    <router-view class="show-4"/>
    <div class="contain-4">
      <router-link class="bottom-4" to="/page1" >首页</router-link>
      <router-link class="bottom-4" to="/page2" >发现</router-link>
      <router-link class="bottom-4" to="/page3" >审核</router-link>
      <router-link class="bottom-4" to="/page4" >消息</router-link>
    </div>
  </div>
</template>

<script>
//  import Header from './components/Header'
export default {
  name: 'App',
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
  },
  components: {
//    Header
  }
}
</script>

<style lang="stylus" scoped>
  #app
    width 100%
    .contain-4
      display  flex
      width 100%
      height 50px
      background white
      position fixed
      bottom 0px
      .bottom-4
        height 50px
        line-height 50px
        flex 1
        text-decoration none
        text-align center
        color #ccc
        font-weight 600
    .show-4
      width 100%
      text-align center
</style>
