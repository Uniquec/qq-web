<template>
  <div class="watching-search">
    <div class="search-box">
      <van-icon name="search"/>
      搜索
    </div>
    <button class="video">
      <img src="@/assets/triangle-play.png"/>
      视频
    </button>
    <button>
      <img class="topic" src="@/assets/topic.png"/>
      话题
    </button>

  </div>
</template>

<script>
  import Vue from 'vue'
  import {Icon} from 'vant';

  Vue.use(Icon);

  export default {
    name: "WatchingSearchbox",
    props: {
      content: String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .watching-search {
    display: flex;

    .search-box {
      width: 50%;
      height: 25px;
      margin: 5px;
      padding-top: 6px;
      background-color: #F5F5F5;
      border: 1px solid #F5F5F5;
      border-radius: 20px;
      color: darkgrey;
      font-size: 14px;

    }

    button{
      width: 20%;
      height: 30px;
      margin: 5px;
      padding-top: 2px;
      border-radius: 20px;
      font-size: 14px;
      background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526370544&di=0245dff22490e4ca49e8540b88931586&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170426%2Ffa88bab8b9704e64bd3fad5f4f4a1559_th.gif") no-repeat;
      border: 0;
      color: white;

      img{
        width: 10px;
        height: 10px;
      }
    }
  }

</style>
