<template>
<div>
  <div>
    <video id="myvideo" :src="videoSrc" :poster="videoImg" :muted="muteStatus" :autoplay="playStatus" height="414" width="414">
    </video>
    <span class="one" v-on:click="closeSoundClick()"></span>
    <span class="two"></span>
    <span class="three"  v-on:click="playClick()">播放</span>
    <span class="four"  v-on:click="playClick()">暂停</span>

  </div>
  <!--{{data}}-->
<!--<div v-for="(item,index) in data" :key="index">-->
  <!--<div id="main">-->
  <!--</div>-->
<!--</div>-->
  </div>
</template>
<script>

    export default {
      data () {
        return {
          data: [],
          dom: '',
          videoSrc: 'http://babylife.qiniudn.com/FtRVyPQHHocjVYjeJSrcwDkApTLQ',
          videoImg: 'http://static.fdc.com.cn/avatar/usercenter/5996999fa093c04d4b4dbaf1_162.jpg',
          playStatus: false,
          muteStatus: '',
          isMute: true,
          isPlay: false
        }
      },
      created () {
        this.$axios.get('api/data2')
          .then((res) => {
            res = res.data
            if (res.errno === 0) {
              this.data = res.data
            }
          })
          .catch((error) => {
            alert(error)
          })
      },
      methods: {
        playClick () {
          this.dom = document.getElementById('myvideo')
          this.isPlay = !this.isPlay
          if (this.isPlay) {
            this.dom.play()
          } else {
              this.dom.pause()
          }
          console.log(111)
        },
        closeSoundClick () {
          this.isMute = !this.isMute
          if (this.isMute) {
            this.muteStatus = ''
          } else {
            this.muteStatus = 'muted'
          }
        }
      }
    }
</script>
<style scoped>
.three{
color:green;
  font-size:30px;
  font-weight:700;
}
.four{
  color:red;
  font-weight:700;
  font-size:30px;
}
</style>
