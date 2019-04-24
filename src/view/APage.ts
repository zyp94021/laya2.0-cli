import { ui } from '../ui/layaMaxUI'
import { openView, View, readonly } from '../decorators/LayerViewMgr'
import BPage from './BPage'
import { ViewConst } from '../core/game/scenes/ViewConst'
import { BaseLayer } from '../core/game/scenes/BaseLayer'
import GameApp from '../core/game/GameApp'
import { DialogLayer } from '../core/game/scenes/DialogLayer'
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
  @readonly
  public bark() {
    var s = 1
  }
}
