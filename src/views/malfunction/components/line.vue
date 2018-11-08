<template>
  <div :class="className" :style="{height:height,width:width,marginTop:'-1px'}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme

const animationDuration = 1500

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
            formatter: '{c}%',
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
            boundaryGap: false,
            data : ['0:00~4:00', '4:00~8:00', '8:00~12:00', '12:00~16:00', '16:00~20:00', '20:00~24:00']
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
            type: 'line',
            barWidth: '40%',
            barGap: 0,
            itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: '{c}'
                        }
                    }
            },
            itemStyle: {
                        normal: {
                      color:'##47b9ed'
                  }
            },
            data: [10, 52, 20, 34, 39, 25],
            areaStyle: {
                 normal: {
                     color: {
                         x: 0,
                         y: 0,
                         x2: 0,
                         y2: 1,
                         type: "linear",
                         global: false,
                         colorStops: [{
                             offset: 0,
                             color: "rgba(137, 189, 27, 0.3)"
                         }, {
                             offset: 0.8,
                             color: "rgba(137, 189, 27, 0)"
                         }]
                     },
                     shadowColor: "rgba(0, 0, 0, 0.1)",
                     shadowBlur: 10
                 }
           },
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
