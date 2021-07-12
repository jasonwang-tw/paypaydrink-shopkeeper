<template>
  <div id="shopData">
    <div class="grid grid-cols-12 gap-10 overflow-hidden">
      <div class="charts col-span-12 xl:col-span-6 border-lightblue-high border overflow-x-auto">
        <div id="barGraph" class="w-768 pr-16 xl:pr-0" style="height: 350px;"></div>
      </div>
      <div class="charts col-span-12 xl:col-span-6 border-lightblue-high border overflow-x-auto">
        <div id="pieGraph" class="w-768" style="height: 350px;"></div>
      </div>
    </div>
    <div class="mt-10 mb-5 flex items-center">
      <h3 class="flex-shrink-0 mb-0 mr-5">績效</h3>
      <div class="border-t border-lightblue-high w-full"></div>
    </div>
    <div class="xl:flex">
      <div class="xl:w-1/3 flex items-center border-r border-lightblue-high mr-10 mb-10 xl:mb-0">
        <h5 class="mr-5 text-blue-900 mb-0">目前顯示</h5>
        <h3 class="mb-0">近30天</h3>
      </div>
      <div class="xl:w-1/2">
        <h5 class="text-blue-900">自訂篩選日期</h5>
        <div class="xl:flex items-center">
          <input type="date" name="" id="" /><span class="px-5">~</span>
          <input type="date" name="" id="" />
          <button
            type="submit"
            class="bg-main-500 text-white xl:w-1/6 w-1/2 xl:ml-5 flex-shrink-0 mt-5 xl:mt-0"
          >
            篩選
          </button>
        </div>
      </div>
    </div>
    <ul class="orderTitle list-none pl-0 flex mt-10">
      <li
        v-for="(o, index) in active_title"
        class="btn-border-light-blue mr-5"
        :class="{ active: active === index }"
        @click=";(active = index), (tabActive = index)"
      >
        {{ o }}
      </li>
    </ul>
    <!-- 銷售總計 -->
    <div class="sales" :class="{ hidden: dataTab.sales }">
      <div class="mt-10 mb-5 bg-white p-5 border-lightblue-high border rounded-lg">
        <div class="talbeTitle mb-0 flex text-lg overflow-x-auto">
          <div class="mr-5 font-semibold">總計</div>
          <div class="mr-5 border-r border-lightblue-high pr-5">
            訂單 <span class="text-subyellow-500">{{ sales_order_quantity }}</span> 筆
          </div>
          <div class="mr-5 border-r border-lightblue-high pr-5">
            銷售總額 <span class="text-subyellow-500 ml-3">$ {{ sales_income }}</span>
          </div>
          <div class="mr-5 border-r border-lightblue-high pr-5">
            退款 <span class="text-subyellow-500 ml-3">$ {{ sales_refund }}</span>
          </div>
          <div class="mr-5 border-r border-lightblue-high pr-5">
            優惠折扣 <span class="text-subyellow-500 ml-3">$ {{ sales_discount }}</span>
          </div>
          <div class="mr-5 border-r border-lightblue-high pr-5">
            銷售淨額
            <span class="text-subyellow-500 ml-3"
              >$ {{ sales_income - sales_refund - sales_discount }}</span
            >
          </div>
          <div>
            預估分潤
            <span class="text-subyellow-500 ml-3"
              >$
              {{ Math.round((sales_income - sales_refund - sales_discount) * 0.3 * 0.025) }}</span
            >
          </div>
        </div>
      </div>
      <div class=" bg-white p-5 border-lightblue-high border rounded-lg overflow-x-auto">
        <ul class="list-none pl-0 grid grid-cols-12 text-blue-500 w-1280">
          <li v-for="(sd, index) in sales_detailname" :class="sd.col">{{ sd.name }}</li>
        </ul>
        <hr class="w-1280" />
        <ul
          v-for="(s, index) in sales"
          class="list-none pl-0 grid grid-cols-12 border-b border-lightblue-high pb-5 mb-5 w-1280"
        >
          <li class="col-span-1">{{ s.data }}</li>
          <li class="col-span-1">{{ s.order_quantity }}</li>
          <li class="col-span-2">$ {{ s.income }}</li>
          <li class="col-span-2">$ {{ s.refund }}</li>
          <li class="col-span-2">$ {{ s.discount }}</li>
          <li class="col-span-2">$ {{ s.income - s.refund - s.discount }}</li>
          <li class="col-span-2">
            $ {{ Math.round((s.income - s.refund - s.discount) * 0.3 * 0.025) }}
          </li>
        </ul>
      </div>
    </div>
    <!-- 訂單 -->
    <div class="order" :class="{ hidden: dataTab.order }">
      <div class="mt-10 mb-5 bg-white p-5 border-lightblue-high border rounded-lg">
        <div class="talbeTitle mb-0 flex text-lg">
          <div class="mr-5 font-semibold">總計</div>
          <div class="mr-5 border-r border-lightblue-high pr-5">
            訂單 <span class="text-subyellow-500">{{ order.length }}</span> 筆
          </div>
          <div>
            銷售淨額 <span class="text-subyellow-500 ml-3">$ {{ order_total }}</span>
          </div>
        </div>
      </div>
      <div class=" bg-white p-5 border-lightblue-high border rounded-lg overflow-x-auto">
        <ul class="list-none pl-0 grid grid-cols-12 text-blue-500 w-1280">
          <li v-for="(od, index) in order_detailname" :class="od.col">{{ od.name }}</li>
        </ul>
        <hr class="w-1280" />
        <ul
          v-for="(o, index) in order"
          class="list-none pl-0 grid grid-cols-12 border-b border-lightblue-high pb-5 mb-5 w-1280"
        >
          <li class="col-span-1">{{ o.data }}</li>
          <li class="col-span-1">{{ o.number }}</li>
          <li v-if="o.status === '完成'" class="col-span-1">
            <span class="btn-dark-blue-sm text-sm">{{ o.status }}</span>
          </li>
          <li v-else-if="o.status === '取消'" class="col-span-1">
            <span class="btn-remove-sm text-sm">{{ o.status }}</span>
          </li>
          <li class="col-span-2">{{ o.user }}</li>
          <li class="col-span-3">
            <span v-for="(od, index) in o.drink">{{ od }}、</span>
          </li>
          <li class="col-span-2">$ {{ o.discount }}</li>
          <li class="col-span-2">$ {{ o.price }}</li>
        </ul>
      </div>
    </div>
    <!-- 銷售產品 -->
    <div class="products" :class="{ hidden: dataTab.products }">
      <div class="mt-10 mb-5 bg-white p-5 border-lightblue-high border rounded-lg overflow-x-auto">
        <div class="talbeTitle mb-0 flex text-lg">
          <div class="mr-5 font-semibold">總計</div>
          <div class="mr-5 border-r border-lightblue-high pr-5">
            商品 <span class="text-subyellow-500">{{ products.length }}</span>
          </div>
          <div class="mr-5 border-r border-lightblue-high pr-5">
            售出
            <span class="text-subyellow-500 ml-3">{{ products_quantity }}</span>
          </div>
          <div class="mr-5 border-r border-lightblue-high pr-5">
            銷售額
            <span class="text-subyellow-500 ml-3">$ {{ products_income }}</span>
          </div>
          <div class="mr-5 border-r border-lightblue-high pr-5">
            訂單 <span class="text-subyellow-500 ml-3">{{ products_order }}</span>
          </div>
        </div>
      </div>
      <div class=" bg-white p-5 border-lightblue-high border rounded-lg overflow-x-auto">
        <ul class="list-none pl-0 grid grid-cols-12 text-blue-500 w-1280">
          <li v-for="(sd, index) in products_detailname" :class="sd.col">{{ sd.name }}</li>
        </ul>
        <hr class="w-1280" />
        <ul
          v-for="(s, index) in products"
          class="list-none pl-0 grid grid-cols-12 border-b border-lightblue-high pb-5 mb-5 w-1280"
        >
          <li class="col-span-4">{{ s.name }}</li>
          <li class="col-span-2">{{ s.quantity }}</li>
          <li class="col-span-2">$ {{ s.income }}</li>
          <li class="col-span-2">{{ s.order }}</li>
          <li v-if="s.statue === '上架中'" class="col-span-1">
            <span class="btn-dark-blue-sm text-sm">
              {{ s.statue }}
            </span>
          </li>
          <li v-else-if="s.statue === '補貨中'" class="col-span-1">
            <span class="btn-remove-sm text-sm">
              {{ s.statue }}
            </span>
          </li>
          <li class="col-span-1">{{ s.instock }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  // 引入基本模板,按需載入
  let echarts = require('echarts/lib/echarts')
  // 引入柱狀圖
  // require('echarts/lib/chart/bar')
  // 引入柱狀圖
  // require('echarts/lib/chart/pie')
  // require('echarts/lib/component/tooltip')
  // require('echarts/lib/component/title')

  export default {
    name: 'shopData',
    components: {},
    data() {
      return {
        active: 0,
        active_title: ['銷售總計', '訂單', '售出飲品'],
        tabActive: 0,
        dataTab: {
          sales: false,
          order: true,
          products: true
        },
        sales_detailname: [
          {
            name: '發佈日期',
            col: 'col-span-1'
          },
          {
            name: '訂單數量',
            col: 'col-span-1'
          },
          {
            name: '銷售總額',
            col: 'col-span-2'
          },
          {
            name: '退款',
            col: 'col-span-2'
          },
          {
            name: '優惠折扣',
            col: 'col-span-2'
          },
          {
            name: '銷售淨額',
            col: 'col-span-2'
          },
          {
            name: '預估分潤',
            col: 'col-span-2'
          }
        ],
        sales: [
          {
            data: '2021/06/22',
            order_quantity: 3,
            income: 5545,
            refund: 335,
            discount: 56,
            total: 0
          },
          {
            data: '2021/06/21',
            order_quantity: 1,
            income: 788,
            refund: 22,
            discount: 75,
            total: 0
          }
        ],
        order_detailname: [
          {
            name: '訂單日期',
            col: 'col-span-1'
          },
          {
            name: '訂單號碼',
            col: 'col-span-1'
          },
          {
            name: '訂單狀態',
            col: 'col-span-1'
          },
          {
            name: '顧客',
            col: 'col-span-2'
          },
          {
            name: '售出項目',
            col: 'col-span-3'
          },
          {
            name: '優惠折扣',
            col: 'col-span-2'
          },
          {
            name: '銷售淨額',
            col: 'col-span-2'
          }
        ],
        order: [
          {
            data: '2021/06/22',
            number: '87554588',
            user: 'bob',
            status: '完成',
            drink: ['紅茶', '烏龍茶', '珍珠奶茶'],
            discount: 200,
            price: 800
          },
          {
            data: '2021/06/22',
            number: '87554588',
            user: 'bob',
            status: '取消',
            drink: ['紅茶', '烏龍茶', '珍珠奶茶'],
            discount: 125,
            price: 260
          }
        ],
        products_detailname: [
          {
            name: '商品名稱',
            col: 'col-span-4'
          },
          {
            name: '售出',
            col: 'col-span-2'
          },
          {
            name: '銷售總額',
            col: 'col-span-2'
          },
          {
            name: '訂單',
            col: 'col-span-2'
          },
          {
            name: '狀態',
            col: 'col-span-1'
          },
          {
            name: '庫存',
            col: 'col-span-1'
          }
        ],
        products: [
          {
            name: '烏龍茶',
            quantity: 36,
            income: 5545,
            order: 335,
            statue: '補貨中',
            instock: 0
          },
          {
            name: '珍珠奶茶',
            quantity: 28,
            income: 332,
            order: 35,
            statue: '上架中',
            instock: 278
          }
        ]
      }
    },
    methods: {
      drawBar() {
        // 基於dom，初始化echarts範例
        let barGraph = echarts.init(document.getElementById('barGraph'))
        // 繪製圖表
        barGraph.setOption({
          title: {
            text: '本店全年營收分布',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}萬'
          },
          legend: {
            left: 'center',
            data: ['今年', '去年'],
            bottom: 0
          },
          xAxis: {
            type: 'category',
            name: '月份',
            splitLine: { show: false },
            data: [
              '一月',
              '二月',
              '三月',
              '四月',
              '五月',
              '六月',
              '七月',
              '八月',
              '九月',
              '十月',
              '十一月',
              '十二月'
            ]
          },
          grid: {
            left: '0%',
            right: '40px',
            bottom: '10%',
            containLabel: true
          },
          yAxis: {
            type: 'value',
            name: '萬',
            splitLine: { show: true },
            data: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000']
          },
          series: [
            {
              name: '今年',
              type: 'bar',
              data: [10, 70, 100, 60, 80, 470, 320, 230, 550, 50, 30, 160],
              color: ['#012e68'],
              showBackground: true
            },
            {
              name: '去年',
              type: 'bar',
              data: [106, 701, 150, 620, 480, 270, 380, 280, 450, 57, 350, 120],
              color: ['#f39519'],
              showBackground: true
            }
          ]
        })
      },
      drawPie() {
        let pieGraph = echarts.init(document.getElementById('pieGraph'))
        pieGraph.setOption({
          title: {
            text: '本店熱銷飲品',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} 杯 ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['烏龍茶', '珍珠奶茶', '綠茶', '抹茶珍奶', '豆漿紅茶']
          },
          series: [
            {
              name: '資料來源',
              type: 'pie',
              radius: '70%',
              center: ['50%', '60%'],
              data: [
                { value: 335, name: '烏龍茶' },
                { value: 310, name: '珍珠奶茶' },
                { value: 234, name: '綠茶' },
                { value: 135, name: '抹茶珍奶' },
                { value: 1548, name: '豆漿紅茶' }
              ],
              color: ['#070150', '#f39519', '#06a2d1', '#57c4e5', '#336699'],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      }
    },
    watch: {
      tabActive: {
        handler() {
          if (this.tabActive === 0) {
            ;(this.dataTab.sales = false),
              (this.dataTab.order = true),
              (this.dataTab.products = true)
          } else if (this.tabActive === 1) {
            ;(this.dataTab.sales = true),
              (this.dataTab.order = false),
              (this.dataTab.products = true)
          } else if (this.tabActive === 2) {
            ;(this.dataTab.sales = true),
              (this.dataTab.order = true),
              (this.dataTab.products = false)
          }
        }
      }
    },
    computed: {
      sales_order_quantity() {
        return this.sales.reduce((a, b) => {
          return a + b.order_quantity
        }, 0)
      },
      sales_income() {
        return this.sales.reduce((a, b) => {
          return a + b.income
        }, 0)
      },
      sales_refund() {
        return this.sales.reduce((a, b) => {
          return a + b.refund
        }, 0)
      },
      sales_discount() {
        return this.sales.reduce((a, b) => {
          return a + b.discount
        }, 0)
      },
      order_total() {
        return this.order.reduce((a, b) => {
          return a + b.price
        }, 0)
      },
      products_quantity() {
        return this.products.reduce((a, b) => {
          return a + b.quantity
        }, 0)
      },
      products_income() {
        return this.products.reduce((a, b) => {
          return a + b.income
        }, 0)
      },
      products_order() {
        return this.products.reduce((a, b) => {
          return a + b.order
        }, 0)
      }
    },
    mounted() {
      this.drawBar()
      this.drawPie()
    }
  }
</script>

<style lang="scss" scoped>
  .charts {
    padding: 2rem;
    background-color: white;
    border-radius: 0.5rem;
  }
  .orderTitle .active {
    color: white;
    border-color: var(--color-main-500);
    background-color: var(--color-main-500);
  }
  .talbeTitle > div {
    flex-shrink: 0;
  }

  @media (max-width: 1280px) {
    .w-1280 {
      min-width: 1280px;
    }
    .w-768 {
      min-width: 768px;
    }
  }
</style>
