<template>
  <div id="home" class="text-main-500">
    <topmenu />
    <div class="grid grid-cols-12 gap-5 p-5">
      <div class="col-span-2">
        <ul class="list-none pl-0">
          <li class="border border-lightblue-high rounded-xl p-5 mb-5 shopList active">
            <router-link to="/shop_1">
              <h4>SHOP1</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-span-10 rounded-xl">
        <router-view></router-view>
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
  .shopList.active {
    background-color: var(--color-lightblue-bg);
  }
</style>
