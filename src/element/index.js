// 导入自己需要的组件
import {
  Button,
  Form,
  FormItem,
  Input,
  Radio
} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Radio)
  }
}
export default element
