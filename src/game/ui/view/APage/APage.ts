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
  public openCb(args) {
    var html = "<span style='fontSize:30' color='#67fc2c'>富文本</span>"
    html += "<img style='height:50;width:50' src='Characters/Tank_4.png'></img>"
    html += "<span style='fontSize:20' color='#fff'>测试</span>"
this.dd.pos(0,0)
    this.dd.style.width=640
    this.dd.style.align='center'

    this.dd.innerHTML = html
    console.log(this.dd)
  }
}
