<template>
  <div>
    <watching-page-title></watching-page-title>
    <watching-searchbox></watching-searchbox>
  </div>
</template>

<script>
  import WatchingPageTitle from "../components/WatchingPageTitle.vue";
  import WatchingSearchbox from "../components/WatchingSearchbox.vue";

  export default {
    name: 'Watching',
    components: {
      WatchingSearchbox,
      WatchingPageTitle
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

</style>
