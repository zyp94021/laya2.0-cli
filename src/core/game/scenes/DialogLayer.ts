import GameApp from '../GameApp'
import { BaseLayer } from './BaseLayer'
import { ILayer } from './interface/ILayer'
import { LayerConst } from './LayerConst'
class Mask extends Laya.View {
  public constructor() {
    super()
  }
}
export class DialogLayer extends BaseLayer implements ILayer {
  // private mMask
  constructor(scene: Laya.Scene) {
    super(scene)
  }
  static layerKey = LayerConst.dialog
  private openViews = []

  private masks: Map<string, Laya.View> = new Map()

  public openView(view: Laya.View, ...args: any[]): void {
    let mask = this.masks.get(view.name)
    if (!mask) {
      mask = new Mask()
      mask.on(
        Laya.Event.CLICK,
        this,
        (): void => {
          GameApp.viewMgr.closeView(view)
        },
      )
      this.masks.set(view.name, mask)
    }
    mask.width = Laya.stage.width
    mask.height = Laya.stage.height
    this.masks.set(view.name, mask)
    this.addChild(mask)
    // GameApp.dispatcher.Observe(
    //   Message.CLOSE_DIALOG,
    //   this,
    //   (): void => {
    //     GameApp.viewMgr.closeView(view)
    //   },
    // )
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
      new Laya.Handler(
        this,
        (): void => {
          let tween = new Laya.Tween()
          tween.to(view, { scaleX: 1, scaleY: 1 }, 100, null)
        },
      ),
    )
  }
  public closeView(view: any): void {
    this.removeChild(this.masks.get(view.name))
    super.closeView(view)
  }
}
