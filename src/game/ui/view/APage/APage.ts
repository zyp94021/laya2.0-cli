import { ui } from '../../../../ui/layaMaxUI'
import BPage from '../BPage/BPage'
import { ViewConst } from '../../../../core/const/ViewConst'
import { BaseLayer } from '../../../../core/mvc/layer/BaseLayer'
import { RegisterMVC, openView } from '../../../../core/mvc/MvcMgr'
import APageController from './APageController'
import APageModel from './ApageModel'
import BaseTest from '../BaseTest'
import '../../../store/store'
import store from '../../../store/store'
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
    // this.controller.addListener(
    //   'change',
    //   args => {
    //     this.contents.text = args[0]
    //     // console.log(this)
    //   },
    //   this,
    // )
  }

  public updateView() {
    const { user, token, testData } = store.getState()
    this.contents.text = testData.data1
    this.username.text = user.name
    this.token.text = token
  }
}
