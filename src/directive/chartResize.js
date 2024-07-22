import * as Echarts from 'echarts/core'
import elementResizeDetectorMaker from 'element-resize-detector'
import { debounce } from 'lodash-es'

const HANDLER = '_vue_resize_handler'
const erd = elementResizeDetectorMaker()

export default {
  bind(el, binding) {
    el[HANDLER] = binding.value
      ? binding.value
      : debounce(() => {
        const chart = Echarts.getInstanceByDom(el)
        if (chart)
          chart.resize()
      }, 100)

    erd.listenTo(el, el[HANDLER])
  },
  unbind(el) {
    erd.removeListener(el, el[HANDLER])
    delete el[HANDLER]
  },
}
