<template>
  <div class="title-box">
    <img src="@/assets/head.jpg">
    <div class="title">动态</div>
    <div class="right-tips">更多</div>
  </div>
</template>

<script>
  export default {
    name: "DynamicPageTitle",
    props: {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .title-box{
    background-color: deepskyblue;
    border: 1px solid deepskyblue;
    color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;

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
    }

    .right-tips{
      font-size: 20px;
      margin-top: 12px;
      margin-right: 10px;
    }
  }
</style>
