<template>
  <div
    class="sticky top-0 z-10 px-5 py-3 bg-white border-b header border-lightblue-high text-main-500"
  >
    <div class="container mx-auto">
      <div class="logo flex justify-between items-center">
        <router-link to="/">
          <img src="../assets/images/logo.svg" alt="" class="block" />
        </router-link>
        <div
          class="userName relative"
          @mouseenter="menuHidden = false"
          @mouseleave="menuHidden = true"
        >
          <div class="flex items-center" @touchstart="menuHidden = !menuHidden">
            <i class="bi bi-person-circle text-2xl mr-3"></i>
            <span>jasonwang , 歡迎回來</span>
          </div>
          <ul
            class="userMenu list-none absolute bg-white shadow-xl rounded-xl right-0 pl-0"
            :class="{ hidden: menuHidden }"
          >
            <li v-for="(u, index) in userMenu" class="px-10 py-3 text-center">
              <router-link :to="u.link" class="no-underline hover:text-blue-500">{{
                u.text
              }}</router-link>
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
        userMenu: [
          {
            text: '店主基本資料',
            link: '/profile'
          },
          {
            text: '登出',
            link: '#'
          }
        ],
        menuHidden: true
      }
    }
  }
</script>

<style lang="scss" scoped></style>
