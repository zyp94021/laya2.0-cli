export module mvc {
  class ControllerManager {
    private controllers = new Map()

    public register(mvc) {
      const key = mvc.viewKey
      if (this.isExists(key)) return
      if (mvc.Controller) {
        const controller = new mvc.Controller()
        controller.setView(mvc.view)
        if (mvc.Model) {
          controller.setModel(new mvc.Model())
        }
        this.controllers.set(key, controller)
        mvc.view.setController(controller)
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
