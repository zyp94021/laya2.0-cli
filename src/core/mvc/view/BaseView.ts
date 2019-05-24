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
    public openCb(...args) {
      this.updateView(store.getState());
      this.unsubscribe = store.subscribe(()=>this.updateView.bind(this)(store.getState()))
    }
    public closeCb(...args) {
      this.unsubscribe()
    }
    public updateView(state?: any) {
      this.stateListener.forEach(element => {
        element.onStateChange(state);
      });
      console.log(" == elements", this.stateListener);
      this.onUpdateView(state);
    }
    public onUpdateView(state?: any) {
    }

    public stateListener: {onStateChange: Function}[] = [];
  }
}
