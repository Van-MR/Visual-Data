<template>
  <div :class="className" :style="{height:height,width:width,marginTop:'-1px'}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
const animationDuration = 3000
let option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },

    xAxis : [
        {
            type : 'category',
            data : ['10M', '20M', '50M', '100M', '其它'],
            shadow:false

        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {     //网格线
              show: false
            },
            splitArea : {show : false}//保留网格区域
        }
    ],
    series : [
        {
            type:'bar',
            barWidth: '40%',
            itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#2645e7'
                }, {
                    offset: 1,
                    color: '#0e2690'
                }]),
                opacity: 1,
            }
           },
            data:[10, 52, 200, 334, 390]
        }
    ]
};

export default {
  props: {
    chartData: {
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
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    setOptions({ xData,expectedData,actualData } = {}) {
      this.chart = echarts.init(this.$el, 'macarons')
      this.chart.setOption(option)
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData2)
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
