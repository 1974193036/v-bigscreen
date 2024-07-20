import {
  fitChartSize,
  fitChartSizeVh,
} from '@/utils/dataUtil.js'

export function getBasicOption() {
  return {
    title: {
      text: '',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {},
    grid: {
      top: fitChartSizeVh(30),
      right: fitChartSize(10),
      left: fitChartSize(20),
      bottom: fitChartSizeVh(20), // 间距自适应
      containLabel: true,
    },
    seriesData: [],
  }
}
