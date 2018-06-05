<template>
  <div class="chatting-box">
    <chatting-title :nickname="'fkq'" :state="'手机在线-4G'"></chatting-title>
    <chatting-list></chatting-list>
    <chat-tools></chat-tools>
  </div>
</template>

<script>
  import ChattingTitle from "../components/ChattingTitle.vue";
  import ChatTools from "../components/ChatTools.vue";
  import ChattingList from "../components/ChattingList.vue";

  export default {
    components: {
      ChattingList,
      ChatTools,
      ChattingTitle
    },
    name: "Chatting",
    props: {

    }
  };
</script>

<style lang="less">

</style>
