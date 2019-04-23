import { IView } from './interface/IView'
import { LayerConst } from './LayerConst'
import { ILayer } from './interface/ILayer'
export class BaseLayer extends Laya.View implements ILayer {
  protected ownScene: Laya.Scene
  constructor(scene: Laya.Scene) {
    super()
    this.width = scene.width
    this.height = scene.height
    this.hitTestPrior = true
    this.mouseThrough = true
    this.mouseEnabled = true
    this.ownScene = scene
    this.ownScene.addChild(this)
  }
  
  static layerKey = LayerConst.base
  public openView(view: IView, ...args): void {
    if (view.openCb) {
      view.openCb.apply(view, args)
    }
    view.width = this.width
    view.height = this.height
    this.mouseThrough = false
    this.addChild(view)
  }
  public closeView(view: IView): void {
    if (view.closeCb) {
      view.closeCb()
    }
    this.removeChild(view)
    this.mouseThrough = this._children.length === 0
  }
}
