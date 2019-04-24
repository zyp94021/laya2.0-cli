export module mvc {
  class ControllerManager {
    private controllers = new Map()

    public register(view, Controller, Model) {
      const key = view.constructor.viewKey
      if (this.isExists(key)) return
      const controller = new Controller()
      controller.setView(view)
      if (Model) {
        controller.setModel(new Model())
      }
      this.controllers.set(key, controller)
      return controller
    }
    public unregister(controllerKey) {
      if (!this.isExists(controllerKey)) return
      this.controllers.delete(controllerKey)
    }
    isExists(controllerKey) {
      return this.controllers.has(controllerKey)
    }
    /**
     * 获取指定Controller对象
     * @param  controllerKey Controller唯一标识
     * @returns
     */
    getController(controllerKey) {
      return this.controllers.get(controllerKey)
    }
  }

  export const controllerMgr = new ControllerManager()
}
