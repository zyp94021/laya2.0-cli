import { ui } from '../ui/layaMaxUI'
import { IView } from '../core/game/scenes/interface/IView'
import { View, openView } from '../decorators/LayerViewMgr'
import { ViewConst } from '../core/game/scenes/ViewConst'
import { BaseLayer } from '../core/game/scenes/BaseLayer'
import DialogTest from './DialogTest'
import ViewTest from './ViewTest'
@View(BaseLayer)
export default class BaseTest extends ui.view.BaseTestUI implements IView {
  static viewKey = ViewConst.BaseTest
  public moveY = false
  constructor() {
    super()
    this.timerLoop(500, this, () => {
      this.tank.index = this.tank.index === 7 ? 4 : this.tank.index + 1
    })
    this.timerLoop(250, this, () => {
      if (this.moveY) {
        this.tank.centerY += 1
      } else {
        this.tank.centerY -= 1
      }
      this.moveY = !this.moveY
    })

    this.dialogBtn.on(Laya.Event.CLICK, this, () => {
      openView(DialogTest)
    })
    this.viewBtn.on(Laya.Event.CLICK, this, () => {
      openView(ViewTest)
    })
  }
  public openCb() {
    console.log('BaseTest open')
  }
}
