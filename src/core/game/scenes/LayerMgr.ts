import { ILayer } from './interface/ILayer'

import { DialogLayer } from './DialogLayer'

import { BaseLayer } from './BaseLayer'
import { ViewLayer } from './ViewLayer'
import { Singleton } from '../../base/Singleton';

export enum LayerConst {
  main = 1,
  view,
  share,
  dialog,
  loading,
}
export class LayerMgr extends Singleton {
  constructor() {
    super()
  }

  private layers: Map<string, ILayer> = new Map<string, ILayer>()
  private createLayer(key): ILayer {
    let layer: ILayer
    switch (key) {
      case LayerConst.dialog:
        layer = new DialogLayer()
        break
      case LayerConst.view:
        layer = new ViewLayer()
        break
      default:
        layer = new BaseLayer()
        break
    }
    layer.zOrder = key
    layer.init()
    return layer
  }
  public getLayer(key) {
    let layer
    if (this.layers.get(key)) {
      layer = this.layers.get(key)
    } else {
      layer = this.createLayer(key)
      this.layers.set(key, layer)
    }
    return layer
  }

  public get mainLayer() {
    return this.getLayer(LayerConst.main)
  }
  public get viewLayer() {
    return this.getLayer(LayerConst.view)
  }
  public get shareLayer() {
    return this.getLayer(LayerConst.share)
  }
  public get dialogLayer() {
    return this.getLayer(LayerConst.dialog)
  }
  public get loadingLayer() {
    return this.getLayer(LayerConst.loading)
  }
}
