<template>
  <div :class="className" :style="{height:height,width:width,marginTop:'-1px'}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme

const animationDuration = 3000

export default {
  props: {
    chartData1: {
      type: Object
    },
    className: {
      type: String,
      default: 'chart'
    },
    text:{
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null,
      data:[]
    }
  },
  watch: {
    chartData1: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  mounted() {
    this.initChart()
     //alert(this.data)
    //window.addEventListener('resize', this.__resizeHanlder)
  },
  methods: {
      setOptions({ xData,expectedData } = {}) {
        this.chart = echarts.init(this.$el, 'macarons')
        this.chart.setOption({
          title: {
            x:'20',
            top: '20',
            textStyle: {
              color: '#041100',
              fontSize: '12'
            }
          },
          tooltip: {
            trigger: 'axis',
            formatter: '{c}',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: 60,
            left: '1%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data : ['华为8546V', '中兴1234X', '华为1234V', '小米1234V', '移动1234V'],
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type : 'value',
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value}'
              },
            axisTick: {
              show: false
            },
            splitLine: {     //网格线
              show: false
            },
            splitArea : {show : false}
          }],
          series: [{
            type: 'bar',
            barWidth: '40%',
            barGap: 0,
            itemStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#14c8d4'
                  }, {
                      offset: 1,
                      color: '#43eec6'
                  }]),
                  opacity: 1,
              }
            },
            data: [200, 334, 390, 330, 220],
            animationDuration
          }]
        })
      },
      initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions()
      var _this = this
      window.onresize = function(){
         _this.chart.resize()
      }
      window.onload = function (){
        _this.chart.resize()
      }
     }
  }
}
</script>
