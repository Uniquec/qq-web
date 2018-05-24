<template>
  <div class="title-box">
    <img  class="head-portrait" src="@/assets/head.jpg">
    <div class="title">
      看点
      <img class="more-watching" src="@/assets/icon_Triangle_down.png"/>
    </div>
    <div class="right-tips">
      <van-icon name="contact"/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Icon} from 'vant';

  Vue.use(Icon);

  export default {
    name: "WatchingPageTitle",
    props: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .title-box {
    background-color: deepskyblue;
    border: 1px solid deepskyblue;
    color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .head-portrait {
      margin: 10px;
      width: 30px;
      height: 30px;
      border: 1px solid darkgrey;
      border-radius: 50%;
    }

    .title {
      font-size: 20px;
      margin-top: 12px;

      .more-watching{
        width: 20px;
        height: 20px;
        margin-left: -5px;
      }
    }

    .right-tips {
      font-size: 20px;
      margin-top: 16px;
      margin-right: 10px;
    }
  }
</style>
