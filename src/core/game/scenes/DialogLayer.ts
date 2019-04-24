import { BaseLayer } from './BaseLayer'
import { ILayer } from './interface/ILayer'
import { LayerConst } from '../../const/LayerConst'
import { closeView } from '../../mvc/MvcMgr'
class Mask extends Laya.Image {
  public constructor() {
    super()
    this.skin = 'comp/blank.png'
    this.alpha = 0.8
  }
}
export class DialogLayer extends BaseLayer implements ILayer {
  // private mMask
  constructor(scene: Laya.Scene) {
    super(scene)
  }
  static layerKey = LayerConst.dialog

  private masks: Map<string, Laya.Image> = new Map()

  public openView(view: any, ...args: any[]): void {
    let mask = this.masks.get(view.constructor.viewKey)
    if (!mask) {
      mask = new Mask()
      mask.on(Laya.Event.CLICK, this, () => {
        closeView(view)
      })
    }
    mask.width = this.width
    mask.height = this.height

    this.masks.set(view.constructor.viewKey, mask)
    this.addChild(mask)
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
  public closeView(view: any): void {
    this.removeChild(this.masks.get(view.constructor.viewKey))
    super.closeView(view)
  }
}
