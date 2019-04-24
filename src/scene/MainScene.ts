import { ui } from '../ui/layaMaxUI'
import APage from '../game/ui/view/APage/APage'
import { setUIRoot, openView } from '../core/mvc/MvcMgr'
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

    openView(APage)
  }
  onOpened() {}
}
