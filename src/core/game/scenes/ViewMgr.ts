import { IView } from './interface/IView'
import { Singleton } from '../../base/Singleton'
import { ViewConst } from '../../const/ViewConst'

export class ViewMgr extends Singleton {
  public constructor() {
    super()
  }
  private views: Map<string, IView> = new Map<string, IView>()
  private openViews: Map<string, IView> = new Map<string, IView>()
  public getView(key): IView {
    if (this.views.get(key)) {
      return this.views.get(key)
    }
  }
  public setView(key, view: IView): void {
    this.views.set(key, view)
  }
  public openView(key, ...args): void {
    let view = this.openViews.get(key)
    if (view) {
      view.open.apply(view, args)
      return
    }
    view = this.views.get(key)
    if (view) {
      view.layer.openView.apply(view.layer, [view, ...args])
      this.openViews.set(key, view)
    } else {
      console.error('view不存在')
    }
  }
  public closeView(vieworkey: any): void {
    let view: IView
    if (vieworkey in ViewConst) {
      view = this.openViews.get(vieworkey)
    } else {
      view = vieworkey
    }
    if (view) {
      view.layer.closeView.apply(view.layer, [view])
      this.openViews.delete(view.name)
      return
    }
  }
  public isOpen(vieworkey): boolean {
    if (vieworkey in ViewConst) {
      return this.openViews.has(vieworkey)
    } else {
      return this.openViews.has(vieworkey.name)
    }
  }
}
