<template>
  <div id="shopDetail">
    <h3 class="mt-10">#87554588 詳細資料</h3>
    <div class="bg-white p-5 border-lightblue-high border rounded-lg mb-5">
      <ul class="list-none pl-0 grid grid-cols-12 text-blue-500">
        <li class="col-span-2">建立日期</li>
        <li class="col-span-1">狀態</li>
        <li class="col-span-2">顧客</li>
        <li class="col-span-2">電子郵件</li>
        <li class="col-span-2">聯絡電話</li>
        <li class="col-span-3">顧客提供的附註</li>
      </ul>
      <hr />
      <ul class="list-none pl-0 grid grid-cols-12">
        <li class="col-span-2">2021/07/05 06:20</li>
        <li class="col-span-1">
          <span class="btn-remove-sm text-sm">
            取消
          </span>
        </li>
        <li class="col-span-2">Bjj</li>
        <li class="col-span-2">gymizut@mailinator.com</li>
        <li class="col-span-2">+1 (366) 115-4746</li>
        <li class="col-span-3">Omnis explicabo Ass</li>
      </ul>
    </div>
    <div class="bg-white p-5 border-lightblue-high border rounded-lg mb-10">
      <h5>商品詳細</h5>
      <hr />
      <ul class="list-none grid grid-cols-12 text-blue-500 pl-0">
        <li class="col-span-7">品項</li>
        <li class="col-span-2">單價</li>
        <li class="col-span-1">數量</li>
        <li class="col-span-2">小計</li>
      </ul>
      <hr />
      <ul class="produst_list list-none grid grid-cols-12 pl-0 py-3" v-for="(p, index) in products">
        <li class="col-span-7">{{ p.name }}</li>
        <li class="col-span-2">$ {{ p.price }}</li>
        <li class="col-span-1">{{ p.quantity }}</li>
        <li class="col-span-2">$ {{ p.price * p.quantity }}</li>
      </ul>
      <hr />
      <ul class="sumup pl-0 list-none grid grid-cols-12 mt-5 text-right">
        <li class="col-span-12">
          小計：<span>$ {{ products_total }}</span>
        </li>
        <li class="col-span-12">
          折扣：<span>$ {{ discount }}</span>
        </li>
        <li class="col-span-12">
          總計：<span>$ {{ products_total - discount }}</span>
        </li>
        <li class="col-span-12">
          <div class="btn-remove-sm text-sm inline-block my-1">未收款</div>
        </li>
        <li class="col-span-12">付款日期：<span></span></li>
        <li class="col-span-12">付款方式：<span class="font-bold"></span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shopDetail',
    components: {},
    data() {
      return {
        products: [
          {
            name: '烏龍茶',
            price: 100,
            quantity: 3
          },
          {
            name: '紅茶',
            price: 300,
            quantity: 2
          }
        ],
        discount: 50
      }
    },
    methods: {},
    watch: {},
    computed: {
      products_total() {
        const price_total = this.products.map(p => p.price * p.quantity)
        return price_total.reduce((a, b) => {
          return a + b
        }, 0)
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .produst_list:nth-child(odd) {
    background-color: var(--color-lightblue-bg);
  }
  .sumup {
    li {
      padding: 0.25rem;
    }
    span {
      width: 150px;
      display: inline-block;
    }
  }
</style>
