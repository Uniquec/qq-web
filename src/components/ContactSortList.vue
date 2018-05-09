<template>
  <div>
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="index in items" :title="index">
        <friends-sort-item :sortname="'特别关心'" :onlinenumber="1" :allnumber="1"></friends-sort-item>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import {Tab, Tabs} from 'vant';
  import Vue from 'vue'
  import FriendsSortItem from "./FriendsSortItem.vue";

  Vue.use(Tab).use(Tabs);
  export default {
    components: {FriendsSortItem},
    name: "ContactSortList",
    props: {},
    data() {
      return {
        items: ['好友', '群聊', '设备', '通讯录', '公众号'],
        active: 2
      };

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>

<style>
  .van-tabs__nav-bar {
    background-color: #03A9F4;
  }

  .van-tab--active {
    color: #03A9F4;
  }
</style>
