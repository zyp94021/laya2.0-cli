import { BaseLayer } from './BaseLayer'

import { IView } from './interface/IView'

import { LayerConst } from '../../const/LayerConst'

const dis = 100
const time = 240
export class ViewLayer extends BaseLayer {
  constructor(scene: Laya.Scene) {
    super(scene)
  }
  static layerKey = LayerConst.view
  private openViews: IView[] = []
 
  public openView(view: any, ...args) {
    let lastView: Laya.Sprite
    const tween1 = new Laya.Tween()
    if (this.openViews.length) {
      lastView = this.openViews[this.openViews.length - 1]
    } else {
      lastView = this.ownScene
    }
    lastView.x = this.ownScene === lastView ? 0 : dis
    tween1.to(
      lastView,
      { x: this.ownScene === lastView ? -dis : 0 },
      time,
      null,
      new Laya.Handler(lastView, () => {
        if (lastView !== this.ownScene) lastView.removeSelf()
      }),
    )
    this.openViews.push(view)
    super.openView.apply(this, [view, ...args])
    const tween2 = new Laya.Tween()
    view.x = this.width
    tween2.to(
      view,
      { x: dis },
      time,
      null,
      new Laya.Handler(view, () => {
        if (view.afterOpen) {
          view.afterOpen.call(view)
        }
      }),
    )
  }

  public closeView(view: any) {
    let lastView
    const tween1 = new Laya.Tween()
    this.openViews.pop()
    if (this.openViews.length > 0) {
      lastView = this.openViews[this.openViews.length - 1]
      lastView.zOrder = view.zOrder - 1
      lastView.layer.addChild(lastView)
    } else {
      lastView = this.ownScene
    }

    lastView.x = lastView === this.ownScene ? -dis : 0

    tween1.to(lastView, { x: lastView === this.ownScene ? 0 : dis }, time)
    const tween2 = new Laya.Tween()
    view.x = dis
    tween2.to(
      view,
      { x: this.width },
      time,
      null,
      new Laya.Handler(this, () => {
        super.closeView(view)
      }),
    )
  }
}
