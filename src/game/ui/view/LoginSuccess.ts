import { ui } from '../../../ui/layaMaxUI'
import { RegisterMVC } from '../../../core/mvc/MvcMgr'
import { BaseLayer } from '../../../core/mvc/layer/BaseLayer'
import { ViewConst } from '../../../core/const/ViewConst'
import GameApp from '../../../core/game/GameApp'
import { store } from '../../store/store'
@RegisterMVC(BaseLayer)
export class LoginSuccess extends ui.view.LoginSuccessUI {
  static viewKey = ViewConst.LoginSuccess
  constructor() {
    super()
  }
  onOpen() {
    super.onOpen()
    console.log(`openSuccess:`, store.getState())
    GameApp.socket.connect()
    GameApp.socket.addEvent('message', this, this.showMessage)
    GameApp.socket.sendEvent('message', { message: 'test' })
  }
  showMessage(message) {
    console.log(message)
  }
}
