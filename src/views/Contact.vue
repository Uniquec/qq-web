<template>
  <div class="contact-box">
    <contact-page-title></contact-page-title>
    <searchbox :content="'搜索'"></searchbox>
    <new-friend-and-chat :newtitle="'新朋友'"></new-friend-and-chat>
    <new-friend-and-chat :newtitle="'创建群聊'" style="border-top: 0"></new-friend-and-chat>
    <contact-sort-list></contact-sort-list>
  </div>
</template>

<script>

  import ContactPageTitle from '../components/ContactPageTitle.vue'
  import Searchbox from "../components/Searchbox.vue";
  import ContactSortList from "../components/ContactSortList.vue";
  import NewFriendAndChat from "../components/NewFriendsAndChat.vue";
  import FriendsSortItem from "../components/FriendsSortItem.vue";

  export default {
    name: 'Contact',
    components: {
      FriendsSortItem,
      NewFriendAndChat,
      ContactSortList,
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
