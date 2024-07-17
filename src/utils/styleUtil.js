import variables from '@/styles/js.module.scss'

const designWidth = variables.designWidth
const designHeight = variables.designHeight

const styleUtil = {

  // px转vw, vh换算
  px2vw(_px) {
    return `${_px * 100.0 / designWidth}vw`
  },

  px2vh(_px) {
    return `${_px * 100.0 / designHeight}vh`
  },

  px2font(_px) {
    return `${_px * 100.0 / designWidth}vw`
  },

}

export default styleUtil
