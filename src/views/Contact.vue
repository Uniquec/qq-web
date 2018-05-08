<template>
  <div>
    <contact-page-title></contact-page-title>
    <searchbox :content="'搜索'"></searchbox>
  </div>
</template>

<script>

  import ContactPageTitle from '../components/ContactPageTitle.vue'
  import Searchbox from "../components/Searchbox.vue";

  export default {
    name: 'Contact',
    components: {
      Searchbox,
      ContactPageTitle,
    },
    methods: {}
  }
</script>
