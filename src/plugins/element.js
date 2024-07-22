import {
  Button,
  ButtonGroup,
  Icon,
  Image,
  Input,
  Message,
  Table,
  TableColumn,
  Tooltip,
} from 'element-ui'

export default {
  install(Vue) {
    Vue.use(Input)
    Vue.use(Button)
    Vue.use(ButtonGroup)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Tooltip)
    Vue.use(Icon)
    Vue.use(Image)

    Vue.prototype.$message = Message
  },
}
