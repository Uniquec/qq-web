<template>
  <div class="chattools-box">
    <input type="text"/>
    <button>发送</button>
    <div class="tools-icons">
      <img src="../assets/icon-img/voice.png">
      <img src="../assets/icon-img/pic.png">
      <img src="../assets/icon-img/camera.png">
      <img src="../assets/icon-img/finger-left.png">
      <img src="../assets/icon-img/redpacket_fill.png">
      <img src="../assets/icon-img/video.png">
      <img src="../assets/icon-img/smile.png">
      <img src="../assets/icon-img/add.png">
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Icon} from 'vant';
  import {Button} from 'vant';

  Vue.use(Button);
  Vue.use(Icon);
  export default {
    name: "ChatTools",
    props: {}
  };
</script>

<style scoped lang="less">
  .chattools-box {
    position: fixed;
    bottom: 0;
    background-color: #ECEFF1;
    width: 100%;

    input {
      outline: none;
      width: 80%;
      margin-left: -10px;
      border: 0;
      border-radius: 5px;
      height: 30px;
      margin-top: 5px;
    }

    button {
      background-color: #DDDEE2;
      color: white;
      height: 30px;
      margin-left: 5px;
      border: none;
      border-radius: 3px;
      width: 60px;
    }

    .tools-icons {
      padding-top: 10px;
      padding-bottom: 10px;
      display: flex;
      justify-content: space-around;
    }
  }
</style>
