import { ILayer } from './ILayer'

export interface IView extends Laya.View {
  onOpen?(...args: any[]): void

  onClose?(): void

  layer?: ILayer
}
