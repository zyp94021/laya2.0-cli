export module mvc {
  class ControllerManager {
    private controllers = new Map()

    public register(view) {
      const key = view.viewKey
      if (this.isExists(key)) return
      if (view.Controller) {
        const controller = new view.Controller()
        controller.setView(view._view)
        if (view.Model) {
          controller.setModel(new view.Model())
        }
        this.controllers.set(key, controller)
        view.view.setController(controller)
      }
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
