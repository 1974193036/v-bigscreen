<script>
import { fitChartSizeVh } from '@/utils/dataUtil'
import { LineChart } from '@/components/Chart'

const color = ['#EC7C59', '#47FCEB']

export default {
  name: 'VehicleChart',
  components: {
    LineChart,
  },
  data() {
    return {
      dataList: [],
      extraOption: {},
    }
  },
  created() {
    // 获取数据
    setTimeout(() => {
      this.dataList = [
        { name: '进入', data: [100, 130, 230, 100, 135, 100] },
        { name: '开出', data: [150, 100, 140, 137, 106, 145] },
      ]
      this.updateExtraOption()
    }, 200)

    // 更新数据
    setTimeout(() => {
      this.dataList = [
        { name: '进入', data: [1100, 130, 230, 100, 135, 100] },
        { name: '开出', data: [1150, 100, 140, 137, 106, 145] },
      ]
      this.updateExtraOption()
    }, 2000)
  },
  methods: {
    updateExtraOption() {
      const seriesData = this.dataList.map((item, index) => ({
        ...item,
        ...this.commonConfigFn(index),
      }))
      this.extraOption = {
        ...this.getCommonExtraOption(),
        series: seriesData,
      }
    },
    commonConfigFn(index) {
      return {
        type: 'line',
        smooth: true,
        symbol: 'emptyCircle', // 空心小圆点。线条小圆点形状
        symbolSize: fitChartSizeVh(6), // 小圆点大小
        itemStyle: {
          // 还是小圆点设置
        },

        label: {
          show: false, // 不显示小圆点上的label文字
        },
        lineStyle: {
          width: 1, // 线条设置
        },

        areaStyle: {
          // 填充线条下面的面积区域颜色。（areaStyle只是锦上添花）
          opacity: 0.2,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: color[index], // 上处的颜色
              },
              {
                offset: 1,
                color: 'transparent', // 下处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      }
    },
    getCommonExtraOption() {
      return {
        color,
        title: {
          text: '',
        },
        legend: {
          orient: 'vertical',
          left: 'center',
          bottom: 'bottom',
          padding: [fitChartSizeVh(10), 0, 0, 0],
          textStyle: {
            color: '#fff',
            fontSize: fitChartSizeVh(16),
          },
        },
        tooltip: {
          show: true,
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,.3)',
              width: 1,
              type: 'solid',
            },
          },
          data: ['9:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#fff',
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true, // 不显示grid水平分割线
          },
        },
      }
    },
  },
}
</script>

<template>
  <div id="vehicleChart">
    <LineChart :series-data="dataList" :extra-option="extraOption" />
  </div>
</template>

<style scoped lang="scss">
#vehicleChart {
  width: vw(258.46);
  height: vh(251.41);
  color: #fff;
}
</style>
