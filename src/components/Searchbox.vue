<template>
  <div class="search-box">
    <div class="search">
      <van-icon name="search"/>
      {{content}}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Icon} from 'vant';

  Vue.use(Icon);

  export default {
    name: "Searchbox",
    props: {
      content:String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .search-box{
    background-color: #fff;
    padding-bottom: 4px;
    .search{
      width: 95%;
      height: 27px;
      margin: auto;
      margin-top: 5px;
      margin-bottom: 5px;
      padding-top: 4px;
      background-color: #F5F5F5;
      border: 1px solid #F5F5F5;
      border-radius: 5px;
      color: darkgrey;
    }
  }

</style>
