import { IView } from '../game/scenes/interface/IView'

import { ILayer } from '../game/scenes/interface/ILayer'

import { MVC, UI, controllerMgr } from './MvcMgr'

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
    public getLayer(key): ILayer {
      return this.layers.get(key)
    }
    public setLayer(key, layer: ILayer): void {
      this.layers.set(key, layer)
    }

    public openView(View, ...args): void {
      let _view = this.openViews.get(View.viewKey)
      if (_view) {
        _view.open.apply(_view, args)
        return
      }
      _view = this.getView(View.viewKey)
      if (_view) {
        _view.layer.openView(_view, ...args)
        this.openViews.set(View.viewKey, _view)
        return
      }
      _view = this.createView(View)
      _view.layer.openView(_view, ...args)
    }
    private createView(View) {
      const layer = MVC.find(layer => layer.views.find(view => view.View.viewKey === View.viewKey))
      if (!layer) {
        throw new Error('layer 不存在')
      }
      let _layer = this.getLayer(layer.Layer.layerKey)
      if (!_layer) {
        _layer = new layer.Layer(UI)
        _layer.zOrder = layer.Layer.layerKey
        UI.addChild(_layer)
        this.setLayer(layer.Layer.layerKey, _layer)
      }
      const view = layer.views.find(view => view.View.viewKey === View.viewKey)
      let _view = new view.View()
      _view.layer = _layer
      if (view.Controller) {
        const _controller: any = controllerMgr.register(_view, view.Controller, view.Model)
        _view.setController(_controller)
      }
      this.setView(view.View.viewKey, _view)
      if (_view.init) _view.init()
      return _view
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
