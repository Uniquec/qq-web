<template>
  <div class="friends-sort-item-box">
    <div>
      <van-icon name="arrow"/>
      <span>{{sortname}}</span>
    </div>
    <div>
      {{onlinenumber}}/{{allnumber}}
    </div>
  </div>
</template>

<script>
  import {Icon} from 'vant';
  import Vue from 'vue'

  Vue.use(Icon);

  export default {
    name: "FriendsSortItem",
    props: {
      sortname: String,
      onlinenumber: Number,
      allnumber: Number
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .friends-sort-item-box {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;
    color: #9E9E9E;

    span {
      color: #000000;
      margin-left: 8px;
    }
  }
</style>
