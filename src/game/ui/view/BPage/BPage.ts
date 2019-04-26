import { ui } from '../../../../ui/layaMaxUI'
import { ViewConst } from '../../../../core/const/ViewConst'
import { DialogLayer } from '../../../../core/mvc/layer/DialogLayer'
import BPageController from './BPageController'
import BPageModel from './BPageModel'
import { RegisterMVC, closeView } from '../../../../core/mvc/MvcMgr'
import store from '../../../store/store'
import { changeData1 } from '../../../store/actions'
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
      // this.controller.dispatch('change', ['#ee3321'])
      store.dispatch(changeData1('hello world'))
    })
  }
  public updateView() {
    const { user, token, testData } = store.getState()
    this.username.text = user.name
    this.token.text = token
  }
}
