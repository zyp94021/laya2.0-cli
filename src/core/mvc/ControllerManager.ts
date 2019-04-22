import { Singleton } from '../base/Singleton'

export default class ControllerManager extends Singleton {
  private controllers
  constructor() {
    super()
  }

  public register(key, controller) {
    if (this.isExists[key]) return
    this.controllers[key] = controller
  }
  public unregister(controllerKey) {
    if (!this.isExists(controllerKey)) return
    this.controllers[controllerKey] = null
    delete this.controllers[controllerKey]
  }
  public dispatchController(controllerKey, ...args) {
    const controller = this.controllers[controllerKey]
    if (controller) {
        return controller.dispatch.apply(controller,args)
    } else {
        console.log(`消息：${controllerKey}不存在监听`)
        return null
    }
}
  isExists(controllerKey) {
    return !!this.controllers[controllerKey]
  }
}
