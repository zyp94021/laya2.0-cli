import { ui } from '../../../ui/layaMaxUI'
import { IView } from '../../../core/mvc/interface/IView'
import { ViewConst } from '../../../core/const/ViewConst'
import { BaseLayer } from '../../../core/mvc/layer/BaseLayer'
import { RegisterMVC, closeView } from '../../../core/mvc/MvcMgr'
@RegisterMVC(BaseLayer)
export default class Loading extends ui.view.LoadingUI implements IView {
  static viewKey = ViewConst.Loading
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
    this.btn_close.on(Laya.Event.CLICK, this, () => {
      closeView(this)
    })
  }
  public openCb(...args) {
    console.log('Loading open', args)
  }
}
