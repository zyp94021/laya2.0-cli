import { ui } from '../ui/layaMaxUI'
import GameApp from '../core/game/GameApp'
import { openView, createViews } from '../decorators/LayerViewMgr'
import { ControllerConst } from '../game/const/ControllerConst'
import APageController from '../game/ui/view/APage/APageController'
import APage from '../view/APage'
import BPageController from '../game/ui/view/BPage/BPageController'
export default class MainScene extends ui.scene.MainSceneUI {
  public constructor() {
    super()
    // GameApp.init(this)
    const UI = new Laya.Sprite()
    UI.name = 'UI'
    UI.width = Laya.stage.width
    UI.height = Laya.stage.height
    Laya.stage.addChild(UI)
    createViews(UI)

    GameApp.controllerMgr.register(ControllerConst.APage, new APageController())
    GameApp.controllerMgr.register(ControllerConst.BPage, new BPageController())

    openView(APage)
  }
  onOpened() {}
}
