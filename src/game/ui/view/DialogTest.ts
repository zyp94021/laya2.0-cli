import { ui } from '../../../ui/layaMaxUI'
import { IView } from '../../../core/mvc/interface/IView'
import { ViewConst } from '../../../core/const/ViewConst'
import { DialogLayer } from '../../../core/mvc/layer/DialogLayer'
import { RegisterMVC, closeView } from '../../../core/mvc/MvcMgr'
import { store } from '../../store/store'
@RegisterMVC(DialogLayer)
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
    })
    this.closeBtn.on(Laya.Event.CLICK, this, () => {
      closeView(ViewConst.DialogTest)
      // console.log(this)
      // Laya.Scene.close('view/DialogTest.scene')
    })
  }
  public onOpen(...args) {
    super.onOpen()
    console.log('DialogTest open', args)
    // console.log(this.img['onCompResize']())
  }
  public updateView() {
    const { user, token, testData } = store.getState()
    this.username.text = user.name
    this.token.text = token
  }
}
