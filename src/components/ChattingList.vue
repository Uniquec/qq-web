<template>
  <div class="chattinglist-box">
    <div class="talker-box">
      <img src="@/assets/dreamhuan.jpg">
      <div class="talker-words">111111111111111111</div>
    </div>
    <div class="my-box">
      <div class="my-words">2222222222222</div>
      <img src="@/assets/head.jpg">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChattingList",
    props: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .chattinglist-box {
    display: flex;
    flex-wrap: wrap;

    .talker-box, .my-box {
      width: 100%;
      display: flex;
      img {
        margin: 10px;
        width: 30px;
        height: 30px;
        border: 1px solid darkgrey;
        border-radius: 50%;
      }

      .talker-words, .my-words {
        width: 100px;
        height: 30px;
        margin-top: 20px;
        overflow: hidden;
      }
    }

    .my-box {
      display: flex;
      justify-content: flex-end;
    }

  }


</style>
