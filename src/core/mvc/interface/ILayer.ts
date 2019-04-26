import { IView } from './IView'

export interface ILayer extends Laya.Sprite {
  openView(view: IView, ...args: any[]): void
  closeView(view: IView): void
}
