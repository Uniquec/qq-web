<template>
  <div>
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home" :to="{name: 'home'}">主页</van-tabbar-item>
      <van-tabbar-item icon="gift" dot :to="{name: 'about'}">发现</van-tabbar-item>
      <van-tabbar-item icon="contact" info="5" :to="{name: 'user'}">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import Vue from 'vue'

Vue.use(Tabbar).use(TabbarItem)

let active = {
  '/home': 0,
  '/about': 1,
  '/user': 2,
  '/login': 2,
  '/register': 2
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
      set(value) {}
    }
  }
}
</script>

<style lang="less">

</style>
