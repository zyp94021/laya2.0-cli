import Loading from '../../view/Loading'
import { IView } from './scenes/interface/IView'
import GameApp from './GameApp'
import { Singleton } from '../base/Singleton'
import { ViewConst } from './scenes/ViewConst'

/*
 * name
 */
export class MainController extends Singleton {
  private key_view = {
    //App.layerMgr.mainLayer
    1: [],
    //App.layerMgr.viewLayer
    2: [],
    //App.layerMgr.shareLayer
    3: [],
    //App.layerMgr.dialog
    4: [],
    //App.layerMgr.loading
  }
  constructor() {
    super()
    this.initView()
  }
  private initView() {
    // for (let layer in this.key_view) {
    //   for (let keyView of this.key_view[layer]) {
    //     const view = new keyView[1](GameApp.layerMgr.getLayer(Number(layer))) as IView
    //     // view.zOrder = key_view[0]
    //     view.name = keyView[0]
    //     GameApp.viewMgr.setView(keyView[0], view)
    //   }
    // }
  }
}
