import { Singleton } from '../base/Singleton'

export default class ControllerManager extends Singleton {
  private controllers
  constructor() {
    super()
    this.controllers = {}
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
  isExists(controllerKey) {
    return !!this.controllers[controllerKey]
  }
  /**
   * 获取指定Controller对象
   * @param  controllerKey Controller唯一标识
   * @returns
   */
  getController(controllerKey) {
    let controller = this.controllers[controllerKey]
    if (controller) {
      return controller
    }
    return null
  }
}
