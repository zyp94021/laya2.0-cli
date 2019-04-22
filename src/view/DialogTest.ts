import { ui } from '../ui/layaMaxUI'
import { IView } from '../core/game/scenes/interface/IView'
import { View, closeView } from '../decorators/LayerViewMgr'
import { ViewConst } from '../core/game/scenes/ViewConst'
import { DialogLayer } from '../core/game/scenes/DialogLayer'
@View(DialogLayer)
export default class DialogTest extends ui.view.DialogTestUI implements IView {
  static viewKey = ViewConst.DialogTest
  public moveY = false
  constructor() {
    super()
    this.active
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
      this.box.width = 400
      this.box.height = 400
      this.box.centerX = 0
      this.box.centerY = 0
    })
    this.closeBtn.on(Laya.Event.CLICK, this, () => {
      closeView(ViewConst.DialogTest)
    })
  }
  public openCb(...args) {
    console.log('DialogTest open', args)
  }
}
