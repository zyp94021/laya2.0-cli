import { ILayer } from "./ILayer";

export interface IView extends Laya.View {
  open(...args: any[]): void

  close(): void

  layer: ILayer
}
