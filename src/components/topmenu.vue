<template>
  <div
    class="sticky top-0 z-20 px-5 py-3 bg-white border-b header border-lightblue-high text-main-500"
  >
    <div class="container mx-auto">
      <div class="logo flex justify-center">
        <router-link to="/">
          <img src="../assets/images/logo.svg" alt="" class="block" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topmenu',
    methods: {},
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped></style>
