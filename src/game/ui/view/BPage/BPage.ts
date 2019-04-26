import { ui } from '../../../../ui/layaMaxUI'
import { ViewConst } from '../../../../core/const/ViewConst'
import { DialogLayer } from '../../../../core/mvc/layer/DialogLayer'
import BPageController from './BPageController'
import BPageModel from './BPageModel'
import { RegisterMVC, closeView } from '../../../../core/mvc/MvcMgr'
@RegisterMVC(DialogLayer, BPageController, BPageModel)
export default class BPage extends ui.view.BPageUI {
  static viewKey = ViewConst.BPage
 
  constructor() {
    super()
  }
  public init() {
    this.close_btn.on(Laya.Event.CLICK, this, () => {
      closeView(this)
    })
    this.change.on(Laya.Event.CLICK, this, () => {
      this.controller.dispatch('change', ['#ee3321'])
    })
  }
}
