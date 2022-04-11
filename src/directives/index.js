/**
 * @description 通过自定义指令的形式处理图片失效的问题
 * @author zsy
 */

/**
 * 负责管理所有的自定义指令
 */
export const imagerror = {
  // 指令对象 会在当前的dom元素插入到节点之后执行
  inserted (dom, options) {
    //   dom表示当前的指令作用的dom对象
    // 如果处理的是 <img> 则dom就是img节点
    // 当图片有地址，但是地址没有加载成功的时候，会报错，会触发图片的一个事件onerror
    // 备注 ：var img = document.getElementById(img')   img.onerror = function(){}
    dom.onerror = function () {
      // 当图片异常的时候，会将指令配置的默认图片设置为该图片的内容
      // 使用 <img v-imagerror = 'img'/>  data(){return {img:'a.jpg'}}
      dom.src = options.value // options.value就是 a.jpg
    }
  }
}
