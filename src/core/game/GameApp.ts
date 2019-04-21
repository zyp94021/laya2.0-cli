import { MainController } from './MainController'
import { Service } from '../service/Service'
import { Dispatcher } from '../service/dispatcher/Dispatcher'
import { ViewMgr } from './scenes/ViewMgr'
import Socket from '../../net/socket'
import { StringUtil } from './utils/StringUtil'
import { TimeUtil } from './utils/TimeUtil'
import { createViews, openView } from '../../decorators/LayerViewMgr'
import BaseTest from '../../view/BaseTest'
export default class GameApp {
  // 全局配置数据
  public static GlobalData: any = null

  /**
   * 初始化函数
   * @constructor
   */
  public static init(scene) {
    return new Promise((resolve, reject) => {
      GameApp.GlobalData = Laya.loader.getRes('conf/global.json')
      //帧轮询
      Service.Init()
      // this.controller
      createViews(scene)
      openView(BaseTest)
      // GameApp.viewMgr.openView(ViewConst.MAIN)
    })
  }

  public static get controller(): MainController {
    return MainController.CreateOrGet()
  }
  public static get dispatcher(): Dispatcher {
    return Service.dispatcher
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
  public static get Socket(): Socket {
    return Socket.CreateOrGet()
  }
}
