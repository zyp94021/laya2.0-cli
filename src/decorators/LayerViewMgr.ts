const layerView = []
const views = {}
const layers = {}
let scene: Laya.View
export const View = Layer => {
  return View => {
    console.log(View)
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
      throw new Error(`View ${view.View} 已存在 || viewKey ${View.viewKey} 重复`)
    }
    layer.views.push({ layer, View })
  }
}

export const createViews = stage => {
  scene = stage
}
export const openView = (View, ...args) => {
  let _view = views[View.viewKey]
  if (_view) {
    _view.layer.openView(_view, ...args)
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
    scene.addChild(_layer)
    layers[layer.Layer.layerKey] = _layer
  }
  const view = layer.views.find(view => view.View.viewKey === View.viewKey)
  _view = new view.View()
  _view.width = _layer.width
  _view.height = _layer.height
  _view.layer = _layer
  _view.layer.openView(_view, ...args)
  views[view.View.viewKey] = _view
}
export const closeView = (ViewOrKeyOrIns, ...args) => {
  let _view
  if (ViewOrKeyOrIns.viewKey) {
    _view = views[ViewOrKeyOrIns.viewKey]
  } else if (
    Object.keys(views)
      .map(key => Number(key))
      .indexOf(ViewOrKeyOrIns) > -1
  ) {
    _view = views[ViewOrKeyOrIns]
  } else if (ViewOrKeyOrIns.constructor.viewKey) {
    _view = views[ViewOrKeyOrIns.constructor.viewKey]
  }
  if (_view) {
    _view.layer.closeView(_view, ...args)
    return
  }
}
