<template>
  <div
    class="sticky top-0 z-20 px-5 py-3 bg-white border-b header border-lightblue-high text-main-500"
  >
    <div class="container mx-auto">
      <div class="logo flex justify-between items-center">
        <router-link to="/">
          <img src="../assets/images/logo.svg" alt="" class="block" />
        </router-link>
        <div class="userName relative">
          <div class="flex items-center">
            <i class="bi bi-person-circle text-2xl mr-3"></i>
            <span>jasonwang , 歡迎回來</span>
          </div>
          <ul class="userMenu list-none absolute bg-white shadow-xl rounded-xl right-0 hidden pl-0">
            <li v-for="(u, index) in userMenu" class="px-5 py-2.5 text-center">
              <router-link to="" class="no-underline hover:text-blue-500">{{ u }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topmenu',
    methods: {},
    data() {
      return {
        userMenu: ['店主基本資料', '登出']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .userName:hover .userMenu {
    display: block;
  }
</style>
