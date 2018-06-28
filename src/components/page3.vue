<template>
  <div>
    <div class=header>
      审核列表
    </div>
    <div class="contain">
      <ol>
        <li :key=index  v-show="!i.show" v-for="(i,index) in data">
          <div class=name>
            申请内容标题:
            {{i.name}}
          </div>
          <div class="some">
            申请进程:
            完成
            <a @click="defeated(i)" href="#">
              取消
            </a>
          </div>
          <div class="domore">

          </div>
          </li>
      </ol>
    </div>
  </div>
</template>
<script>
  export default {
      data () {
          return {
              data: [{name: '新闻'},
                {name: '世界杯'},
                {name: '娱乐'},
                {name: '直播'},
                {name: '动漫'},
                {name: '小说'},
                {name: '电影'},
                {name: '电视剧'}
                ]
          }
      },
    methods: {
          defeated (i) {
            var a = 1
              while (prompt('请输入“确定”，请慎重！') !== '确定') {
//                console.log(1)
                a++
                if (a > 3) {
                    break
                }
                alert('输入错误，请重新输入')
//               this.$set(i, 0)
//                alert('申请项目:' + i + '已被取消')
              }
            if (!i.show && a < 4) {
              this.$set(i, 'show', true)
//              alert('成功取消申请项目')
            }
          }
    }
    }
</script>
<style scoped lang=stylus>
.header
  font-size 30px
  font-weight 700
.contain
  ol
    li
      div.name
        font-size 22px
        height 40px
        linr-height 40px
        color red
        margin-left -30%
      div.some
        margin-left -50%
        margin-bottom 10px
        a
          text-decoration none
          float right
          margin-right 20px
</style>
