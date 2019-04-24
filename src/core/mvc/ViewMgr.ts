import { IView } from './interface/IView'

import { ILayer } from './interface/ILayer'

import { MVC, UI, controllerMgr } from './MvcMgr'
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
      let layer
      MVC.forEach(value => {
        const _view = value.views.get(View.viewKey)
        if (_view) {
          layer = _view.layer
        }
      })
      if (!layer) {
        throw new Error('layer 不存在')
      }
      let _layer = this.getLayer(layer.layerKey)
      if (!_layer) {
        _layer = new layer.Layer(UI)
        _layer.zOrder = layer.layerKey
        UI.addChild(_layer)
        this.setLayer(layer.layerKey, _layer)
      }
      const view = layer.views.get(View.viewKey)
      let _view = new view.View()
      view.view = _view
      view.view.layer = _layer
      bindEvent(view)
      controllerMgr.register(view)

      this.setView(view.viewKey, _view)
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
