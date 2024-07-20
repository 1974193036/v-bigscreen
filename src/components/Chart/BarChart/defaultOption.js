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
    series: [
      {
        data: [0, 0, 0],
        type: 'bar',
      },
    ],
  }
}
