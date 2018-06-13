import wepy from 'wepy'

export default class proCircleMixin extends wepy.mixin {
  drawProgressbg(id, status) {
    // 使用 wx.createContext 获取绘图上下文 context
    var ctx = wepy.createCanvasContext(status + '-' + id + '-canvasProgressbg')
    ctx.setLineWidth(1) // 设置圆环的宽度
    ctx.setStrokeStyle('#46515D')  // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状
    ctx.beginPath() //  开始一个新的路径
    ctx.arc(30, 30, 28, 0, 2 * Math.PI, false)
    //  设置一个原点(110,110)，半径为100的圆的路径到当前路径
    ctx.stroke()  // 对当前路径进行描边
    wepy.drawCanvas({
      canvasId: status + '-' + id + '-canvasProgressbg',
      actions: ctx.getActions() // 获取绘图动作数组
    })
  }
  drawProgressCircle(id, status, complete) {
    var context = wepy.createCanvasContext(status + '-' + id + '-canvasProgress')
    // 设置渐变
    var gradient = context.createLinearGradient(200, 100, 100, 200)
    gradient.addColorStop('0', '#fff')
    gradient.addColorStop('0.5', '#fff')
    gradient.addColorStop('1.0', '#fff')

    context.setLineWidth(3)
    context.setStrokeStyle(gradient)
    context.setLineCap('round')
    context.beginPath()
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    context.arc(30, 30, 28, -Math.PI / 2, complete * Math.PI * 2 / 100 - Math.PI / 2, false)
    context.stroke()
    wepy.drawCanvas({
      canvasId: status + '-' + id + '-canvasProgress',
      actions: context.getActions() // 获取绘图动作数组
    })
  }
}
