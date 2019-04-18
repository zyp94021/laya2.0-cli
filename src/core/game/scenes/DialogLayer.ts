import GameApp from '../GameApp'
import { BaseLayer } from './BaseLayer'
import { ILayer } from './interface/ILayer'

export class DialogLayer extends BaseLayer implements ILayer {
  // private mMask
  public init() {
    super.init()
  }

  private openViews = []

  private masks: Map<string, Laya.View> = new Map()

  public openView(view: Laya.View, ...args) {
    let mask = this.masks.get(view.name)
    if (!mask) {
      mask = new Mask()
      mask.on(Laya.Event.CLICK, this, () => {
        GameApp.viewMgr.closeView(view)
      })
      this.masks.set(view.name, mask)
    }
    mask.width = Laya.stage.width
    mask.height = Laya.stage.height
    this.masks.set(view.name, mask)
    this.addChild(mask)
    GameApp.dispatcher.Observe(Message.CLOSE_DIALOG, this, () => {
      GameApp.viewMgr.closeView(view)
    })
    super.openView.apply(this, [view, ...args])
    view.anchorX = 0.5
    view.anchorY = 0.5
    view.x = view.width / 2
    view.y = view.height / 2
    view.mouseThrough = true
    let tween = new Laya.Tween()
    view.scaleX = 0.8
    view.scaleY = 0.8
    tween.to(
      view,
      { scaleX: 1.05, scaleY: 1.05 },
      100,
      null,
      new Laya.Handler(this, () => {
        let tween = new Laya.Tween()
        tween.to(view, { scaleX: 1, scaleY: 1 }, 100, null)
      }),
    )
  }
  public closeView(view: any) {
    this.removeChild(this.masks.get(view.name))
    super.closeView(view)
  }
}
class Mask extends Laya.View {
  constructor() {
    super()
  }
}
