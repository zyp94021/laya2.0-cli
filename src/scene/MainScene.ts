import { ui } from '../ui/layaMaxUI'
import GameApp from '../core/game/GameApp'
import { openView, createViews } from '../decorators/LayerViewMgr'
import BaseTest from '../view/BaseTest'
import DialogTest from '../view/DialogTest'
import ViewTest from '../view/ViewTest'
import ViewTest1 from '../view/ViewTest1'
export default class MainScene extends ui.scene.MainSceneUI {
  public constructor() {
    super()
    // GameApp.init(this)
    const UI = new Laya.View()
    UI.name = 'UI'
    UI.width = Laya.stage.width
    UI.height = Laya.stage.height
    Laya.stage.addChild(UI)
    createViews(UI)
  }
  onOpened() {
    openView(BaseTest)
    // setTimeout(() => {
    // openView(DialogTest)
    openView(ViewTest)
    openView(ViewTest1)
    // }, 2000)
  }
}
