<template>
  <div class="contact-box">
    <contact-page-title></contact-page-title>
    <searchbox :content="'搜索'"></searchbox>
    <new-friend-and-chat :newtitle="'新朋友'"></new-friend-and-chat>
    <new-friend-and-chat :newtitle="'创建群聊'" style="border-top: 0"></new-friend-and-chat>
    <van-tabs v-model="active" swipeable :swipe-threshold="5">
      <van-tab title="好友">
        <friends-sort-item :sortname="'特别关心'" :onlinenumber="1" :allnumber="1"></friends-sort-item>
      </van-tab>
      <van-tab title="群聊">
        <friends-sort-item :sortname="'未命名的群聊'" :onlinenumber="2" :allnumber="1"></friends-sort-item>
      </van-tab>
      <van-tab title="设备">
        bbb
      </van-tab>
      <van-tab title="通讯录">
        ccc
      </van-tab>
      <van-tab title="公众号">
        ddd
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

  import ContactPageTitle from '../components/ContactPageTitle.vue'
  import Searchbox from "../components/Searchbox.vue";
  import NewFriendAndChat from "../components/NewFriendsAndChat.vue";
  import FriendsSortItem from "../components/FriendsSortItem.vue";


  import {Tab, Tabs} from 'vant';
  import Vue from 'vue'

  Vue.use(Tab).use(Tabs);
  export default {
    name: 'Contact',
    components: {
      FriendsSortItem,
      NewFriendAndChat,
      Searchbox,
      ContactPageTitle,
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .contact-box{
    height: 1000px;
    background-color: #FAFAFA;
  }
</style>

<style>
  .van-tabs__nav-bar {
    background-color: #03A9F4 !important;
  }

  .van-tab--active {
    color: #03A9F4 !important;
  }
</style>
