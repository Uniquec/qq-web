<template>
  <div class="home">
    <page-title :tips="'+'"></page-title>
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
import PageTitle from "../components/PageTitle.vue";

Vue.use(Button);

export default {
  name: 'Home',
  components: {
    PageTitle,
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
