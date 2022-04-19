import Vue from 'vue'
// 导入自己需要的组件
import {
  Button,
  Form,
  FormItem,
  Input,
  Radio,
  Message,
  Breadcrumb,
  BreadcrumbItem,
  Upload,
  Table,
  Loading,
  TableColumn,
  Row,
  Col
} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Radio)
    Vue.use(Breadcrumb)
    Vue.use(BreadcrumbItem)
    Vue.use(Upload)
    Vue.use(Table)
    Vue.use(Loading)
    Vue.use(TableColumn)
    Vue.use(Row)
    Vue.use(Col)
  }
}

Vue.prototype.$message = Message
export default element
