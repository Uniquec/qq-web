<template>
  <div class="chat-box" @click="gotoChatting()">
    <img src="@/assets/dreamhuan.jpg">
    <div class="name-and-words">
      <h3>{{name}}</h3>
      <span>{{words}}</span>
    </div>
    <div class="time">{{time}}</div>
  </div>
</template>

<script>
  export default {
    name: "ChatBox",
    props: {
      name: String,
      words: String,
      time: String
    },
    methods: {
      gotoChatting() {
        this.$router.push({path: '/chatting'})
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .chat-box {
    display: flex;
    border: 1px solid #ededed;

    img {
      margin: 10px;
      width: 50px;
      height: 50px;
      border: 1px solid darkgrey;
      border-radius: 50%;
    }

    .name-and-words {
      margin-left: 1vw;
      h3 {
        margin-top: 15px;
        margin-bottom: 5px;
      }
    }

    .time {
      margin-top: 20px;
      margin-left: 55vw;
    }
  }
</style>
