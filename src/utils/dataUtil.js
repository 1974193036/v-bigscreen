/* Echarts图表单位自适应 */
export function fitChartSize(size, defalteWidth = 1920) {
  const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  if (!clientWidth)
    return size
  const scale = (clientWidth / defalteWidth)
  return Number((size * scale).toFixed(3))
}
export function fitChartSizeVh(size, defalteHeight = 1080) {
  const clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientheight
  if (!clientHeight)
    return size
  const scale = (clientHeight / defalteHeight)
  return Number((size * scale).toFixed(3))
}
