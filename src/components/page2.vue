<template>
  <div>
    <div v-for="(item, index) in data" :key="index">
      <div class="bookName">{{item.bookname}}</div>
      <div class="book">
        <div class="bookAuthor"><span>作者:</span>{{item.author_name}}</div>
        <div class="seeNum"><span>观看次数:</span>{{item.num_click}}</div>
      </div>
      <div class="someContent">{{item.book_info}}</div>
    </div>
  </div>
</template>
<script>
  export default {
      data () {
          return {
              data: []
          }
      },
    created () {
      this.$axios.get('https://www.apiopen.top/novelApi')
        .then((res) => {
            this.data = res.data.data
        })
        .catch((error) => {
          alert(error)
        })
    }
    }
</script>
<style scoped lang="stylus">
.bookName
    color green
    font-size 25px
    font-weight 600
    font-family '黑体'
.book
  display flex
  .bookAuthor
     flex 1
     span
        color red
        font-weight 700
  .seeNum
    flex 1
    position relative
    span
        color red
        font-weight 700
.someContent
  text-align:justify;
</style>
