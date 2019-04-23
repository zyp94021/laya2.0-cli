import { ui } from '../ui/layaMaxUI'
import GameApp from '../core/game/GameApp'
import { openView, createViews, registerView } from '../decorators/LayerViewMgr'
import BaseTest from '../view/BaseTest'
import { ControllerConst } from '../game/const/ControllerConst'
import APageController from '../game/ui/view/APage/APageController'
import APageModel from '../game/ui/view/APage/ApageModel'
import APage from '../view/APage'
import BPageController from '../game/ui/view/BPage/BPageController'
import BPageModel from '../game/ui/view/BPage/BPageModel'
import BPage from '../view/BPage'
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

    openView(BaseTest)
    GameApp.controllerMgr.register(ControllerConst.APage, new APageController())
    GameApp.controllerMgr.register(ControllerConst.BPage, new BPageController())

    openView(APage)
  }
  onOpened() {}
}
