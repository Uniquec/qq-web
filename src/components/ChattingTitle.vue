<template>
  <div class="title-box">
    <div class="back-box" @click="back()">
      <van-icon name="arrow-left" class="back-icon"/>
    </div>
    <div class="center-message">
      <span>{{nickname}}</span>
      <span class="state-text">{{state}}</span>
    </div>
    <div class="more-message">
      <van-icon name="phone" class="phone-icon"/>
      <van-icon name="contact" class="contact-icon"/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Icon} from 'vant';

  Vue.use(Icon);
  export default {
    name: "ChattingTitle",
    props: {
      nickname: String,
      state: String
    },
    methods:{
      back(){
        this.$router.push({path: '/message'})
      }
    }
  };
</script>

<style scoped lang="less">
  .title-box {
    width: 100%;
    height: 50px;
    background-color: #29B6F6;
    display: flex;
    justify-content: space-between;

    .back-box{
      width: 20%;
    }

    .van-icon {
      color: #fff;
      font-size: 20px;
      padding-top: 15px;
    }

    .back-icon {
      margin-left: -30px;
    }

    .center-message {
      display: flex;
      flex-wrap: wrap;
      margin: auto;
      font-size: 16px;
      justify-content: center;

      .state-text {
        width: 100%;
        color: white;
        padding-top: 3px;
        font-size: 12px;
      }
    }

    .more-message{
      width: 20%;
    }

    .contact-icon {
      float: right;
      padding-right: 10px;
    }
  }
</style>
