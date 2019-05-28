import { ui } from '../../../ui/layaMaxUI'
import { RegisterMVC, openView } from '../../../core/mvc/MvcMgr'
import { BaseLayer } from '../../../core/mvc/layer/BaseLayer'
import { store } from '../../store/store'
import { actionRequest, ActionTypes } from '../../store/actions'
import { ViewConst } from '../../../core/const/ViewConst'
@RegisterMVC(BaseLayer)
export class LoginView extends ui.view.LoginUI {
  static viewKey = ViewConst.Login
  constructor() {
    super()
    this.bindEvent()
  }
  bindEvent() {
    this.loginBtn.on(Laya.Event.CLICK, this, () => {
      console.log(this.usernameInput.text)
      console.log(this.passwordInput.text)
      store.dispatch(
        actionRequest(ActionTypes.loginRequest, {
          username: this.usernameInput.text,
          password: this.passwordInput.text,
        }),
      )
    })
    this.registerBtn.on(Laya.Event.CLICK, this, () => {
      store.dispatch(
        actionRequest(ActionTypes.registerRequest, {
          username: this.usernameInput.text,
          password: this.passwordInput.text,
        }),
      )
    })
  }
}
