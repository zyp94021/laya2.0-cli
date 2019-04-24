import { ui } from '../../../ui/layaMaxUI'
import { IView } from '../../../core/game/scenes/interface/IView'
import { ViewConst } from '../../../core/const/ViewConst'
import { ViewLayer } from '../../../core/game/scenes/ViewLayer'
import ViewTest1 from './ViewTest1'
import { RegisterMVC, closeView, openView } from '../../../core/mvc/MvcMgr'
@RegisterMVC(ViewLayer)
export default class ViewTest extends ui.view.ViewTestUI implements IView {
  static viewKey = ViewConst.ViewTest
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
    this.closeBtn.on(Laya.Event.CLICK, this, () => {
      closeView(this)
    })
    this.viewBtn.on(Laya.Event.CLICK, this, () => {
      openView(ViewTest1)
    })
  }
  public openCb() {
    console.log('ViewTest open')
  }
}
