import { Dispatcher } from './dispatcher/Dispatcher'

export class Service {
  public static Init(): void {

  }

  public static get dispatcher(): Dispatcher {
    return Dispatcher.CreateOrGet()
  }

}
