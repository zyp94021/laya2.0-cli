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
    5: [[ViewConst.MAIN, Loading]],
  }
  constructor() {
    super()
    this.initView()
  }
  private initView() {
    for (let layer in this.key_view) {
      for (let key_view of this.key_view[layer]) {
        const view = new key_view[1](GameApp.layerMgr.getLayer(Number(layer))) as IView
        // view.zOrder = key_view[0]
        view.name = key_view[0]
        GameApp.viewMgr.setView(key_view[0], view)
      }
    }
  }
}
