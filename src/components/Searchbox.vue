<template>
  <div>
    <div class="search-box">
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
    width: 97%;
    height: 27px;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 4px;
    background-color: #ededed;
    border: 1px solid #ededed;
    border-radius: 5px;
    color: darkgrey;
  }
</style>
