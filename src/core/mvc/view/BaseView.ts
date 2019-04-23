import BaseController from '../controller/BaseController'

export namespace KUI {
  export class BaseView extends Laya.View {
    public controller: BaseController
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
  }
}
