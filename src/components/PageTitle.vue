<template>
  <div class="title-box">
    <img src="@/assets/logo.png">
    <div class="title">消息</div>
    <div class="right-tips">{{tips}}</div>
  </div>
</template>

<script>
  export default {
    name: "PageTitle",
    props: {
      tips:String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .title-box{
    background-color: deepskyblue;
    border: 1px solid deepskyblue;
    color: white;
    display: flex;

    img{
      margin: 10px;
      width: 30px;
      height: 30px;
      border: 1px solid darkgrey;
      border-radius: 50%;
    }

    .title{
      font-size: 20px;
      margin-top: 12px;
      margin-left: 110px;
    }

    .right-tips{
      font-size: 40px;
      margin-top: 6px;
      margin-left: 130px;
    }
  }
</style>
