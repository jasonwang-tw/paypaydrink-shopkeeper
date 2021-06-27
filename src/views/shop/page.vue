<template>
  <div id="shopPage">
    <h2><i class="bi bi-shop mr-3 text-subyellow-100"></i>古亭shop</h2>
    <span class="text-blue-500 text-sm">資料更新: 2020/6/22 16:32</span>
    <hr />
    <div class="grid grid-cols-12 gap-10">
      <div class="charts col-span-6">
        <div id="barGraph" style="height: 350px;"></div>
      </div>
      <div class="charts col-span-6">
        <div id="pieGraph" style="height: 350px;"></div>
      </div>
    </div>
    <div class="mt-10 bg-white p-5 rounded-xl">
      <div class="w-1/2">
        <h4>日期範圍</h4>
        <div class="flex items-center">
          <input type="date" name="" id="" /><span class="px-5">~</span>
          <input type="date" name="" id="" />
          <button type="submit" class="bg-main-100 text-white w-1/5 ml-5">送出</button>
        </div>
      </div>
      <ul class="flex pl-0 list-none">
        <li v-for="(o, index) in order_detail" class="py-5 px-7">{{ o }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'

  // 引入基本模板,按需載入
  let echarts = require('echarts/lib/echarts')
  // 引入柱狀圖
  require('echarts/lib/chart/bar')
  // 引入柱狀圖
  require('echarts/lib/chart/pie')
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  export default {
    name: 'home',
    components: {
      topmenu
    },
    data() {
      return {
        order_detail: ['銷售總計', '銷售淨額', '訂單', '售出飲品']
      }
    },
    mounted() {
      this.drawBar()
      this.drawPie()
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
            right: '6%',
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
              color: ['#012e68']
            },
            {
              name: '去年',
              type: 'bar',
              data: [106, 701, 150, 620, 480, 270, 380, 280, 450, 57, 350, 120],
              color: ['#f39519']
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
    }
  }
</script>

<style lang="scss" scoped>
  .charts {
    padding: 2rem;
    background-color: white;
    border-radius: 0.75rem;
  }
</style>
