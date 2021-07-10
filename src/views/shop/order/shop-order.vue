<template>
  <div id="shopOrder">
    <div class="">
      <div onClick="javascript:history.back()" class="no-underline mb-5 inline-block cursor-pointer">
        <i class="bi bi-chevron-left mr-3"></i>返回
      </div>
      <h2 class="mb-0">訂單</h2>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'shopOrder',
    components: {},
    data() {
      return {}
    },
    methods: {},
    watch: {},
    computed: {},
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .btn-dark-blue {
    color: white;
    &:-webkit-any-link:active {
      color: white;
    }
  }
</style>
