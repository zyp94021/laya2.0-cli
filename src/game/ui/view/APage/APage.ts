import { ui } from '../../../../ui/layaMaxUI'
import BPage from '../BPage/BPage'
import { ViewConst } from '../../../../core/const/ViewConst'
import { BaseLayer } from '../../../../core/game/scenes/BaseLayer'
import { RegisterMVC, openView } from '../../../../core/mvc/MvcMgr'
import APageController from './APageController'
import APageModel from './ApageModel'
import BaseTest from '../BaseTest'
@RegisterMVC(BaseLayer, APageController, APageModel)
export default class APage extends ui.view.APageUI {
  static viewKey = ViewConst.APage
  constructor() {
    super()
    this.btn.on(Laya.Event.CLICK, this, () => {
      openView(BPage)
    })
    this.baseBtn.on(Laya.Event.CLICK, this, () => {
      openView(BaseTest)
    })
  }
  public init() {
    this.controller.addListener(
      'change',
      args => {
        this.contents.text = args[0]
        // console.log(this)
      },
      this,
    )
  }
  public openCb(args)
  {
    console.log(args)
  }
}
