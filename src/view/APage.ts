import { ui } from '../ui/layaMaxUI'
import { openView, View } from '../decorators/LayerViewMgr'
import BPage from './BPage'
import { ViewConst } from '../core/game/scenes/ViewConst'
import { BaseLayer } from '../core/game/scenes/BaseLayer'
import GameApp from '../core/game/GameApp'
@View(BaseLayer)
export default class APage extends ui.view.APageUI {
  static viewKey = ViewConst.APage
  /**
   *
   */
  constructor() {
    super()
    this.btn.on(Laya.Event.CLICK, this, () => {
      openView(BPage)
    })
  }
  public init() {
    this.controller.addListener(
      'change',
      args => {
        this.contents.text = args[0]
        // console.log(this)
      },
      this,
    )
  }
}
