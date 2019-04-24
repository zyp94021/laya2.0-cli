import * as v from './ViewMgr'
import * as c from './ControllerManager'
const MVC = []
let UI = Laya.stage
const RegisterMVC = (Layer, Controller = null, Model = null) => {
  return View => {
    let layer = MVC.find(layer => layer.Layer === Layer)
    if (!layer) {
      layer = {
        Layer,
        views: [],
      }
      MVC.push(layer)
    }
    const view = layer.views.find(view => view.View === View || view.View.viewKey === View.viewKey)
    if (view) {
      throw new Error(`View ${view.View} 已存在 || viewKey ${View.viewKey} 重复`)
    }
    layer.views.push({ layer, View, Model, Controller })
  }
}
const setUIRoot = root => {
  UI = root
}
const controllerMgr = c.mvc.controllerMgr
const viewMgr = v.mvc.viewMgr
const openView = v.mvc.openView
const closeView = v.mvc.closeView
export { viewMgr, controllerMgr, openView, closeView, RegisterMVC, setUIRoot, MVC, UI }
