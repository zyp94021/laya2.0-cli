import { BaseLayer } from './BaseLayer'

import { IView } from './interface/IView'

import GameApp from '../GameApp'
import { ViewConst } from './ViewConst';

const dis = 100
const time = 240
export class ViewLayer extends BaseLayer {
  public init() {
    super.init()
  }

  private openViews: IView[] = []

  public openView(view: any, ...args) {
    let lastView
    let tween1 = new Laya.Tween()
    if (this.openViews.length > 0) {
      lastView = this.openViews[this.openViews.length - 1]
    } else {
      lastView = GameApp.viewMgr.getView(ViewConst.MAIN)
    }
    lastView.x = 0
    tween1.to(lastView, { x: -dis }, time, null, null)
    this.openViews.push(view)
    super.openView.apply(this, [view, ...args])
    let tween2 = new Laya.Tween()
    view.x = Laya.stage.width
    tween2.to(view, { x: 0 }, time, null, null)
  }

  public closeView(view: any) {
    this.openViews.pop()
    let lastView
    let tween1 = new Laya.Tween()
    if (this.openViews.length > 0) {
      lastView = this.openViews.pop()
    } else {
      lastView = GameApp.viewMgr.getView(ViewConst.MAIN)
    }
    lastView.x = -dis
    tween1.to(lastView, { x: 0 }, time, null, null)
    let tween2 = new Laya.Tween()
    view.x = 0
    tween2.to(
      view,
      { x: Laya.stage.width },
      time,
      null,
      new Laya.Handler(this, () => {
        super.closeView(view)
      }),
    )
  }
}
