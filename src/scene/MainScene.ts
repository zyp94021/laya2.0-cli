import { ui } from '../ui/layaMaxUI'
import GameApp from '../core/game/GameApp'
import { ControllerConst } from '../game/const/ControllerConst'
import APageController from '../game/ui/view/APage/APageController'
import APageModel from '../game/ui/view/APage/ApageModel'
import { registerView, openView } from '../decorators/LayerViewMgr'
import APage from '../view/APage'
import BPageController from '../game/ui/view/BPage/BPageController';
import BPageModel from '../game/ui/view/BPage/BPageModel';
import BPage from '../view/BPage';
export default class MainScene extends ui.scene.MainSceneUI {
  public constructor() {
    super()
    this.init()
  }
  private async init() {
    await GameApp.init(this)
    GameApp.controllerMgr.register(ControllerConst.APage, new APageController())
    GameApp.controllerMgr.register(ControllerConst.BPage, new BPageController())

    openView(APage)

  }
}
