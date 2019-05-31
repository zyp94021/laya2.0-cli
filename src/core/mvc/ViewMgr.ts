import { IView } from './interface/IView'

import { ILayer } from './interface/ILayer'

import { UI, findByViewKey } from './MvcMgr'
import { bindEvent } from './UIEvent'

export module mvc {
  class ViewMgr {
    private views: Map<string, IView> = new Map<string, IView>()
    private layers: Map<string, ILayer> = new Map<string, ILayer>()
    private openViews: Map<string, IView> = new Map<string, IView>()

    public getView(key): IView {
      return this.views.get(key)
    }
    public setView(key, view: IView): void {
      this.views.set(key, view)
    }
    public getLayer(Layer): ILayer {
      let layer = this.layers.get(Layer.layerKey)
      if (layer) return layer
      layer = this.createLayer(Layer)
      this.setLayer(Layer.layerKey, layer)
      return layer
    }
    public setLayer(key, layer: ILayer): void {
      this.layers.set(key, layer)
    }

    public openView(View, ...args): void {
      let _view = this.openViews.get(View.viewKey)
      if (_view) {
        _view.onOpen.apply(_view, args)
        return
      }
      _view = this.getView(View.viewKey)
      if (_view) {
        _view.layer.openView(_view, ...args)
        this.openViews.set(View.viewKey, _view)
        return
      }
      _view = this.createView(View)
      this.openViews.set(View.viewKey, _view)
      _view.layer.openView(_view, ...args)
    }
    private createView(View) {
      const mvc = findByViewKey(View.viewKey)
      const layer = this.getLayer(mvc.Layer)

      let _view = new mvc.View()
      _view.layer = layer
      mvc.view = _view
      mvc.layer = layer
      bindEvent(mvc)

      this.setView(mvc.viewKey, _view)
      if (_view.init) _view.init()
      return _view
    }
    private createLayer(Layer) {
      const _layer = new Layer(UI)
      _layer.zOrder = Layer.layerKey
      UI.addChild(_layer)
      return _layer
    }
    public closeView(ViewOrKeyOrIns: any, ...args): void {
      let _view
      if (ViewOrKeyOrIns.viewKey) {
        _view = this.getView(ViewOrKeyOrIns.viewKey)
      } else if (this.getView(ViewOrKeyOrIns)) {
        _view = this.getView(ViewOrKeyOrIns)
      } else if (ViewOrKeyOrIns.constructor.viewKey) {
        _view = this.getView(ViewOrKeyOrIns.constructor.viewKey)
      }
      if (_view) {
        _view.layer.closeView(_view, ...args)
        this.openViews.delete(_view.constructor.viewKey)
        return
      }
    }
    public isOpen(ViewOrKeyOrIns): boolean {
      let _view
      if (ViewOrKeyOrIns.viewKey) {
        _view = this.openViews.get(ViewOrKeyOrIns.viewKey)
      } else if (this.openViews.get(ViewOrKeyOrIns)) {
        _view = this.openViews.get(ViewOrKeyOrIns)
      } else if (ViewOrKeyOrIns.constructor.viewKey) {
        _view = this.openViews.get(ViewOrKeyOrIns.constructor.viewKey)
      }
      return !!_view
    }
  }
  export const viewMgr = new ViewMgr()
  export const openView = (View, ...args) => {
    viewMgr.openView(View, ...args)
  }

  export const closeView = (ViewOrKeyOrIns, ...args) => {
    viewMgr.closeView(ViewOrKeyOrIns, ...args)
  }
}
