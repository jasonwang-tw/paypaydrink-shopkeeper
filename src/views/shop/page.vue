<template>
  <div id="shopPage">
    <div class="flex justify-between items-center mb-10">
      <div>
        <h2><i class="bi bi-house-fill mr-3 text-subyellow-100"></i>古亭shop</h2>
        <span class="text-blue-900 text-sm">資料更新: 2020/6/22 16:32</span>
      </div>
      <div v-if="orderBtn === true">
        <router-link to="/shop_1/order" class="btn-dark-blue inline-block">訂單總覽</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {},
    data() {
      return {
        orderBtn: true
      }
    },
    methods: {},
    watch: {
      $route: {
        handler(to, from) {
          if (to !== from) {
            if (this.$route.path.match('/order')) {
              this.orderBtn = false
            } else {
              this.orderBtn = true
            }
          }
        },
        immediate: true
      }
    },
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
