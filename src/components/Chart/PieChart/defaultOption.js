import { fitChartSize, fitChartSizeVh } from '@/utils/dataUtil.js'

export function getBasicOption() {
  return {
    title: {
      text: '某某水果数据',
      left: 'center',
      textStyle: {
        fontSize: fitChartSizeVh(16),
        color: '#fff',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      itemWidth: fitChartSize(16),
      itemHeight: fitChartSizeVh(10),
      textStyle: {
        color: '#fff',
        fontSize: fitChartSizeVh(14),
      },
    },
    series: [
      {
        name: '水果购买占比',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        emphasis: {
          itemStyle: {
            shadowBlur: fitChartSizeVh(1),
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.1)',
          },
        },
        label: {
          fontSize: fitChartSizeVh(12),
          color: '#fff',
        },
        data: [], // 这里在使用的时候会被业务数据替换
      },
    ],
  }
}
