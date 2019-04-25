import * as v from './ViewMgr'
import * as c from './ControllerManager'
/**
 * MVC
 * [
 *  {
 *    viewKey,
 *    View,
 *    view,View实例
 *    Layer,
 *    layer,Layer实例
 *    event,
 *    Controller,
 *    Model
 *  }
 * ]
 */
const MVC = []
export const findByViewKey = viewKey => MVC.find(item => item.viewKey === viewKey)
export const updateMVCItem = ({ viewKey, ...prop }) => {
  const index = MVC.findIndex(item => item.viewKey === viewKey)
  let mvc
  if (index > -1) {
    const item = MVC[index]
    mvc = { ...item, ...prop }
    MVC.splice(index, 1, mvc)
  } else {
    mvc = { viewKey, ...prop }
    MVC.push(mvc)
  }
  return mvc
}
let UI = Laya.stage
const RegisterMVC = (Layer, Controller = null, Model = null) => {
  return View => {
    updateMVCItem({
      viewKey: View.viewKey,
      Layer,
      Controller,
      Model,
      View,
    })
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
