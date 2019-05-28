import * as v from './ViewMgr'
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
const RegisterMVC = Layer => {
  return View => {
    updateMVCItem({
      viewKey: View.viewKey,
      Layer,
      View,
    })
    return View
  }
}
const setUIRoot = root => {
  UI = root
}
const viewMgr = v.mvc.viewMgr
const openView = v.mvc.openView
const closeView = v.mvc.closeView
export { viewMgr, openView, closeView, RegisterMVC, setUIRoot, MVC, UI }
