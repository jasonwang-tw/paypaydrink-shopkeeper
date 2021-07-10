<template>
  <div id="home" class="text-main-500 h-full">
    <topmenu />
    <div class="adminUi bg-lightblue-bg pt-10">
      <router-link to="/" class="w-1/3 mb-5 no-underline block mx-auto"
        ><i class="bi bi-chevron-left mr-3"></i>返回</router-link
      >
      <div class="w-1/3 mx-auto bg-white p-5 rounded-lg border border-lightblue-high">
        <h3>店主基本資料</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'

  export default {
    name: 'home',
    components: {
      topmenu
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .adminUi {
    height: calc(100% - 64px);
  }
</style>
