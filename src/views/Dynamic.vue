<template>
  <div class="dynamic-box">
    <dynamic-page-title></dynamic-page-title>
    <searchbox :content="'大家都在搜：马布里 中国绿卡'"></searchbox>
    <dynamic-nearby-interest></dynamic-nearby-interest>
    <item></item>
  </div>
</template>

<script>

  import DynamicPageTitle from "../components/DynamicPageTitle.vue";
  import Searchbox from "../components/Searchbox.vue";
  import DynamicNearbyInterest from "../components/DynamicNearbyInterest.vue";
  import Item from "../components/Item.vue";

  export default {
    name: 'Dynamic',
    components: {
      Item,
      DynamicNearbyInterest,
      Searchbox,
      DynamicPageTitle
    },
    methods: {}
  }
</script>

<style lang="less" scoped>
  .dynamic-box {
    height: 1000px;
    background-color: #FAFAFA;
  }
</style>
