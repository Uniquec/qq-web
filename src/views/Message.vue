<template>
  <div class="home">
    <message-page-title :tips="'+'" :title="'消息'"></message-page-title>
    <searchbox :content="'搜索'"></searchbox>
    <chat-box :name="name" :words="words" :time="time"></chat-box>
    <chat-box :name="name" :words="words" :time="time"></chat-box>
    <chat-box :name="name" :words="words" :time="time"></chat-box>
    <chat-box :name="name" :words="words" :time="time"></chat-box>
    <chat-box :name="name" :words="words" :time="time"></chat-box>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import { Button } from 'vant'
import ChatBox from "../components/ChatBox.vue";
import MessagePageTitle from "../components/MessagePageTitle.vue";
import Searchbox from "../components/Searchbox.vue";

Vue.use(Button);

export default {
  name: 'Home',
  components: {
    Searchbox,
    MessagePageTitle,
    ChatBox,
  },
  data(){
    return {
      name:'fkq',
      words:'hello',
      time:'20:00'
    }
  }
}
</script>
