import {
  fitChartSize,
  fitChartSizeVh,
} from '@/utils/dataUtil.js'

export function getBasicOption() {
  return {
    legend: {
      show: false,
    },
    tooltip: {},
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
    grid: {
      top: fitChartSizeVh(30),
      right: fitChartSize(10),
      left: fitChartSize(20),
      bottom: fitChartSizeVh(20), // 间距自适应
      containLabel: true,
    },
    series: [
      {
        data: [0, 0, 0],
        type: 'bar',
      },
    ],
  }
}
