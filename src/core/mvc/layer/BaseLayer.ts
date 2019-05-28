import { IView } from '../interface/IView'
import { LayerConst } from '../../const/LayerConst'
import { ILayer } from '../interface/ILayer'
export class BaseLayer extends Laya.Sprite implements ILayer {
  protected ownScene: Laya.Scene
  constructor(scene: Laya.Scene) {
    super()
    this.ownScene = scene
    this.width = this.ownScene.width
    this.height = this.ownScene.height
    this.hitTestPrior = true
    this.mouseThrough = true
    this.mouseEnabled = true
  }

  static layerKey = LayerConst.base
  public openView(view: IView, ...args): void {
    if (view.onOpen) {
      view.onOpen.apply(view, args)
    }
    this.mouseThrough = false
    this.addChild(view)
  }
  public closeView(view: IView): void {
    if (view.onClose) {
      view.onClose()
    }
    this.removeChild(view)
    this.mouseThrough = this._children.length === 0
  }
}
