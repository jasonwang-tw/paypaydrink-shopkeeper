<template>
  <div id="home" class="text-main-500 h-full">
    <topmenu />
    <div class="adminUi grid grid-cols-12">
      <div class="col-span-2 border-r border-lightblue-high overflow-y-auto">
        <ul class="list-none pl-0">
          <li
            class="p-5 shopList border-b border-lightblue-high"
            v-for="(s, index) in shop"
            :class="{ active: shopActive === index }"
            @click="shopActive = index"
          >
            <router-link to="/shop_1/data" class="no-underline">
              <h4 class="mb-2">
                <i class="bi bi-house-fill mr-3 text-subyellow-100"></i>{{ s.name }}
              </h4>
              <ul class="pl-0 text-blue-900 text-sm">
                <li>
                  <i class="bi bi-telephone-fill text-subyellow-100 mr-3 ml-1"></i> {{ s.add }}
                </li>
                <li><i class="bi bi-geo-alt-fill text-subyellow-100 mr-3 ml-1"></i> {{ s.tel }}</li>
              </ul>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-span-10 bg-lightblue-bg p-10">
        <div class="container mx-auto">
          <router-view></router-view>
        </div>
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
      return {
        shopActive: 0,
        shop: [
          {
            name: '古亭shop',
            add: '台北市古亭區許昌街216號',
            tel: '02-78548977'
          },
          {
            name: '中正shop',
            add: '台北市中正區許昌街216號',
            tel: '02-78548977'
          },
          {
            name: '信義shop',
            add: '台北市信義區區許昌街216號',
            tel: '02-78548977'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .shopList.active {
    background-color: var(--color-lightblue-bg);
  }
  .adminUi {
    height: calc(100% - 64px);
  }
</style>
