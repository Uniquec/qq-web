<template>
  <div>
    <dynamic-page-title></dynamic-page-title>
    <searchbox :content="'大家都在搜：马布里 中国绿卡'"></searchbox>
  </div>
</template>

<script>

  import DynamicPageTitle from "../components/DynamicPageTitle.vue";
  import Searchbox from "../components/Searchbox.vue";

  export default {
    name: 'Dynamic',
    components: {
      Searchbox,
      DynamicPageTitle
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

</style>
