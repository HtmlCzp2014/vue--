<template>
<div>
  <div class="pic">
    <div v-for="(item, index) in data1" :key="index">
      <img :src="item.url" alt="">
    </div>
  </div>
</div>
</template>
<script>
    export default {
      props: ['data', 'data1']
    }
</script>
<style scoped lang=stylus>
  .pic
    width 100%
    div
      width 100%
      height 100%
      img
        width 100%
        height 100%
</style>
