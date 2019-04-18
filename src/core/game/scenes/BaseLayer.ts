import { IView } from './interface/IView'

export class BaseLayer extends Laya.View {
  public init() {
    this.width = Laya.stage.width
    this.height = Laya.stage.height
    this.hitTestPrior = true
    this.mouseThrough = true
    this.mouseEnabled = true
    Laya.stage.addChild(this)
  }
  public openView(view: IView, ...args) {
    if (view.open) {
      view.open.apply(view, args)
    }
    view.width = this.width
    view.height = this.height
    this.mouseThrough = false
    this.addChild(view)
  }
  public closeView(view: IView) {
    if (view.close) {
      view.close()
    }
    this.removeChild(view)
    this.mouseThrough = this._children.length === 0
  }
}
