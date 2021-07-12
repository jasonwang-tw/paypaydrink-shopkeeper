<template>
  <div id="shopList">
    <div class="order">
      <div class="mt-10 mb-5 xl:flex items-center justify-between">
        <div class="flex items-center">
          <span class="mr-3">訂單狀態</span>
          <ul class="orderStatus flex list-none pl-0">
            <li
              v-for="(fo, index) in filter_status"
              class="btn-border-light-blue mr-3"
              :class="{ active: order_active === index }"
              @click="order_active = index"
            >
              {{ fo }}
            </li>
          </ul>
        </div>
        <div class="flex xl:w-1/3 mt-5 xl:mt-0">
          <input type="text" class="mr-3" placeholder="搜尋訂單" />
          <button type="submit" class="btn-dark-blue inline-block w-1/4">搜尋</button>
        </div>
      </div>
      <div class="bg-white p-5 border-lightblue-high border rounded-lg overflow-x-auto">
        <ul class="list-none pl-0 grid grid-cols-12 text-blue-500 w-1280">
          <li v-for="(od, index) in order_detailname" :class="od.col">{{ od.name }}</li>
        </ul>
        <hr class="w-1280" />
        <ul
          v-for="(o, index) in filterOrder"
          class="list-none pl-0 grid grid-cols-12 border-b border-lightblue-high pb-5 mb-5 w-1280"
        >
          <li class="col-span-2">{{ o.data }}</li>
          <li class="col-span-2">
            <router-link :to="o.link">{{ o.number }}</router-link>
          </li>
          <li v-if="o.status === '完成'" class="col-span-2">
            <span class="btn-dark-blue-sm text-sm">{{ o.status }}</span>
          </li>
          <li v-else-if="o.status === '取消'" class="col-span-2">
            <span class="btn-remove-sm text-sm">{{ o.status }}</span>
          </li>
          <li class="col-span-4">{{ o.user }}</li>
          <li class="col-span-2">$ {{ o.price }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shopList',
    components: {},
    data() {
      return {
        filter_status: ['全部', '完成', '取消'],
        order_active: 0,
        order_detailname: [
          {
            name: '訂單日期',
            col: 'col-span-2'
          },
          {
            name: '訂單號碼',
            col: 'col-span-2'
          },
          {
            name: '訂單狀態',
            col: 'col-span-2'
          },
          {
            name: '顧客',
            col: 'col-span-4'
          },

          {
            name: '總計',
            col: 'col-span-2'
          }
        ],
        order: [
          {
            data: '2021/06/20',
            number: '87554862',
            link: '/shop_1/order/detail_complate',
            user: 'bJJ',
            status: '完成',
            price: 800
          },
          {
            data: '2021/06/22',
            number: '87554588',
            link: '/shop_1/order/detail_remove',
            user: 'bob',
            status: '取消',
            price: 0
          }
        ]
      }
    },
    methods: {},
    watch: {},
    computed: {
      filterOrder() {
        if (this.order_active === 1) {
          return this.order.filter(of => of.status === '完成')
        } else if (this.order_active === 2) {
          return this.order.filter(of => of.status === '取消')
        } else {
          return this.order
        }
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .orderStatus .active {
    color: white;
    border-color: var(--color-main-500);
    background-color: var(--color-main-500);
  }
  @media (max-width: 1280px) {
    .w-1280 {
      min-width: 1280px;
    }
  }
</style>
