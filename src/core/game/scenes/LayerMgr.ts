import { ILayer } from './interface/ILayer'

import { DialogLayer } from './DialogLayer'

import { BaseLayer } from './BaseLayer'
import { ViewLayer } from './ViewLayer'
import { Singleton } from '../../base/Singleton'

export enum LayerConst {
  main = 1,
  view,
  share,
  dialog,
  loading,
}
export class LayerMgr extends Singleton {
  public constructor() {
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
  public getLayer(key): void {
    let layer
    if (this.layers.get(key)) {
      layer = this.layers.get(key)
    } else {
      layer = this.createLayer(key)
      this.layers.set(key, layer)
    }
    return layer
  }

  public get mainLayer(): void {
    return this.getLayer(LayerConst.main)
  }
  public get viewLayer(): void {
    return this.getLayer(LayerConst.view)
  }
  public get shareLayer(): void {
    return this.getLayer(LayerConst.share)
  }
  public get dialogLayer(): void {
    return this.getLayer(LayerConst.dialog)
  }
  public get loadingLayer(): void {
    return this.getLayer(LayerConst.loading)
  }
}
