import { ui } from '../ui/layaMaxUI'
import APage from '../game/ui/view/APage/APage'
import { setUIRoot, openView, closeView, viewMgr } from '../core/mvc/MvcMgr'
import { MapView } from '../game/ui/view/MapView'
import { LoginView } from '../game/ui/view/LoginView'
import { store } from '../game/store/store'
import { ActionTypes } from '../game/store/actions'
import { LoginSuccess } from '../game/ui/view/LoginSuccess'
export default class MainScene extends ui.scene.MainSceneUI {
  public constructor() {
    super()
    // GameApp.init(this)
    const UI = new Laya.Sprite()
    UI.name = 'UI'
    UI.width = Laya.stage.width
    UI.height = Laya.stage.height
    Laya.stage.addChild(UI)
    setUIRoot(UI)

    // openView(APage,{a:1,b:2})
    // openView(LoginView)
    store.subscribe(() => this.checkView.bind(this)(store.getState()))
    store.dispatch({ type: ActionTypes.loginFail })
  }
  checkView(state) {
    console.log(state)
    const { login } = state
    console.log(`login:${login}`)
    if (login) {
      closeView(LoginView)
      if (!viewMgr.isOpen(LoginSuccess)) {
        openView(LoginSuccess)
      }
    } else {
      if (!viewMgr.isOpen(LoginView)) {
        openView(LoginView)
      }
    }
  }
  onOpened() {}
}
