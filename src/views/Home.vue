<template>
  <div class="home">
    <van-button size="large">大号按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)

export default {
  name: 'Home',
  components: {}
}
</script>
