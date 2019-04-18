﻿// 最上层toast

class Toast {
  public static toasts: Array<Toast> = []

  private toast: Laya.Box

  private finallyY: number

  private style = {
    fontColor: '#ffffff', //文字颜色
    bgColor: '#000000', //背景色
    fontSize: 28, //字体大小
    h: 50, //高度
    w: 100, //宽度
    alpha: 0.5, //背景透明度
    circle: 10, //圆角
    y: 300, //初始上边距
    spaceH: 10, //两个tip上下间距
    top: 150, //最终上边距
  }
  public constructor(msg: string, y: number) {
    let fontColor = this.style.fontColor,
      bgColor = this.style.bgColor,
      fontSize = this.style.fontSize,
      h = this.style.h,
      w = this.style.w,
      alpha = this.style.alpha,
      circle = this.style.circle
    y = y || this.style.y
    this.finallyY = y

    this.toast = new Laya.Box()
    this.toast.zOrder = 99999
    this.toast.top = y
    this.toast.centerX = 0
    let toast_msg = new Laya.Label()
    toast_msg.text = msg
    toast_msg.fontSize = fontSize
    toast_msg.color = fontColor
    toast_msg.centerX = 0
    toast_msg.centerY = 0

    this.toast.width = toast_msg.width + w
    this.toast.height = h

    let toast_bg = new Laya.Sprite()

    GraphicsDrawUtil.drawRounded(
      toast_bg.graphics,
      0,
      0,
      0,
      0,
      this.toast.width,
      this.toast.height,
      circle,
      bgColor,
    )

    toast_bg.alpha = alpha
    this.toast.alpha = 0
    this.toast.addChild(toast_bg)
    this.toast.addChild(toast_msg)
    let tween1 = new Laya.Tween()
    let tween2 = new Laya.Tween()
    tween1.to(this.toast, { alpha: 1 }, 800, Laya.Ease.quintOut)
    tween2.to(
      this.toast,
      { alpha: 0 },
      500,
      Laya.Ease.quintOut,
      Laya.Handler.create(this, this.remove),
      1300,
    )
  }

  public remove() {
    Toast.toasts.shift()
    this.toast.removeSelf()
  }

  public static removeAll() {
    if (Toast.toasts && Toast.toasts.length) {
      Toast.toasts.forEach(item => {
        item.toast.removeSelf()
      })
    }
  }

  public static launch(msg: string, y: number = null) {
    let toast = new Toast(msg, y)
    this.toasts.forEach(item => {
      if (item.toast.y < item.style.top) {
        item.toast.removeSelf()
        this.toasts.shift()
      } else {
        item.finallyY = item.finallyY - item.style.h - item.style.spaceH
        let tween3 = new Laya.Tween()
        tween3.to(item.toast, { y: item.finallyY }, 200)
      }
    })
    Laya.stage.addChild(toast.toast)

    this.toasts.push(toast)
  }
}
