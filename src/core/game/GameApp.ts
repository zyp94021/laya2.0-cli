import { Service } from '../service/Service'
import { Dispatcher } from '../service/dispatcher/Dispatcher'
import Socket from '../../net/socket'
import { StringUtil } from './utils/StringUtil'
import { TimeUtil } from './utils/TimeUtil'

import GameNet from '../../net/http/GameNet'
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
      resolve()
    })
  }

  public static get dispatcher(): Dispatcher {
    return Service.dispatcher
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
  public static get net(): GameNet {
    return GameNet.CreateOrGet()
  }
}
