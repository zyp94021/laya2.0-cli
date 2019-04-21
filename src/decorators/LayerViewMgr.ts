const layerView = []
const views = {}
const layers = {}
let scene: Laya.Scene
export const View = Layer => {
  return View => {
    let layer = layerView.find(layer => layer.Layer === Layer)
    if (!layer) {
      layer = {
        Layer,
        views: [],
      }
      layerView.push(layer)
    }
    const view = layer.views.find(view => view.View === View || view.View.viewKey === View.viewKey)
    if (view) {
      throw new Error('view 已存在 || viewKey 重复')
    }
    layer.views.push({ layer, View })
  }
}

export const createViews = stage => {
  scene = stage
}
export const openView = View => {
  let _view = views[View.viewKey]
  if (_view) {
    _view.layer.openView(_view)
    return
  }
  const layer = layerView.find(layer => layer.views.find(view => view.View.viewKey === View.viewKey))
  if (!layer) {
    throw new Error('layer 不存在')
  }
  let _layer = layers[layer.Layer.layerKey]
  if (!_layer) {
    _layer = new layer.Layer(scene)
    _layer.zOrder = layer.Layer.layerKey
    layers[layer.Layer.layerKey] = _layer
  }
  const view = layer.views.find(view => view.View.viewKey === View.viewKey)
  _view = new view.View()
  _view.layer = _layer
  views[view.View.viewKey] = _view
  _view.layer.openView(_view)
}
export const closeView = viewKey => {}
