import BaseController from '../controller/BaseController'
import store from '../../../game/store/store'

export namespace KUI {
  export class BaseView extends Laya.View {
    public controller: BaseController
    public unsubscribe
    constructor() {
      super()
    }
    public setController(ctrl) {
      this.controller = ctrl
    }
    public init() {
      this.initData()
      this.initRes()
      this.initView()
    }
    public initData() {}
    public initRes() {}
    public initView() {}
    public openCb() {
      this.updateView()
      this.unsubscribe = store.subscribe(this.updateView.bind(this))
    }
    public closeCb() {
      this.unsubscribe()
    }
    public updateView() {}
  }
}
