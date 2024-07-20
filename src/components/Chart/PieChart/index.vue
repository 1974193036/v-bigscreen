<script>
import * as Echarts from 'echarts'
import { debounce, merge } from 'lodash-es'
import { getBasicOption } from './defaultOption.js'
import { pieChartColor } from './../color.js'

export default {
  name: 'PieChart',
  props: {
    // 正常的业务数据，对应echarts饼图配置中series[0].data
    seriesData: {
      type: Array,
      required: true,
      default: () => [],
    },
    // 表示需要特殊定制的配置
    // 一般UI会规定一个统一的设计规范（比如颜色，字体，图例格式，位置等）
    // 但不排除某个图标会和设计规范不同，需要特殊定制样式，所以开放这个配置，增强灵活性
    extraOption: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      chart: null,
    }
  },

  // 监听数据变化，更新图表
  watch: {
    seriesData: {
      deep: true,
      handler() {
        this.updateChartView()
      },
    },
  },

  mounted() {
    this.chart = Echarts.init(this.$el)
    this.updateChartView()
    this.fn = debounce(this.handleWindowResize.bind(this), 100)
    window.addEventListener('resize', this.fn)
  },
  beforeDestroy() {
    if (!this.chart)
      return
    this.chart.dispose()
    this.chart = null
    window.removeEventListener('resize', this.fn)
  },

  methods: {
    /* 合并配置项和数据 */
    assembleDataToOption() {
      // 这部分的图例formatter取决于UI要求，如果你的项目中不需要，就可以不写formatter
      // 由于echarts版本的迭代，这里的写法也有稍许改变
      // const formatter = (name) => {
      //   const total = this.seriesData.reduce((acc, cur) => acc + cur.value, 0)
      //   const data = this.seriesData.find(item => item.name === name) || {}
      //   const percent = data.value
      //     ? `${Math.round((data.value / total) * 100)}%`
      //     : '0%'

      //   return `${name} ${percent}`
      // }

      const opt = merge(
        {},
        getBasicOption(),
        { color: pieChartColor },
        {
          // legend: { formatter },
          series: [{ data: this.seriesData }],
        },
        this.extraOption,
      )
      // console.log(opt)
      return opt
    },

    /**
     * 更新echart视图
     */
    updateChartView() {
      if (!this.chart)
        return
      const fullOption = this.assembleDataToOption()
      this.chart.setOption(fullOption, true)
    },

    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    handleWindowResize() {
      if (!this.chart)
        return
      this.updateChartView()
    },

  },

}
</script>

<template>
  <div v-chart-resize class="chart" />
</template>

<style scoped lang="scss">
.chart {
  width: 100%;
  height: 100%;
}
</style>
