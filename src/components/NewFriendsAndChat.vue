<template>
  <div class="new-friend-and-chat-box">
    <div>{{newtitle}}</div>
    <van-icon name="arrow"/>
  </div>
</template>

<script>
  import {Icon} from 'vant';
  import Vue from 'vue'

  Vue.use(Icon);
  export default {
    name: "NewFriendAndChat",
    props: {
      newtitle: String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .new-friend-and-chat-box {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid #EEEEEE;
    font-size: 16px;
    padding: 10px;

    .van-icon {
      color: #BDBDBD;
    }
  }
</style>
