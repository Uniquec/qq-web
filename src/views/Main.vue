<template>
  <div>
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="chat" :to="{name: 'message'}">消息</van-tabbar-item>
      <van-tabbar-item icon="contact" dot :to="{name: 'contact'}">联系人</van-tabbar-item>
      <van-tabbar-item icon="password-view" :to="{name: 'watching'}">看点</van-tabbar-item>
      <van-tabbar-item icon="like-o" info="5" :to="{name: 'dynamic'}">动态</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vant'
  import Vue from 'vue'

  Vue.use(Tabbar).use(TabbarItem);

  let active = {
    '/message': 0,
    '/contact': 1,
    '/watching': 2,
    '/dynamic': 3,
    '/login': 4,
    '/register': 5
  }
  export default {
    data() {
      return {}
    },
    computed: {
      active: {
        get() {
          return active[this.$route.path] //映射一下防止一刷新下面tab颜色变回第一个
        },
        set(value) {
        }
      }
    }
  }
</script>

<style lang="less">

</style>
