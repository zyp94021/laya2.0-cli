import * as v from './ViewMgr'
import * as c from './ControllerManager'
const MVC = new Map()
let UI = Laya.stage
const RegisterMVC = (Layer, Controller = null, Model = null) => {
  return View => {
    console.log(View.viewKey)
    let layer = MVC.get(Layer.layerKey)
    if (!layer) {
      layer = {
        layerKey: Layer.layerKey,
        Layer,
        views: new Map(),
      }
      MVC.set(layer.layerKey, layer)
    }
    const view = layer.views.get(View.viewKey)
    if (view) {
      throw new Error(`viewKey ${View.viewKey} 重复`)
    }
    layer.views.set(View.viewKey, { layer, viewKey: View.viewKey, View, Model, Controller })
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
