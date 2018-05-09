<template>
  <div class="item-box">
    <div class="item-title">
      <van-icon name="cart"/>
      京东购物
    </div>
    <div class="enter-details">
      <van-icon name="arrow"/>
    </div>
  </div>
</template>

<script>
  import {Icon} from 'vant';
  import Vue from 'vue'

  Vue.use(Icon);


  export default {
    name: "Item",
    props: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .item-box {
    height: 45px;
    margin-top: 20px;
    background-color: #fff;
    border: 1px solid #EEEEEE;
    display: flex;
    justify-content: space-between;

    .item-title {
      padding-top: 15px;
      padding-left: 20px;

      .van-icon {
        color: red;
        margin-right: 15px;
      }
    }

    .enter-details{
      padding-top: 15px;
      padding-right: 10px;
    }
  }
</style>
