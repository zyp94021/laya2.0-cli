import { MainController } from './MainController'
import { service } from '../service/Service'
import { Dispatcher } from '../service/dispatcher/Dispatcher'
import { LayerMgr } from './scenes/LayerMgr'
import { ViewMgr } from './scenes/ViewMgr'
import { StringUtil } from './utils/StringUtil';
import { TimeUtil } from './utils/TimeUtil';
import { ViewConst } from './scenes/ViewConst';
import socket from '../../net/socket';
export default class GameApp {
  // 全局配置数据
  public static GlobalData: any = null

  /**
   * 初始化函数
   * @constructor
   */
  public static init() {
    return new Promise((resolve, reject) => {
      GameApp.GlobalData = Laya.loader.getRes('conf/global.json')
      //帧轮询
      service.Service.Init()
      this.controller
      GameApp.viewMgr.openView(ViewConst.MAIN)
    })
  }

  public static get controller(): MainController {
    return MainController.CreateOrGet()
  }
  public static get dispatcher(): Dispatcher {
    return service.Service.dispatcher
  }

  public static get layerMgr(): LayerMgr {
    return LayerMgr.CreateOrGet()
  }
  public static get viewMgr(): ViewMgr {
    return ViewMgr.CreateOrGet()
  }

  public static get StringUtil(): StringUtil {
    return StringUtil.CreateOrGet()
  }
  public static get TimeUtil(): TimeUtil {
    return TimeUtil.CreateOrGet()
  }
  public static get Socket():socket{
    return socket.CreateOrGet()
  }
}
