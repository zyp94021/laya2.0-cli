import { ILayer } from './ILayer'

export interface IView extends Laya.View {
  openCb?(...args: any[]): void

  closeCb?(): void

  layer?: ILayer
}
