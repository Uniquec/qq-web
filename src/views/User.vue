<template>
  <div>
    <h1>Hello {{username}}</h1>
    <van-button size="large" @click="logout()">登出</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)

export default {
  name: 'User',
  components: {},
  data() {
    return {}
  },
  computed: {
    username() {
      return this.$store.state.user.login_name
    }
  },
  methods: {
    logout() {
      this.$store.commit('user/logout')
      this.$router.push({ name: 'login' })
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit('user/getLocalUser')
      if (vm.$store.getters['user/currentUser'].name) {
        next()
      } else {
        vm.$router.push({ name: 'login' })
      }
    })
  }
}
</script>

<style lang="less" scoped>

</style>
