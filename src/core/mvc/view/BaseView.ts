import { store } from '../../../game/store/store'

export namespace KUI {
  export class BaseView extends Laya.View {
    public unsubscribe
    constructor() {
      super()
    }

    public init() {
      this.initData()
      this.initRes()
      this.initView()
    }
    public initData() {}
    public initRes() {}
    public initView() {}
    public onOpen(...args) {
      this.updateView(store.getState())
      this.unsubscribe = store.subscribe(() => this.updateView.bind(this)(store.getState()))
    }
    public onClose(...args) {
      this.unsubscribe()
    }
    public updateView(state?: any) {
      this.stateListener.forEach(element => {
        element.onStateChange(state)
      })
      this.onUpdateView(state)
    }
    public onUpdateView(state?: any) {}

    public stateListener: { onStateChange: Function }[] = []
  }
}
