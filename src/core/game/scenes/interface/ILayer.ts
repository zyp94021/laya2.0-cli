import { IView } from './IView'

export interface ILayer extends Laya.View {
  openView(view: IView, ...args: any): void
  closeView(view: IView): void
  init(): void
}
