<script>
import { fitChartSizeVh } from '@/utils/dataUtil'

export default {
  name: 'WarningChart',
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    this.initRadar()
  },
  methods: {
    initRadar() {
      const radar = document.getElementById('warningChart')
      this.chart = this.$echarts.init(radar)

      const { indicator, radarData, name } = {
        indicator: [
          { text: '安防报警', max: 100, color: '#fff' },
          { text: '烟雾预警', max: 100, color: '#fff' },
          { text: '温度预警', max: 100, color: '#fff' },
          { text: '用电预警', max: 100, color: '#fff' },
          { text: '用水预警', max: 100, color: '#fff' },
        ],
        radarData: [85, 96, 85, 50, 65],
      }
      const option = {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
        },
        radar: [
          {
            indicator,
            name: {
              show: true,
              textStyle: {
                // fontWeight: "bold",
                fontSize: fitChartSizeVh(16),
              },
            },
            center: ['50%', '50%'],
            radius: '70%',
            shape: 'circle',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                opacity: 0.3,
                color: '#fff',
                width: 1,
              },
            },
          },
        ],
        polar: {
          radius: '70%',
        },
        angleAxis: {
          type: 'category',
          data: name,
          boundaryGap: false,
          clockwise: false,
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        radiusAxis: {
          show: false,
        },
        series: [
          {
            name: '',
            type: 'radar',
            tooltip: {
              trigger: 'item',
            },
            symbolSize: 4,
            lineStyle: {
              width: 0,
            },
            itemStyle: {
              // 此属性的颜色和下面areaStyle属性的颜色都设置成相同色即可实现
              color: '#47FCEB',
              borderColor: '#47FCEB',
            },
            data: [
              {
                value: radarData,
                name: '安防预警',
                areaStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [{ offset: 1, color: 'rgba(71, 252, 235, 0.2)' }],
                    ),
                  },
                },
              },
            ],
          },
        ],
      }

      option && this.chart.setOption(option)
    },
  },
}
</script>

<template>
  <div id="warningChart" v-chart-resize />
</template>

<style scoped lang="scss">
#warningChart {
  width: vw(258.461);
  height: vh(251.414);
  color: #fff;
}
</style>
